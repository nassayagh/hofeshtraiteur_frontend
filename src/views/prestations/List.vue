<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { usePrestationStore } from './Controller';
import { useEventTypeStore } from '@/stores/apps/eventType';
import { useHallStore } from '@/stores/apps/hall';
import { useDate } from 'vuetify';
const dateObject = useDate();
import { useRoute, useRouter } from 'vue-router';
import { router } from '@/router';
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
import HallWidget from '@/views/prestations/components/HallWidget.vue';
import ValidateDemand from '@/components/ValidateDemand.vue';
import ChangeHall from '@/views/prestations/components/ChangeHall.vue';
import ClosePrestation from '@/views/prestations/components/ClosePrestation.vue';
import PaymentForm from '@/views/prestations/components/PaymentForm.vue';
import { tableActionData } from '@/_mockApis/components/table/basicTables';
import PrestationForm from '@/views/prestations/PrestationForm.vue';
const snackbarStore = useSnackbar();
const eventStore = useEventTypeStore();
const hallStore = useHallStore();
// theme breadcrumb
const page = ref({ title: t('Prestations') });
const breadcrumbs = ref([
    {
        text: t('Dashboard'),
        disabled: false,
        href: '/'
    },
    {
        text: t('Prestations'),
        disabled: true,
        href: '#'
    }
]);
const items = ref([]);
const eventTypes = ref([]);
const halls = ref([]);
const store = usePrestationStore();
const route = useRoute();

const currentStatus = ref(0);

onMounted(() => {
    if (route.query.status) {
        filters.value.status = parseInt(route.query.status || 0);
        if (filters.value.status == -1) {
            filters.value.status = null;
        }
    }
    if (route.query.date) {
        const ds = route.query.date.split(',');
        const d1 = new Date(ds[0]);
        const d2 = new Date(ds[1]);
        filters.value.date = [d1, d2];
        filters.value.status = null;
    }
    if (route.query.hall) {
        filters.value.hall = [parseInt(route.query.hall || 0)];
        filters.value.status = null;
    }
    if (route.query.event_type) {
        filters.value.event_type = [route.query.event_type];
        filters.value.status = null;
    }

    hallStore.fetchItems({ per_page: 1000 }).then((response) => {
        halls.value = response.data.data;
    });

    setGlobalValues();

    fetchItems();
    fetchEventTypes();
});

