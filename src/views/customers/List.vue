<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { useCustomerStore } from '@/stores/apps/customers';
import { useEventTypeStore } from '@/stores/apps/eventType';
import { useDate } from 'vuetify';
const dateObject = useDate();

// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';

import { emailValidator, requiredValidator } from '@/utils/validators';
import { formatDateToMonthShort, formatDate } from '@/utils/helpers/formatters';
import { t } from '@/plugins/i18n';
import type { VForm } from 'vuetify/components/VForm';
import { Form } from 'vee-validate';
const refForm = ref<VForm>();

import { useSnackbar } from '@/stores/snackbar';
import DatePicker from '@/components/DatePicker.vue';
import CustomerDashboard from '@/views/customers/CustomerDashboard.vue';
import CustomerForm from '@/views/customers/CustomerForm.vue';
const snackbarStore = useSnackbar();
const eventStore = useEventTypeStore();
// theme breadcrumb
const page = ref({ title: 'Clients' });
const breadcrumbs = ref([
    {
        text: t('Dashboard'),
        disabled: false,
        href: '/'
    },
    {
        text: t('Clients'),
        disabled: true,
        href: '#'
    }
]);
const customers = ref([]);
const eventTypes = ref([]);
const store = useCustomerStore();

onMounted(() => {
    /*store.fetchCustomers({}).then((response) => {
        customers.value = response.data.data;
    });*/
    fetchCustomers();
    //fetchEventTypes();
});

const loading = ref(false);
const saving = ref(false);
const duplicating = ref(false);
const deleting = ref(false);
const confirmDelete = ref(false);
const searchQuery = ref('');
const selectedRole = ref();
const isAddNewCustomerDrawerVisible = ref(false);
const timeout = ref(null);
const createdDate = ref(null);
const paymentStatus = ref(null);
const documentStatus = ref(null);
const dateModal = ref(false);
const selectedStatus = ref();
const rowPerPage = ref(100);
const currentPage = ref(2);
const totalPage = ref(2);
const totalCustomers = ref(0);

const valid = ref(false);
const dialog = ref(false);
const dialogEdit = ref(false);
const errorMessage = ref(null);
const search = ref('');
const rolesbg = ref(['primary', 'secondary', 'error', 'success', 'warning']);
const sorting = ref([{ key: 'firstname', order: 'asc' }]);
const pageCount = ref(0);
const prospect = ref({});
const client = ref({ is_customer: true });
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
    sortBy: [{ key: 'firstname', order: 'asc' }]
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
        title: 'Prénom',
        align: 'start',
        key: 'firstname'
    },
    {
        title: 'Nom',
        align: 'start',
        key: 'lastname'
    },
    {
        title: 'Email',
        align: 'start',
        key: 'email'
    },
    {
        title: 'Téléphone',
        align: 'start',
        key: 'phone'
    },
    {
        title: 'Date de creation',
        align: 'start',
        key: 'created_at'
    },
    {
        title: 'Status',
        align: 'start',
        key: 'is_customer'
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
    return store.customers.data.filter((user: any) => {
        return user.email.toLowerCase().includes(search.value.toLowerCase());
    });
});

function editItem(item: any) {
    loading.value = false;
    editedIndex.value = customers.value.indexOf(item);
    editedItem.value = Object.assign({}, item);
    dialogEdit.value = true;
}
function deleteItem(item: any) {
    editedItem.value = item;
    dialogDelete.value = true;
}

function close() {
    dialogEdit.value = false;
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
                        snackbarStore.showError(response.data.message);
                        return;
                    }
                    if (editedItem.value.id != null) {
                        Object.assign(customers.value[editedIndex.value], response.data);
                    } else {
                        customers.value.unshift(response.data);
                    }
                    saving.value = false;
                    dialogEdit.value = false;

                    snackbarStore.showSuccess(t('Client enregistré avec succès'));
                    store.fetchStatistics();
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
        Object.assign(customers.value[editedIndex.value], editedItem.value);
    } else {
        customers.value.push(editedItem.value);
    }*/
    //close();
}

function deleteItemConfirm() {
    store.deleteItem(editedItem.value.id);
    const index = customers.value.findIndex((e) => e.id == editedItem.value.id);
    customers.value.splice(index, 1);
    dialogDelete.value = false;
    snackbarStore.showSuccess(t('Client supprimé avec succès'));
    store.fetchStatistics();
}

