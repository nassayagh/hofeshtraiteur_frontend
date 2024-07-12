<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { useDemandStore } from '@/stores/apps/demands';
import { useEventTypeStore } from '@/stores/apps/eventType';
import { useCustomerStore } from '@/stores/apps/customers';
import { useHallStore } from '@/stores/apps/hall';
import type { CurrencyEuroIcon, BasketIcon, ShoppingCartIcon } from 'vue-tabler-icons';

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
import DemandsDashboard from '@/views/demands/DemandsDashboard.vue';
import ValidateDemand from '@/components/ValidateDemand.vue';
const snackbarStore = useSnackbar();
const eventStore = useEventTypeStore();
const customerStore = useCustomerStore();
const hallStore = useHallStore();
// theme breadcrumb
const page = ref({ title: t('Gestion des demandes') });
const breadcrumbs = ref([
    {
        text: t('Dashboard'),
        disabled: false,
        href: '/'
    },
    {
        text: t('Gestion des demandes'),
        disabled: true,
        href: '#'
    }
]);
const demands = ref([]);
const eventTypes = ref([]);
const customers = ref([]);
const halls = ref([]);
const store = useDemandStore();

onMounted(() => {
    /*store.fetchDemands({}).then((response) => {
        demands.value = response.data.data;
    });*/
    fetchDemands();
    fetchEventTypes();
    fetchCustomers();
    hallStore.fetchItems({ per_page: 1000 }).then((response) => {
        halls.value = response.data.data;
    });
});

const showDescription = ref(false);
const loading = ref(false);
const saving = ref(false);
const duplicating = ref(false);
const deleting = ref(false);
const confirmDelete = ref(false);
const searchQuery = ref('');
const selectedRole = ref();
const isAddNewDemandDrawerVisible = ref(false);
const timeout = ref(null);
const createdDate = ref(null);
const paymentStatus = ref(null);
const documentStatus = ref(null);
const dateModal = ref(false);
const dateDemandModal = ref(false);
const selectedStatus = ref();
const rowPerPage = ref(25);
const currentPage = ref(2);
const totalPage = ref(2);
const totalDemands = ref(0);

const valid = ref(false);
const dialogEdit = ref(false);
const errorMessage = ref(null);
const search = ref('');
const rolesbg = ref(['primary', 'secondary', 'error', 'success', 'warning']);
const sorting = ref([{ key: 'id', order: 'DESC' }]);
const pageCount = ref(0);
const statistics = ref({
    total: 0,
    validated: 0,
    unvalidated: 0
});
const filters = ref({
    search: null,
    status: null,
    date: null,
    event_type: null
});
const options = ref({
    itemsPerPage: 25,
    rowsPerPage: 25,
    page: 1,
    sortDesc: [true],
    sortBy: [{ key: 'id', order: 'DESC' }]
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
    rolestatus: '',
    customer: {}
});
const dialogDelete = ref(false);
const headers = ref([
    {
        title: t('ID'),
        align: 'start',
        key: 'id',
        sortable: true
    },
    {
        title: t('Prénom'),
        align: 'start',
        key: 'customer.firstname',
        sortable: false
    },
    {
        title: t('Nom'),
        align: 'start',
        key: 'customer.lastname',
        sortable: false
    },
    {
        title: t('Email'),
        align: 'start',
        key: 'customer.email',
        sortable: false
    },
    {
        title: t('Tél.'),
        align: 'start',
        key: 'customer.phone',
        sortable: false
    },
    {
        title: t('Prestation'),
        align: 'start',
        key: 'event_type'
    },
    /*{
        title: t('Date de la demande'),
        align: 'start',
        key: 'demand_date'
    },*/
    /* {
        title: t('Statut'),
        align: 'start',
        key: 'status'
    },*/
    {
        title: t('Source'),
        align: 'start',
        key: 'source'
    },

    { title: t("Date 'évén"), key: 'event_date' },
    { title: t('Moment'), key: 'reception_period' },
    { title: t('Heure'), key: 'reception_start_time' },
    { title: t('Lieu'), key: 'event_location' },
    { title: t('Salle'), key: 'hall.name' },
    { title: t('Conv'), key: 'number_people' },
    { title: 'Actions', key: 'actions', sortable: false }
]);
const formatedDate = computed(() => {
    if (filters.value.date && filters.value.date.length > 0) {
        return (
            dateObject.format(filters.value.date[0], 'shortDate') +
            ' - ' +
            dateObject.format(filters.value.date[filters.value.date.length - 1], 'shortDate')
        );
    }
    return null;
});
const formatedDemandDate = computed(() => {
    if (editedItem.value.event_date) {
        return dateObject.format(editedItem.value.event_date, 'shortDate');
    }
    return null;
});

//Methods
const filteredList = computed(() => {
    return store.demands.data.filter((user: any) => {
        return user.email.toLowerCase().includes(search.value.toLowerCase());
    });
});