const loading = ref(false);
const saving = ref(false);
const timeout = ref(null);
const dateModal = ref(false);
const dateDemandModal = ref(false);
const rowPerPage = ref(100);
const currentPage = ref(2);
const totalPage = ref(2);
const totalItems = ref(0);
const dialogEdit = ref(false);
const dialog = ref(false);
const search = ref('');
const rolesbg = ref(['primary', 'secondary', 'error', 'success', 'warning']);
const sorting = ref([{ key: 'event_date', order: 'ASC' }]);
const pageCount = ref(0);
const filters = ref({
    search: null,
    date: null,
    event_type: null,
    status: store.statuses.validated
});
const options = ref({
    itemsPerPage: 100,
    rowsPerPage: 100,
    page: 1,
    sortDesc: [true],
    sortBy: [{ key: 'event_date', order: 'ASC' }]
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
    { title: t('Act'), key: 'actions', sortable: false },
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
        title: t('Téléphone'),
        align: 'start',
        key: 'customer.phone',
        sortable: false
    },
    {
        title: t('Prest'),
        align: 'start',
        key: 'eventtype.name'
    },
    {
        title: t('Date de la prestation'),
        align: 'start',
        key: 'event_date'
    },
    { title: t('La réception se déroulera plutôt'), key: 'reception_period' },
    { title: t('Heure'), key: 'reception_start_time' },
    { title: t('Lieu'), key: 'event_location' },
    { title: t('Convives'), key: 'number_people' },

    {
        title: t('En attente de règlement'),
        align: 'start',
        key: 'amount_left',
        sortable: false
    },
    {
        title: t('Montant total'),
        align: 'start',
        key: 'services_sum_total',
        sortable: false
    }
]);
const headersDefault = ref([
    { title: t('Act'), key: 'actions', sortable: false },
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
    /*{
        title: t('Source'),
        align: 'start',
        key: 'demand.source'
    },*/
    {
        title: t('Prest.'),
        align: 'start',
        key: 'eventtype.name'
    },
    {
        title: t('Date prest.'),
        align: 'start',
        key: 'event_date'
    },
    { title: t('Moment'), key: 'reception_period' },
    /* { title: t('Heure'), key: 'reception_start_time' },*/
    /*   { title: t('Lieu'), key: 'demand.event_location' },*/
    { title: t('Con.'), key: 'number_people' },
    { title: t('Salle'), key: 'hall' },

    {
        title: t('Reste à payer'),
        align: 'start',
        key: 'amount_left',
        sortable: false
    },
    {
        title: t('Montant total'),
        align: 'start',
        key: 'services_sum_total',
        sortable: false
    }
]);
const activePage = computed(() => route.params.status);
const formatedDate = computed(() => {
    if (filters.value.date && filters.value.date.length > 0) {
        return formatDate(filters.value.date[0]) + ' - ' + formatDate(filters.value.date[filters.value.date.length - 1]);
    }
    return null;
});
watch(
    activePage,
    (newVal, oldValue) => {
        if (newVal != oldValue) {
            setGlobalValues();
            fetchItems();
        }
    },
    { deep: true }
);
//Methods
const filteredList = computed(() => {
    return store.items.data.filter((user: any) => {
        return user.email.toLowerCase().includes(search.value.toLowerCase());
    });
});

