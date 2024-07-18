<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { usePaymentStore } from '@/stores/apps/payments';
import { useEventTypeStore } from '@/stores/apps/eventType';
import { usePaymentMethodStore } from '@/stores/apps/paymentMethod';
import { useDate } from 'vuetify';
const dateObject = useDate();

// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';

import { emailValidator, requiredValidator } from '@/utils/validators';
import { formatDateToMonthShort, formatDate, formatAmount } from '@/utils/helpers/formatters';
import { t } from '@/plugins/i18n';
import type { VForm } from 'vuetify/components/VForm';
import { Form } from 'vee-validate';
const refForm = ref<VForm>();

import { useSnackbar } from '@/stores/snackbar';
import DatePicker from '@/components/DatePicker.vue';
import PrespationDashboard from '@/views/prestations/PrespationDashboard.vue';
import { useRoute, useRouter } from 'vue-router';
const snackbarStore = useSnackbar();
const eventStore = useEventTypeStore();
const methodStore = usePaymentMethodStore();
// theme breadcrumb
const page = ref({ title: 'Gestion des paiements' });
const breadcrumbs = ref([
    {
        text: t('Dashboard'),
        disabled: false,
        href: '/'
    },
    {
        text: t('Gestion des paiements'),
        disabled: true,
        href: '#'
    }
]);
const payments = ref([]);
const eventTypes = ref([]);
const methods = ref([]);
const store = usePaymentStore();
const route = useRoute();

onMounted(() => {
    /*store.fetchPayments({}).then((response) => {
        payments.value = response.data.data;
    });*/
    if (route.query.method) {
        filters.value.payment_method = [route.query.method];
    }
    fetchPayments();
    fetchEventTypes();
    fetchMethods();
});

const loading = ref(false);
const saving = ref(false);
const duplicating = ref(false);
const deleting = ref(false);
const confirmDelete = ref(false);
const searchQuery = ref('');
const selectedRole = ref();
const isAddNewPaymentDrawerVisible = ref(false);
const timeout = ref(null);
const createdDate = ref(null);
const paymentStatus = ref(null);
const documentStatus = ref(null);
const dateModal = ref(false);
const selectedStatus = ref();
const rowPerPage = ref(100);
const currentPage = ref(2);
const totalPage = ref(2);
const totalPayments = ref(0);

const valid = ref(false);
const dialog = ref(false);
const errorMessage = ref(null);
const search = ref('');
const rolesbg = ref(['primary', 'secondary', 'error', 'success', 'warning']);
const sorting = ref([{ key: 'payment_date', order: 'DESC' }]);
const pageCount = ref(0);
const filters = ref({
    search: null,
    status: null,
    date: null,
    event_type: null
});
const options = ref({
    itemsPerPage: 100,
    rowsPerPage: 100,
    page: 1,
    sortDesc: [true],
    sortBy: [{ key: 'payment_date', order: 'DESC' }]
});

const editedIndex = ref(-1);
const editedItem = ref({
    id: null,
    avatar: '1.jpg',
    name: '',
    email: '',
    password: '',
    changePassword: true,
    jdate: '',
    role: '',
    rolestatus: ''
});
const defaultItem = ref({
    id: null,
    avatar: '1.jpg',
    name: '',
    email: '',
    password: '',
    changePassword: true,
    jdate: '',
    role: '',
    rolestatus: ''
});
const dialogDelete = ref(false);
const headers = ref([
    {
        title: t('Prénom'),
        align: 'start',
        key: 'prestation.customer.firstname',
        sortable: false
    },
    {
        title: t('Nom'),
        align: 'start',
        key: 'prestation.customer.lastname',
        sortable: false
    },
    {
        title: t('Email'),
        align: 'start',
        key: 'prestation.customer.email',
        sortable: false
    },
    {
        title: t('Téléphone'),
        align: 'start',
        key: 'prestation.customer.phone',
        sortable: false
    },
    {
        title: t('Prestation'),
        align: 'start',
        key: 'prestation.event_type'
    },
    {
        title: t('Mode de paiement'),
        align: 'start',
        key: 'payment_method'
    },
    {
        title: t('Montant payé'),
        align: 'start',
        key: 'amount'
    },
    {
        title: t('Date du paiement'),
        align: 'start',
        key: 'payment_date'
    },
    /* { title: 'Protein (g)', key: 'protein' },*/
    { title: 'Actions', key: 'actions', sortable: false }
]);
const formatedDate = computed(() => {
    if (filters.value.date && filters.value.date.length > 0) {
        return formatDate(filters.value.date[0]) + ' - ' + formatDate(filters.value.date[filters.value.date.length - 1]);
    }
    return null;
});