function editItem(item: any) {
    loading.value = false;
    editedIndex.value = demands.value.indexOf(item);
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
        editedItem.value = Object.assign({ customer: {} }, defaultItem.value);
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
                        Object.assign(demands.value[editedIndex.value], response.data);
                    } else {
                        demands.value.unshift(response.data);
                    }
                    saving.value = false;
                    dialogEdit.value = false;
                    editedItem.value = { customer: {} };
                    snackbarStore.showSuccess(t('Demande enregistrée avec succès'));
                    fetchEventTypes();
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
        Object.assign(demands.value[editedIndex.value], editedItem.value);
    } else {
        demands.value.push(editedItem.value);
    }*/
    //close();
}

function deleteItemConfirm() {
    store.deleteItem(editedItem.value.id);
    const index = demands.value.findIndex((e) => e.id == editedItem.value.id);
    demands.value.splice(index, 1);
    dialogDelete.value = false;
    snackbarStore.showSuccess(t('Demande supprimée avec succès'));
    store.fetchStatistics();
}

//Computed Property
const formTitle = computed(() => {
    return editedIndex.value === -1 ? 'Nouvelle demande' : 'Modifier la demande';
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

function fetchDemands() {
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

                    demands.value = data;
                    totalPage.value = last_page;
                    totalDemands.value = total;
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
            //loading.value = false;
        });
}
function fetchCustomers() {
    customerStore
        .fetchItems({
            term: '',
            paginate: 5000,
            current_page: 1,
            direction: 'asc',
            order_by: 'firstname',

            page: 1,
            per_page: 5000
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

                customers.value = data.map((e) => {
                    return { ...e, name: e.firstname + ' ' + e.lastname + ' (' + (e.is_customer ? t('Client') : t('Prospect')) + ')' };
                });
                //currentPage.value = current_page;
                /* }*/
            }
        })
        .catch((error) => {
            console.error(error);
        })
        .then(() => {
            //loading.value = false;
        });
}

watch(
    [search, options, filters /*currentPage, rowPerPage*/],
    () => {
        fetchDemands();
    },
    { deep: true }
);

// watchEffect(fetchDemands)

// 👉 watching current page
watchEffect(() => {
    if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});

