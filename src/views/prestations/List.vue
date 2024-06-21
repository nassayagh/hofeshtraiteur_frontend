<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { usePrestationStore } from './Controller';
import { useEventTypeStore } from '@/stores/apps/eventType';
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
const snackbarStore = useSnackbar();
const eventStore = useEventTypeStore();
// theme breadcrumb
const page = ref({ title: '' });
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
const store = usePrestationStore();
const route = useRoute();

const currentStatus = ref(0);

onMounted(() => {
    /*store.fetchItems({}).then((response) => {
        items.value = response.data.data;
    });*/

    setGlobalValues();

    fetchItems();
    fetchEventTypes();
});

const loading = ref(false);
const saving = ref(false);
const timeout = ref(null);
const dateModal = ref(false);
const rowPerPage = ref(10);
const currentPage = ref(2);
const totalPage = ref(2);
const totalItems = ref(0);

const dialog = ref(false);
const search = ref('');
const rolesbg = ref(['primary', 'secondary', 'error', 'success', 'warning']);
const sorting = ref([{ key: 'demand_date', order: 'DESC' }]);
const pageCount = ref(0);
const filters = ref({
    search: null,
    date: null,
    event_type: null
});
const options = ref({
    itemsPerPage: 10,
    rowsPerPage: 10,
    page: 1,
    sortDesc: [true],
    sortBy: [{ key: 'demand_date', order: 'DESC' }]
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
        title: t('Prestation'),
        align: 'start',
        key: 'event_type'
    },
    {
        title: t('Date de la prestation'),
        align: 'start',
        key: 'event_date'
    },
    { title: t('Heure'), key: 'demand.reception_start_time' },
    { title: t("Lieu"), key: 'demand.event_location' },
    { title: t("Convives"), key: 'demand.number_people' },

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
    },
    { title: t('Actions'), key: 'actions', sortable: false }
]);
const headersDefault = ref([
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
        title: t('Prestation'),
        align: 'start',
        key: 'event_type'
    },
    {
        title: t('Date de la prestation'),
        align: 'start',
        key: 'event_date'
    },
    { title: t('Heure'), key: 'demand.reception_start_time' },
    { title: t("Lieu"), key: 'demand.event_location' },
    { title: t("Convives"), key: 'demand.number_people' },

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
    },
    { title: t('Actions'), key: 'actions', sortable: false }
]);
const activePage = computed(() => route.params.status);
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
                        Object.assign(items.value[editedIndex.value], response.data);
                    } else {
                        items.value.unshift(response.data);
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
            headers.value = headersDefault.value.filter((e)=> e.key != 'services_sum_total' && e.key != 'amount_left')
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
            page.value = { title: t('Prestations en attente de validation') };
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

                    items.value = data;
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

onMounted(() => {
    /*if (route.params.status != 'started') {
        headers.value.push(
            ...[
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
                },
                { title: t('Actions'), key: 'actions', sortable: false }
            ]
        );
    } else {
        headers.value.push({ title: t('Actions'), key: 'actions', sortable: false });
    }*/
});
</script>
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>


    <v-row>
        <v-col cols="12" md="6">
            <PrespationDashboard md="6"
                                 :show-validation="route.params.status == 'started'"
                                 :show-validated="route.params.status == 'validated'"
                                 :show-processing="route.params.status == 'processing'"
                                 :show-closed="route.params.status == 'closed'"
                                 :show-cancelled="route.params.status == 'cancelled'"
                                 show-description
            />
        </v-col>
        <v-col cols="12" md="6">
            <PrespationDashboard show-payments  show-description/>
        </v-col>
        <v-col cols="12">
            <v-data-table-server
                class="border rounded-md"
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
                                    flat
                                    clearable
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
                <template v-slot:item.demand_date="{ item }">
                    {{ formatDate(item.demand_date) }}
                </template>
                <template v-slot:item.event_date="{ item }">
                    {{ formatDate(item.event_date) }}
                </template>
                <template v-slot:item.amount_left="{ item }">
                    <span v-if="Math.max(item.services_sum_total - item.payments_sum_amount, 0) > 0" class="text-error font-weight-bold " >{{ formatAmount(Math.max(item.services_sum_total - item.payments_sum_amount, 0)) }}</span>
                </template>
                <template v-slot:item.services_sum_total="{ item }">
                    <v-chip variant="tonal" :color="Math.max(item.services_sum_total - item.payments_sum_amount, 0) > 0?'error':'success'" class="font-weight-bold">{{ formatAmount(item.payments_sum_amount || 0) }} / {{ formatAmount(item.services_sum_total || 0) }}</v-chip>
                </template>
                <template v-slot:item.status="{ item }">
                    <v-chip :color="store.statusColor(item.status)" size="small" label>{{ store.statusText(item.status) }}</v-chip>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-btn-group
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
                    </v-btn-group>
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
        </v-col>
    </v-row>
</template>