//Methods
const filteredList = computed(() => {
    return store.payments.data.filter((user: any) => {
        return user.email.toLowerCase().includes(search.value.toLowerCase());
    });
});

function editItem(item: any) {
    loading.value = false;
    editedIndex.value = payments.value.indexOf(item);
    editedItem.value = Object.assign({}, item);
    dialog.value = true;
}
function deleteItem(item: any) {
    editedItem.value = item;
    dialogDelete.value = true;
}

function close() {
    dialog.value = false;
    setTimeout(() => {
        editedItem.value = Object.assign({}, defaultItem.value);
        editedIndex.value = -1;
    }, 300);
}
function save(values: any, { setErrors }: any) {
    refForm.value?.validate().then(({ valid }) => {
        if (valid) {
            saving.value = true;
            store
                .addItem(editedItem.value)
                .then((response) => {
                    if (response.data.error) {
                        setErrors({ apiError: response.data.message });
                        return;
                    }
                    if (editedItem.value.id != null) {
                        Object.assign(payments.value[editedIndex.value], response.data);
                    } else {
                        payments.value.unshift(response.data);
                    }
                    loading.value = false;
                    dialog.value = false;
                    editedItem.value = { changePassword: true };
                    snackbarStore.showSuccess(t('Utilisateur enregistrphp artisan serveé avec succès'));
                })
                .catch((error) => {
                    saving.value = false;
                    setErrors({ apiError: error });
                })
                .then(() => {
                    saving.value = false;
                    setErrors({ apiError: null });
                });

            /* */
        }
    });

    /*if (editedIndex.value > -1) {
        Object.assign(payments.value[editedIndex.value], editedItem.value);
    } else {
        payments.value.push(editedItem.value);
    }*/
    //close();
}

function deleteItemConfirm() {
    store.deleteItem(editedItem.value.id);
    const index = payments.value.findIndex((e) => e.id == editedItem.value.id);
    payments.value.splice(index, 1);
    dialogDelete.value = false;
    snackbarStore.showSuccess(t('Utilisateur supprimé avec succès'));
}

//Computed Property
const formTitle = computed(() => {
    return editedIndex.value === -1 ? 'Nouvel administrateur' : 'Modifier l’administrateur';
});
const dateRange = computed(() => {
    if (filters.value.date && filters.value.date.length) {
        if (filters.value.date.length > 1) {
            return [
                dateObject.format(filters.value.date[0], 'shortDate'),
                dateObject.format(filters.value.date[filters.value.date.length - 1], 'shortDate')
            ];
        }
        return [dateObject.format(filters.value.date[0], 'shortDate'), dateObject.format(filters.value.date[0], 'shortDate')];
    }
    return null;
});

function fetchPayments() {
    try {
        clearTimeout(timeout.value);
    } catch (e) {
        /* empty */
    }

    timeout.value = setTimeout(() => {
        loading.value = true;
        let by = 'id';
        let direction = 'desc';
        console.log(sorting.value);
        if (sorting.value.length > 0) {
            by = sorting.value[0].key;
            direction = sorting.value[0].order;
        }
        store
            .fetchItems({
                term: search.value,
                paginate: rowPerPage.value,
                current_page: currentPage.value,
                /* page: currentPage.value,

                per_page: rowPerPage.value,*/
                direction: direction,
                order_by: by,

                page: options.value.page,
                per_page: options.value.itemsPerPage,
                ...{ ...filters.value, date: dateRange.value }
            })
            .then((response) => {
                if (response.data) {
                    /*if (download != null && download === true) {
                        const blob = new Blob([jsonToCSV(response.data.result)], { type: 'text/csv;charset=utf-8' });
                        const url = window.URL.createObjectURL(blob);
                        const link = document.createElement('a');

                        link.href = url;
                        link.download = 'reservation.csv';
                        link.click();
                    } else {*/
                    const { data, current_page, next_page_url, total, per_page, to, last_page } = response.data;

                    payments.value = data;
                    totalPage.value = last_page;
                    totalPayments.value = total;
                    //currentPage.value = current_page;
                    /* }*/
                }
            })
            .catch((error) => {
                console.error(error);
            })
            .then(() => {
                loading.value = false;
            });
    }, 1000);
}
function fetchEventTypes() {
    eventStore
        .fetchItems({
            term: '',
            paginate: 500,
            current_page: 1,
            direction: 'asc',
            order_by: 'name',

            page: 1,
            per_page: 500
        })
        .then((response) => {
            if (response.data) {
                /*if (download != null && download === true) {
                    const blob = new Blob([jsonToCSV(response.data.result)], { type: 'text/csv;charset=utf-8' });
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');

                    link.href = url;
                    link.download = 'reservation.csv';
                    link.click();
                } else {*/
                const { data, current_page, next_page_url, total, per_page, to, last_page } = response.data;

                eventTypes.value = data;
                //currentPage.value = current_page;
                /* }*/
            }
        })
        .catch((error) => {
            console.error(error);
        })
        .then(() => {
            loading.value = false;
        });
}