function editItem(item: any) {
    loading.value = false;
    editedIndex.value = items.value.indexOf(item);
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
                .addItem({ ...editedItem.value, event_date: formatedDemandDate.value })
                .then((response) => {
                    if (response.data.error) {
                        setErrors({ apiError: response.data.message });
                        return;
                    }
                    if (editedItem.value.id != null) {
                        Object.assign(items.value[editedIndex.value], response.data);
                    } else {
                        items.value.unshift(response.data);
                    }
                    loading.value = false;
                    dialogEdit.value = false;
                    editedItem.value = { customer: {} };
                    snackbarStore.showSuccess(t('Prestations enregistreé avec succès'));
                    fetchEventTypes();
                    fetchItems();
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
        Object.assign(items.value[editedIndex.value], editedItem.value);
    } else {
        items.value.push(editedItem.value);
    }*/
    //close();
}

function deleteItemConfirm() {
    store.deleteItem(editedItem.value.id);
    const index = items.value.findIndex((e) => e.id == editedItem.value.id);
    items.value.splice(index, 1);
    dialogDelete.value = false;
    snackbarStore.showSuccess(t('Utilisateur supprimé avec succès'));
}
const payment = ref({
    id: null,
    prestation_id: null,
    amount: 0
});
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

function setGlobalValues() {
    breadcrumbs.value = [
        {
            text: t('Dashboard'),
            disabled: false,
            href: '/'
        }
    ];
    items.value = [];
    totalItems.value = 0;
    headers.value = headersDefault.value;
    switch (route.params.status) {
        case 'started':
            page.value = { title: t('Prestations en attente de validation') };
            breadcrumbs.value.push({
                text: page.value.title,
                disabled: true,
                href: '#'
            });
            currentStatus.value = store.statuses.started;
            headers.value = headersDefault.value.filter((e) => e.key != 'services_sum_total' && e.key != 'amount_left');
            break;
        case 'validated':
            page.value = { title: t('Prestations validées') };
            breadcrumbs.value.push({
                text: page.value.title,
                disabled: true,
                href: '#'
            });
            currentStatus.value = store.statuses.validated;
            headers.value = headersDefault.value;
            break;
        case 'processing':
            page.value = { title: t('Prestations en cours') };
            breadcrumbs.value.push({
                text: page.value.title,
                disabled: true,
                href: '#'
            });
            currentStatus.value = store.statuses.processing;
            break;
        case 'closed':
            page.value = { title: t('Prestations clôturées') };
            breadcrumbs.value.push({
                text: page.value.title,
                disabled: true,
                href: '#'
            });
            currentStatus.value = store.statuses.closed;
            break;
        case 'cancelled':
            page.value = { title: t('Prestations annulées') };
            breadcrumbs.value.push({
                text: page.value.title,
                disabled: true,
                href: '#'
            });
            currentStatus.value = store.statuses.cancelled;
            break;
        default:
            page.value = { title: `${t('Prestations')}` };
            breadcrumbs.value.push({
                text: page.value.title,
                disabled: true,
                href: '#'
            });
            currentStatus.value = store.statuses.started;
            break;
    }
}
function fetchItems() {
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
                status: currentStatus.value,
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

                    items.value = data.map((e) => {
                        const dateObject = e.event_date != null ? new Date(e.event_date) : null;
                        return {
                            ...e,
                            event_date: dateObject
                        };
                    });
                    totalPage.value = last_page;
                    totalItems.value = total;
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

const formatedDemandDate = computed(() => {
    if (editedItem.value.event_date) {
        return dateObject.format(editedItem.value.event_date, 'shortDate');
    }
    return null;
});
const formatedDemandDate1 = computed(() => {
    if (editedItem.value.event_date) {
        return formatDate(editedItem.value.event_date);
    }
    return null;
});

watch(
    [search, options, filters /*currentPage, rowPerPage*/],
    () => {
        fetchItems();
    },
    { deep: true }
);

// watchEffect(fetchItems)

// 👉 watching current page
watchEffect(() => {
    if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});
</script>
<template>
    <BaseBreadcrumb :title="`${page.title}(${totalItems})`" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>

    <v-row>
        <!--        <v-col cols="12" md="4">
            <PrespationDashboard
                md="12"
                :show-validation="route.params.status == 'started'"
                :show-validated="route.params.status == 'validated'"
                :show-processing="route.params.status == 'processing'"
                :show-closed="route.params.status == 'closed'"
                :show-cancelled="route.params.status == 'cancelled'"
                show-description
            />
        </v-col>
        <v-col cols="12" md="8">
            <PrespationDashboard show-payments show-description />
        </v-col>-->
        <v-col cols="12">
            <v-data-table-server
                class="border rounded-md"
                density="compact"
                :headers="headers"
                :loading="loading"
                :items="items"
                :multi-sort="false"
                v-model:items-per-page="rowPerPage"
                :items-per-page-text="$t('Articles par page')"
                v-model:options="options"
                v-model:sort-by="sorting"
                v-model:page="currentPage"
                v-model:items-length="totalItems"
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
                                    flat
                                    clearable
                                ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-autocomplete
                                    density="compact"
                                    v-model="filters.event_type"
                                    :placeholder="$t('Prestation')"
                                    :items="eventTypes"
                                    item-value="id"
                                    item-title="name"
                                    multiple
                                    hide-details
                                    variant="solo"
                                    flat
                                    clearable
                                ></v-autocomplete>
                            </v-col>
                            <v-col>
                                <v-autocomplete
                                    density="compact"
                                    v-model="filters.hall"
                                    :placeholder="$t('Salle')"
                                    :items="halls"
                                    item-value="id"
                                    item-title="name"
                                    multiple
                                    hide-details
                                    variant="solo"
                                    flat
                                    clearable
                                ></v-autocomplete>
                            </v-col>
                            <v-col>
                                <v-select
                                    density="compact"
                                    v-model="filters.payment_status"
                                    :placeholder="$t('Reste à payer')"
                                    :items="[
                                        { id: 'waiting', label: $t('En attente') },
                                        { id: 'completed', label: $t('Soldé') }
                                    ]"
                                    item-value="id"
                                    item-title="label"
                                    hide-details
                                    variant="solo"
                                    flat
                                    clearable
                                ></v-select>
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
                                            flat
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
                <template v-slot:item.customer.firstname="{ item }">
                    <span class="cursor-pointer" @click="$router.push('/prestations/' + item.id)">{{
                        item.customer ? item.customer.firstname : ''
                    }}</span>
                </template>
                <template v-slot:item.customer.lastname="{ item }">
                    <span class="cursor-pointer" @click="$router.push('/prestations/' + item.id)">{{
                        item.customer ? item.customer.lastname : ''
                    }}</span>
                </template>
                <template v-slot:item.customer.email="{ item }">
                    <v-tooltip :text="item.customer.email">
                        <template v-slot:activator="{ props }">
                            <span v-bind="props">
                                {{
                                    !item.customer || item.customer.email == null || item.customer.email.length < 7
                                        ? item.customer.email
                                        : `${item.customer.email.replace('\n', ' ').slice(0, 6)}...`
                                }}
                            </span>
                        </template>
                    </v-tooltip>
                </template>
                <template v-slot:item.demand_date="{ item }">
                    {{ formatDate(item.demand_date) }}
                </template>
                <template v-slot:item.event_date="{ item }">
                    {{ formatDate(item.event_date) }}
                </template>
                <template v-slot:item.eventtype.name="{ item }">
                    <v-tooltip v-if="item.eventtype" :text="item.eventtype ? item.eventtype.name : ''">
                        <template v-slot:activator="{ props }">
                            <span v-bind="props">
                                {{
                                    item.eventtype.name == null || item.eventtype.name.length < 10
                                        ? item.eventtype.name
                                        : `${item.eventtype.name.replace('\n', ' ').slice(0, 9)}...`
                                }}
                            </span>
                        </template>
                    </v-tooltip>
                    <!--                    <v-tooltip v-else-if="item.event_type" :text="item.event_type">
                        <template v-slot:activator="{ props }">
                            <span v-bind="props">
                                {{
                                    item.event_type == null || item.event_type.length < 10
                                        ? item.event_type
                                        : `${item.event_type.replace('\n', ' ').slice(0, 9)}...`
                                }}
                            </span>
                        </template>
                    </v-tooltip>-->
                </template>
                <template v-slot:item.amount_left="{ index, item }">
                    <payment-form
                        v-if="Math.max(item.services_sum_total - item.payments_sum_amount, 0) > 0"
                        :prestation="items[index]"
                        @update:item="fetchItems"
                        :button-text="$t('Ajouter un paiement')"
                        :title="$t('Ajouter un paiement')"
                        variant="text"
                        density="compact"
                        classes="px-1"
                    >
                        <span
                            v-if="Math.max(item.services_sum_total - item.payments_sum_amount, 0) > 0"
                            class="text-error font-weight-bold"
                            >{{ formatAmount(Math.max(item.services_sum_total - item.payments_sum_amount, 0)) }}</span
                        >
                    </payment-form>
                </template>
                <template v-slot:item.services_sum_total="{ item }">
                    <v-chip
                        variant="tonal"
                        density="compact"
                        small
                        :color="Math.max(item.services_sum_total - item.payments_sum_amount, 0) > 0 ? 'error' : 'success'"
                        class="font-weight-bold body-text-1 px-1"
                        >{{ formatAmount(item.payments_sum_amount || 0) }} / {{ formatAmount(item.services_sum_total || 0) }}</v-chip
                    >
                </template>
                <template v-slot:item.status="{ item }">
                    <v-chip :color="store.statusColor(item.status)" size="small" label>{{ store.statusText(item.status) }}</v-chip>
                </template>
                <template v-slot:item.hall="{ index, item }">
                    <span v-if="item.hall">{{ item.hall.name }}</span>
                    <ChangeHall v-if="!item.hall" v-model="items[index]" show-demand-info />
                </template>
                <template v-slot:item.actions="{ index, item }">
                    <v-btn size="30" icon variant="flat" class="grey100">
                        <v-avatar size="22">
                            <DotsVerticalIcon size="20" color="grey100" />
                        </v-avatar>
                        <v-menu activator="parent">
                            <v-list>
                                <!--                                <v-list-item value="action" hide-details min-height="38" @click="editItem(item)">
                                    <v-list-item-title>
                                        <v-avatar size="20" class="mr-2">
                                            <component is="EditIcon" stroke-width="2" size="20" />
                                        </v-avatar>
                                        {{ $t('Modifier') }}
                                    </v-list-item-title>
                                </v-list-item>-->
                                <v-list-item value="action" hide-details min-height="38" :to="'/prestations/' + item.id">
                                    <v-list-item-title>
                                        <v-avatar size="20" class="mr-2">
                                            <component is="EyeIcon" stroke-width="2" size="20" />
                                        </v-avatar>
                                        {{ $t('Voir') }}
                                    </v-list-item-title>
                                </v-list-item>
                                <prestation-form @saved="fetchItems" v-model="items[index]" :is-new="false" />
                                <close-prestation
                                    v-if="item.status == store.statuses.validated"
                                    @refresh="fetchItems"
                                    v-model="items[index]"
                                />
                            </v-list>
                        </v-menu>
                    </v-btn>
                    <!--                    <close-prestation v-if="item.status == store.statuses.validated" @refresh="fetchItems" v-model="items[index]" icon />
                    <v-btn icon flat density="compact" class="mx-2" :to="'/prestations/' + item.id">
                        <EyeIcon stroke-width="1.5" size="20" class="text-primary" />
                    </v-btn>
                    <v-tooltip :text="$t('Modifier')">
                        <template v-slot:activator="{ props }">
                            <v-btn icon flat @click="editItem(item)" v-bind="props"
                            ><PencilIcon stroke-width="1.5" size="20" class="text-primary"
                            /></v-btn>
                        </template>
                    </v-tooltip>-->
                    <!--                    <v-btn-group
                            base-color="primaruy"
                        variant="elevated"
                        color="primary"
                        class="text-center"
                        density="compact"
                    >
                        <v-btn :to="'/prestations/' + item.id">{{
                                $t('Prestation')
                            }}
                        </v-btn>

                        <v-menu :location="location">
                            <template v-slot:activator="{ props }">
                                <v-btn icon="mdi-chevron-down" v-bind="props"></v-btn>
                            </template>

                            <v-list>
                                <v-list-item :to="'/demands/' + item.demand_id" >
                                    <v-list-item-title>{{ $t('Voir la demande')}}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-btn-group>-->
                    <!--                    <div class="d-flex align-center">
                        <v-tooltip :text="$t('Modifier')">
                            <template v-slot:activator="{ props }">
                                <v-btn icon flat @click="editItem(item)" v-bind="props"
                                    ><PencilIcon stroke-width="1.5" size="20" class="text-primary"
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
                    </div>-->
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

            <v-dialog v-model="dialogEdit" max-width="600px">
                <template v-slot:activator="{ props }">
                    <v-btn
                        color="primary"
                        class="align-self-end float-end"
                        variant="flat"
                        @click="editItem({ customer: {}, source: 'admin' })"
                        dark
                        v-bind="props"
                        >{{ $t('Ajouter une prestation') }}</v-btn
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
                                    <v-col cols="12" md="6">
                                        <v-autocomplete
                                            v-model="editedItem.event_type_id"
                                            :placeholder="$t('Type d\'événement')"
                                            :label="$t('Type d\'événement')"
                                            :items="eventTypes"
                                            item-title="name"
                                            item-value="id"
                                            clearable
                                            hide-details
                                            variant="outlined"
                                        ></v-autocomplete>
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
                                                    v-model="formatedDemandDate1"
                                                    prepend-inner-icon="bx-calendar"
                                                    v-bind="props"
                                                    :placeholder="$t('Date de l\'évènement')"
                                                    :label="$t('Date de l\'évènement')"
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
                                                            <VBtn variant="elevated" color="primary" @click="dateDemandModal = false">
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
</template>