function customerSelected(val) {
    if (val) {
        const customer = customers.value.find((e) => e.id == val);
        if (customer) {
            editedItem.value.customer = customer;
        }
    }
}
</script>
<template>
    <BaseBreadcrumb :title="`${page.title}(${totalDemands})`" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <!--        <v-col cols="12">
            <demands-dashboard />
        </v-col>-->
        <v-col cols="12">
            <v-data-table-server
                class="border rounded-md"
                :headers="headers"
                :loading="loading"
                :items="demands"
                :multi-sort="false"
                v-model:items-per-page="rowPerPage"
                :items-per-page-text="$t('Articles par page')"
                v-model:options="options"
                v-model:sort-by="sorting"
                v-model:page="currentPage"
                v-model:items-length="totalDemands"
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
                                    clearable
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
                                    clearable
                                    multiple
                                    hide-details
                                    variant="solo"
                                ></v-select>
                            </v-col>
                            <!--                            <v-col>
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
                            </v-col>-->
                            <v-col>
                                <v-select
                                    density="compact"
                                    v-model="filters.source"
                                    :placeholder="$t('Source')"
                                    :items="['admin', 'site']"
                                    clearable
                                    hide-details
                                    variant="solo"
                                ></v-select>
                            </v-col>
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
                            <v-col class="">
                                <v-dialog v-model="dialogEdit" max-width="600px">
                                    <template v-slot:activator="{ props }">
                                        <v-btn
                                            color="primary"
                                            class="align-self-end float-end"
                                            variant="flat"
                                            @click="editItem({ customer: {}, source: 'admin' })"
                                            dark
                                            v-bind="props"
                                            >{{ $t('Ajouter une demande') }}</v-btn
                                        >
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
                                                            <v-autocomplete
                                                                v-model="editedItem.customer_id"
                                                                :placeholder="$t('Client')"
                                                                :items="customers"
                                                                item-value="id"
                                                                item-title="name"
                                                                clearable
                                                                hide-details
                                                                variant="outlined"
                                                                @update:modelValue="customerSelected"
                                                            >
                                                            </v-autocomplete>
                                                        </v-col>
                                                        <v-col cols="12" md="6">
                                                            <v-text-field
                                                                v-model="editedItem.customer.firstname"
                                                                :rules="[requiredValidator]"
                                                                :label="$t('Prénom')"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" md="6">
                                                            <v-text-field
                                                                v-model="editedItem.customer.lastname"
                                                                :rules="[requiredValidator]"
                                                                :label="$t('Nom')"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" md="6">
                                                            <v-text-field
                                                                v-model="editedItem.customer.email"
                                                                :label="$t('Email')"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" md="6">
                                                            <v-text-field
                                                                v-model="editedItem.customer.phone"
                                                                :label="$t('Téléphone')"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" md="6">
                                                            <v-combobox
                                                                v-model="editedItem.event_type"
                                                                :placeholder="$t('Type d\'événement')"
                                                                :items="eventTypes.map((e) => e.name)"
                                                                clearable
                                                                hide-details
                                                                variant="outlined"
                                                            ></v-combobox>
                                                        </v-col>
                                                        <v-col cols="12" md="6">
                                                            <v-dialog
                                                                ref="dialogDemandDate"
                                                                v-model="dateDemandModal"
                                                                v-model:return-value="editedItem.event_date"
                                                                persistent
                                                                width="290px"
                                                            >
                                                                <template #activator="{ props }">
                                                                    <VTextField
                                                                        v-model="formatedDemandDate"
                                                                        prepend-inner-icon="bx-calendar"
                                                                        v-bind="props"
                                                                        :placeholder="$t('Date de la demande')"
                                                                        hide-details
                                                                        clearable
                                                                        readonly
                                                                        @click:clear="editedItem.event_date = null"
                                                                    />
                                                                </template>
                                                                <template #default="{ isActive }">
                                                                    <VLocaleProvider locale="fr">
                                                                        <VDatePicker v-model="editedItem.event_date" hide-header>
                                                                            <template #actions>
                                                                                <VBtn color="primary" @click="dateDemandModal = false">
                                                                                    {{ $t('Annuler') }}
                                                                                </VBtn>
                                                                                <VSpacer />
                                                                                <VBtn
                                                                                    variant="elevated"
                                                                                    color="primary"
                                                                                    @click="dateDemandModal = false"
                                                                                >
                                                                                    {{ $t('OK') }}
                                                                                </VBtn>
                                                                            </template>
                                                                        </VDatePicker>
                                                                    </VLocaleProvider>
                                                                </template>
                                                            </v-dialog>
                                                        </v-col>

                                                        <v-col cols="12" md="6">
                                                            <v-select
                                                                v-model="editedItem.reception_period"
                                                                hide-details
                                                                :items="[$t('En matiné'), $t('Le midi'), $t('En soirée')]"
                                                                :label="$t('La réception se déroulera plutôt')"
                                                                clearable
                                                            ></v-select>
                                                        </v-col>
                                                        <v-col cols="12" md="6">
                                                            <v-text-field
                                                                v-model="editedItem.reception_start_time"
                                                                hide-details
                                                                :label="$t('Heure de réception')"
                                                                clearable
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" md="6" v-if="editedItem.source != 'admin'">
                                                            <v-text-field
                                                                v-model="editedItem.event_location"
                                                                hide-details
                                                                :label="$t('Lieu de l\'événement')"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" md="6" v-else>
                                                            <v-select
                                                                v-model="editedItem.hall_id"
                                                                :items="halls"
                                                                item-value="id"
                                                                item-title="name"
                                                                :label="$t('Salle liée')"
                                                            />
                                                        </v-col>
                                                        <v-col cols="12" md="6">
                                                            <v-text-field
                                                                v-model="editedItem.number_people"
                                                                hide-details
                                                                type="number"
                                                                :label="$t('Nombre de convives')"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12">
                                                            <v-textarea
                                                                v-model="editedItem.comment"
                                                                hide-details
                                                                :label="$t('Description de la demande')"
                                                            ></v-textarea>
                                                        </v-col>

                                                        <!--
                                                <v-col cols="12">
                                                    <v-textarea v-model="editedItem.description" :label="$t('Description')"></v-textarea>
                                                </v-col>-->
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
                <template v-slot:item.demand_date="{ item }">
                    {{ formatDate(item.demand_date) }}
                </template>
                <template v-slot:item.event_date="{ item }">
                    {{ formatDate(item.event_date) }}
                </template>
                <template v-slot:item.event_location="{ item }">
                    <v-tooltip :text="item.event_location">
                        <template v-slot:activator="{ props }">
                            <span>{{
                                item.event_location && item.event_location.length < 10
                                    ? item.event_location
                                    : `${item.event_location.substring(9)}...`
                            }}</span>
                        </template>
                    </v-tooltip>
                </template>
                <template v-slot:item.status="{ item }">
                    <v-chip :color="store.statusColor(item.status)" size="small" label>{{ store.statusText(item.status) }}</v-chip>
                </template>
                <template v-slot:item.actions="{ index, item }">
                    <div class="d-flex align-center">
                        <validate-demand v-if="!item.prestation" v-model="demands[index]" :icon="true" />
                        <!--                        <v-btn density="compact" color="primary" class="mx-2" variant="outlined" :to="'/demands/' + item.id">{{
                            $t('Voir')
                        }}</v-btn>-->
                        <v-tooltip :text="$t('Voir')">
                            <template v-slot:activator="{ props }">
                                <v-btn icon flat :to="'/demands/' + item.id" v-bind="props"
                                    ><EyeIcon stroke-width="1.5" size="20" class="text-primary"
                                /></v-btn>
                            </template>
                        </v-tooltip>
                        <v-tooltip :text="$t('Modifier')">
                            <template v-slot:activator="{ props }">
                                <v-btn icon flat @click="editItem(item)" v-bind="props"
                                    ><PencilIcon stroke-width="1.5" size="20" class="text-primary"
                                /></v-btn>
                            </template>
                        </v-tooltip>
                        <v-tooltip v-if="item.prestation == null" :text="$t('Supprimer')">
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