function fetchMethods() {
    methodStore
        .fetchItems({
            term: '',
            paginate: 500,
            current_page: 1,
            direction: 'asc',
            order_by: 'name',

            page: 1,
            per_page: 500
        })
        .then((response) => {
            if (response.data) {
                /*if (download != null && download === true) {
                    const blob = new Blob([jsonToCSV(response.data.result)], { type: 'text/csv;charset=utf-8' });
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');

                    link.href = url;
                    link.download = 'reservation.csv';
                    link.click();
                } else {*/
                const { data, current_page, next_page_url, total, per_page, to, last_page } = response.data;

                methods.value = data;
                //currentPage.value = current_page;
                /* }*/
            }
        })
        .catch((error) => {
            console.error(error);
        })
        .then(() => {
            loading.value = false;
        });
}

watch(
    [search, options, filters /*currentPage, rowPerPage*/],
    () => {
        fetchPayments();
    },
    { deep: true }
);

// watchEffect(fetchPayments)

// 👉 watching current page
watchEffect(() => {
    if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});
</script>
<template>
    <BaseBreadcrumb :title="`${page.title}(${totalPayments})`" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <PrespationDashboard show-payments show-description show-total-payments />
    <v-row>
        <v-col cols="12">
            <v-data-table-server
                class="border rounded-md"
                :headers="headers"
                :loading="loading"
                :items="payments"
                :multi-sort="false"
                v-model:items-per-page="rowPerPage"
                :items-per-page-text="$t('Articles par page')"
                v-model:options="options"
                v-model:sort-by="sorting"
                v-model:page="currentPage"
                v-model:items-length="totalPayments"
                :show-select="false"
                :loading-text="$t('Chargement des éléments')"
                :no-data-text="$t('Pas de données')"
                :no-results-text="$t('Aucun résultat')"
                @page-count="totalPage = $event"
            >
                <template v-slot:top>
                    <v-toolbar class="rounded-t-md pl-2 pr-2" flat>
                        <v-row>
                            <v-col>
                                <v-text-field
                                    density="compact"
                                    v-model="filters.search"
                                    :placeholder="$t('Rechercher prénom, nom, email, téléphone...')"
                                    hide-details
                                    variant="solo"
                                ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-select
                                    density="compact"
                                    v-model="filters.event_type"
                                    :placeholder="$t('Prestation')"
                                    :items="eventTypes"
                                    item-value="name"
                                    item-title="name"
                                    multiple
                                    hide-details
                                    variant="solo"
                                    clearable
                                ></v-select>
                            </v-col>
                            <v-col>
                                <v-select
                                    density="compact"
                                    v-model="filters.payment_method"
                                    :placeholder="$t('Mode de paiement')"
                                    :items="methods"
                                    item-value="name"
                                    item-title="name"
                                    multiple
                                    hide-details
                                    variant="solo"
                                    clearable
                                ></v-select>
                            </v-col>
                            <v-col>
                                <v-dialog ref="dialog" v-model="dateModal" v-model:return-value="filters.date" persistent width="290px">
                                    <template #activator="{ props }">
                                        <VTextField
                                            v-model="formatedDate"
                                            prepend-inner-icon="bx-calendar"
                                            readonly
                                            v-bind="props"
                                            density="compact"
                                            :placeholder="$t('Date')"
                                            hide-details
                                            variant="solo"
                                            clearable
                                            @click:clear="filters.date = null"
                                        />
                                    </template>
                                    <template #default="{ isActive }">
                                        <VLocaleProvider locale="fr">
                                            <VDatePicker v-model="filters.date" hide-header multiple="range">
                                                <template #actions>
                                                    <VBtn color="primary" @click="dateModal = false">
                                                        {{ $t('Annuler') }}
                                                    </VBtn>
                                                    <VSpacer />
                                                    <VBtn variant="elevated" color="primary" @click="dateModal = false">
                                                        {{ $t('OK') }}
                                                    </VBtn>
                                                </template>
                                            </VDatePicker>
                                        </VLocaleProvider>
                                    </template>
                                </v-dialog>
                            </v-col>
                        </v-row>

                        <!--                        <v-dialog v-model="dialog" max-width="350px">
                            <template v-slot:activator="{ props }">
                                <v-btn color="primary" variant="flat" @click="editItem = {}" dark v-bind="props">{{
                                    $t('Ajouter un administrateur')
                                }}</v-btn>
                            </template>
                            <v-card>
                                <v-card-title class="pa-4 bg-secondary">
                                    <span class="text-h5">{{ formTitle }}</span>
                                </v-card-title>
                                <Form v-slot="{ errors, isSubmitting }" ref="refForm" v-model="valid" @submit="save">
                                    <v-card-text>
                                        <v-container class="px-0">
                                            <v-row>
                                                <v-col cols="12">
                                                    <v-text-field
                                                        v-model="editedItem.name"
                                                        :rules="[requiredValidator]"
                                                        :label="$t('Nom')"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field
                                                        v-model="editedItem.email"
                                                        :label="$t('Email')"
                                                        :rules="[requiredValidator, emailValidator]"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field
                                                        v-model="editedItem.password"
                                                        :label="$t('Mot de passe')"
                                                        placeholder="············"
                                                        :append-inner-icon="
                                                            editedItem.id && editedItem.changePassword ? 'mdi-eye-off' : 'mdi-eye'
                                                        "
                                                        :rules="[
                                                            (editedItem.id && editedItem.changePassword) || !editedItem.id
                                                                ? requiredValidator
                                                                : true
                                                        ]"
                                                        :readonly="/*editedItem.id && */ !editedItem.changePassword"
                                                        @click:append-inner="editedItem.changePassword = !editedItem.changePassword"
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                            <div v-if="errors.apiError" class="mt-2">
                                                <v-alert color="error">{{ errors.apiError }}</v-alert>
                                            </div>
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="error" variant="flat" dark @click="close"> {{ $t('Annuler') }} </v-btn>
                                        <v-btn color="success" variant="flat" :loading="loading" type="submit">
                                            {{ $t('Sauvegarder') }}
                                        </v-btn>
                                    </v-card-actions>
                                </Form>
                            </v-card>
                        </v-dialog>-->
                        <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card>
                                <v-card-title class="text-h5 text-center py-6">{{
                                    $t('Êtes-vous sûr de vouloir supprimer cet élément ?')
                                }}</v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="error" variant="flat" dark @click="dialogDelete = false">{{ $t('Annuler') }}</v-btn>
                                    <v-btn color="success" variant="flat" dark @click="deleteItemConfirm">{{ $t('OK') }}</v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
                <template v-slot:item.amount="{ item }">
                    {{ formatAmount(item.amount) }}
                </template>
                <template v-slot:item.payment_date="{ item }">
                    {{ formatDate(item.payment_date) }}
                </template>
                <!--                <template v-slot:item.status="{ item }">
                    <v-chip :color="store.statusColor(item)" size="small" label>{{ store.statusText(item) }}</v-chip>
                </template>-->
                <template v-slot:item.actions="{ item }">
                    <div class="d-flex align-center">
                        <v-tooltip :text="$t('Voir la prestation liée')">
                            <template v-slot:activator="{ props }">
                                <v-btn icon flat :to="'/prestations/' + item.prestation_id" v-bind="props"
                                    ><EyeIcon stroke-width="1.5" size="20" class="text-primary"
                                /></v-btn>
                            </template>
                        </v-tooltip>
                        <v-tooltip :text="$t('Supprimer')">
                            <template v-slot:activator="{ props }">
                                <v-btn icon flat @click="deleteItem(item)" v-bind="props"
                                    ><TrashIcon stroke-width="1.5" size="20" class="text-error"
                                /></v-btn>
                            </template>
                        </v-tooltip>
                    </div>
                </template>
                <template v-slot:no-data>
                    <span>{{ $t('Aucune donnée disponible') }}</span>
                    <!--                    <v-btn color="primary" @click="initialize"> Reset </v-btn>-->
                </template>

                <!--                <template v-slot:bottom>
                    <div class="text-center pt-2">
                        <v-pagination v-model="currentPage" :length="totalPage"></v-pagination>
                    </div>
                </template>-->
            </v-data-table-server>
        </v-col>
    </v-row>
</template>