//Computed Property
const formTitle = computed(() => {
    return editedIndex.value === -1
        ? editedItem.value.is_customer
            ? t('Nouvel Client')
            : t('Nouvel Prospect')
        : editedItem.value.is_customer
          ? t('Modifier Le Client')
          : t('Modifier Le Prospect');
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

function fetchCustomers() {
    try {
        clearTimeout(timeout.value);
    } catch (e) {
        /* empty */
    }
    client.value = { is_customer: true };
    prospect.value = {};

    timeout.value = setTimeout(() => {
        loading.value = true;
        let by = 'firstname';
        let direction = 'asc';
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

                    customers.value = data;
                    totalPage.value = last_page;
                    totalCustomers.value = total;
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

watch(
    [search, options, filters /*currentPage, rowPerPage*/],
    () => {
        fetchCustomers();
    },
    { deep: true }
);

// watchEffect(fetchCustomers)

// 👉 watching current page
watchEffect(() => {
    if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});
</script>
<template>
    <BaseBreadcrumb :title="`${page.title}(${totalCustomers})`" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <CustomerDashboard />
        </v-col>
        <v-col cols="12">
            <v-data-table-server
                class="border rounded-md"
                :headers="headers"
                :loading="loading"
                :items="customers"
                :multi-sort="false"
                v-model:items-per-page="rowPerPage"
                :items-per-page-text="$t('Articles par page')"
                v-model:options="options"
                v-model:sort-by="sorting"
                v-model:page="currentPage"
                v-model:items-length="totalCustomers"
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
                                    v-model="filters.status"
                                    :placeholder="$t('Statut')"
                                    :items="store.statusesList"
                                    item-value="id"
                                    item-title="label"
                                    clearable
                                    hide-details
                                    variant="solo"
                                ></v-select>
                            </v-col>
                            <!--                            <v-col>
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
                                ></v-select>
                            </v-col>-->
                            <v-col>
                                <v-dialog ref="dialog" v-model="dateModal" v-model:return-value="filters.date" persistent width="290px">
                                    <template #activator="{ props }">
                                        <VTextField
                                            v-model="formatedDate"
                                            prepend-inner-icon="bx-calendar"
                                            v-bind="props"
                                            density="compact"
                                            :placeholder="$t('Date')"
                                            hide-details
                                            variant="solo"
                                            clearable
                                            readonly
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
                            <v-col class="d-flex gap-2 justify-space-between">
                                <!--                                <v-btn color="primary" class="align-self-end" variant="flat" @click="editItem({})" dark>{{
                                    $t('Ajouter un Prospect')
                                }}</v-btn>-->
                                <customer-form v-model="prospect" :button-text="$t('Ajouter un Prospect')" @saved="fetchCustomers" />
                                <customer-form v-model="client" :button-text="$t('Ajouter un client')" @saved="fetchCustomers" />

                                <!--                                <v-btn
                                    color="primary"
                                    class="align-self-end"
                                    variant="flat"
                                    @click="editItem({ is_customer: true })"
                                    dark
                                    >{{ $t('Ajouter un client') }}</v-btn
                                >-->
                                <v-dialog v-model="dialogEdit" max-width="600px">
                                    <v-card>
                                        <v-card-title class="pa-4 bg-secondary">
                                            <span class="text-h5">{{ formTitle }}</span>
                                        </v-card-title>
                                        <Form v-slot="{ errors, isSubmitting }" ref="refForm" v-model="valid" @submit="save">
                                            <v-card-text>
                                                <v-container class="px-0">
                                                    <v-row>
                                                        <v-col cols="12" md="6">
                                                            <v-text-field
                                                                v-model="editedItem.firstname"
                                                                :rules="[requiredValidator]"
                                                                :label="$t('Prénom')"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" md="6">
                                                            <v-text-field
                                                                v-model="editedItem.lastname"
                                                                :rules="[requiredValidator]"
                                                                :label="$t('Nom')"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" md="6">
                                                            <v-text-field v-model="editedItem.email" :label="$t('Email')"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" md="6">
                                                            <v-text-field
                                                                v-model="editedItem.phone"
                                                                :label="$t('Téléphone')"
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
                                                <v-btn color="success" variant="flat" :loading="saving" type="submit">
                                                    {{ $t('Sauvegarder') }}
                                                </v-btn>
                                                <v-spacer></v-spacer>
                                            </v-card-actions>
                                        </Form>
                                    </v-card>
                                </v-dialog>
                            </v-col>
                        </v-row>

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
                <template v-slot:item.firstname="{ item }">
                    <span class="cursor-pointer" @click="$router.push('/customers/' + item.id)">{{ item.firstname }}</span>
                </template>
                <template v-slot:item.lastname="{ item }">
                    <span class="cursor-pointer" @click="$router.push('/customers/' + item.id)">{{ item.lastname }}</span>
                </template>
                <template v-slot:item.created_at="{ item }">
                    {{ formatDate(item.created_at) }}
                </template>
                <template v-slot:item.is_customer="{ item }">
                    <v-chip :color="item.is_customer == 1 ? 'success' : 'warning'" size="small" label>{{
                        item.is_customer == 1 ? $t('Client') : $t('Prospet')
                    }}</v-chip>
                </template>
                <template v-slot:item.actions="{ index, item }">
                    <div class="d-flex align-center">
                        <v-btn density="compact" color="primary" variant="outlined" :to="'/customers/' + item.id">{{ $t('Voir') }}</v-btn>
                        <customer-form v-model="customers[index]" :is-new="false" @saved="fetchCustomers" />
                        <!--                        <v-tooltip :text="$t('Modifier')">
                            <template v-slot:activator="{ props }">
                                <v-btn icon flat @click="editItem(item)" v-bind="props"
                                    ><PencilIcon stroke-width="1.5" size="20" class="text-primary"
                                /></v-btn>
                            </template>
                        </v-tooltip>-->
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
