<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { useCustomerStore } from '@/stores/apps/customers';
import { useRoute, useRouter } from 'vue-router';

// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';

import { emailValidator, requiredValidator } from '@/utils/validators';
import { formatDateToMonthShort, formatDate, formatAmount } from '@/utils/helpers/formatters';
import { t } from '@/plugins/i18n';
import type { VForm } from 'vuetify/components/VForm';
import { Form } from 'vee-validate';

const refForm = ref<VForm>();

import { useSnackbar } from '@/stores/snackbar';
import { router } from '@/router';
import { basicTableData1 } from '@/_mockApis/components/table/basicTables';
import { useDemandStore } from '@/stores/apps/demands';
import { usePrestationStore } from '@/views/prestations/Controller';
import DemandForm from '@/views/demands/DemandForm.vue';
import CustomerForm from '@/views/customers/CustomerForm.vue';

const snackbarStore = useSnackbar();
const item = ref({
    id: null,
    status: 0,
    service: '',
    created_at: null,
    customer_id: null,
    prestation_id: null,
    customer: {
        id: null,
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        is_customer: false,
        created_at: null,
        demands: [],
        prestations: []
    }
});
// theme breadcrumb
const page = ref({
    title: t('Détails')
});
const breadcrumbs = ref([
    {
        text: t('Dashboard'),
        disabled: false,
        href: '/'
    },
    {
        text: t('Client'),
        disabled: false,
        href: '/customers'
    },
    {
        text: item.value.event_type || '',
        disabled: true,
        href: '#'
    }
]);

function setPageMeta() {
    page.value = {
        title: t('Détails du client')
    };
    breadcrumbs.value = [
        {
            text: t('Dashboard'),
            disabled: false,
            href: '/'
        },
        {
            text: t('Clients'),
            disabled: false,
            href: '/customers'
        },
        {
            text: item.value.event_type || '',
            disabled: true,
            href: '#'
        }
    ];
}

const store = useCustomerStore();
const route = useRoute();
onMounted(() => {
    /*store.fetchCustomers({}).then((response) => {
        customers.value = response.data.data;
    });*/
    fetchCustomer();
});

const loading = ref(false);
const cancelling = ref(false);
const rowPerPage = ref(100);
const currentPage = ref(2);
const totalPage = ref(2);

const valid = ref(false);
const dialog = ref(false);
const errorMessage = ref(null);
const search = ref('');
const rolesbg = ref(['primary', 'secondary', 'error', 'success', 'warning']);
const sorting = ref([{ key: 'created_at', order: 'DESC' }]);
const pageCount = ref(0);
const options = ref({
    itemsPerPage: 100,
    rowsPerPage: 100,
    page: 1,
    sortDesc: [true],
    sortBy: [{ key: 'created_at', order: 'DESC' }]
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
const demand = ref({
    id: null,
    customer: {}
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
const dialogCancel = ref(false);
const headers = ref([
    {
        title: 'Prénom',
        align: 'start',
        key: 'customer.firstname',
        sortable: false
    },
    {
        title: 'Nom',
        align: 'start',
        key: 'customer.lastname',
        sortable: false
    },
    {
        title: 'Email',
        align: 'start',
        key: 'customer.email',
        sortable: false
    },
    {
        title: 'Téléphone',
        align: 'start',
        key: 'customer.phone',
        sortable: false
    },
    {
        title: 'Prestation',
        align: 'start',
        key: 'event_type'
    },
    {
        title: 'Date de la customere',
        align: 'start',
        key: 'created_at'
    },
    {
        title: 'Status',
        align: 'start',
        key: 'status'
    },
    /* { title: 'Protein (g)', key: 'protein' },*/
    { title: 'Actions', key: 'actions', sortable: false }
]);

//Methods
const filteredList = computed(() => {
    return store.customers.data.filter((user: any) => {
        return user.email.toLowerCase().includes(search.value.toLowerCase());
    });
});

const currentId = computed(() => route.params.id);
const customers = computed(() => {
    if (item.value.customer.customers) {
        return item.value.customer.customers.filter((e) => e.id != item.value.id);
    } else {
        return [];
    }
});

function editItem(item: any) {
    loading.value = false;
    editedIndex.value = customers.value.indexOf(item);
    editedItem.value = Object.assign({}, item);
    dialog.value = true;
}

function cancelItem(item: any) {
    editedItem.value = item;
    dialogCancel.value = true;
}

function close() {
    dialog.value = false;
    setTimeout(() => {
        editedItem.value = Object.assign({}, defaultItem.value);
        editedIndex.value = -1;
    }, 300);
}

function cancelItemConfirm() {
    cancelling.value = true;
    store
        .cancelItem(item.value.id)
        .then((response) => {
            item.value = response.data;
            dialogCancel.value = false;
            snackbarStore.showSuccess(t('Devis annulé avec succès'));
        })
        .then(() => {
            cancelling.value = false;
        });
}

//Computed Property
const formTitle = computed(() => {
    return editedIndex.value === -1 ? 'Nouvel administrateur' : 'Modifier l’administrateur';
});

function fetchCustomer() {
    loading.value = true;
    store
        .fetchItem(route.params.id)
        .then((response) => {
            if (response.data.error) {
                return;
            }
            loading.value = false;
            item.value = response.data;
            setPageMeta();
            demand.value = {
                id: null,
                customer_id: item.value.id,
                customer: item.value
            };
            // snackbarStore.showSuccess(t('Utilisateur enregistrphp artisan serveé avec succès'));
        })
        .catch((error) => {
            loading.value = false;
        })
        .then(() => {
            loading.value = false;
        });
}

watch(
    currentId,
    (newVal, oldValue) => {
        if (newVal != oldValue) {
            fetchCustomer();
        }
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
    <BaseBreadcrumb v-if="!loading" :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row v-if="loading" justify="center" align="center" align-content="center">
        <v-col cols="12" justify="center" align="center" align-content="center">
            <v-progress-circular indeterminate color="primary" size="150"></v-progress-circular>
        </v-col>
    </v-row>
    <v-row v-else>
        <v-col cols="12">
            <v-row align="center">
                <v-col cols="12" md="4">
                    <v-card elevation="10" class="overflow-hidden h-100">
                        <v-card-item class="py-4 px-6 text-white bg-info">
                            <h4 class="text-h6 d-flex align-center">
                                {{ $t('Identification du customereur') }}
                                <v-spacer />
                                <customer-form v-model="item" @saved="fetchCustomer" :button-text="$t('Modifier')" />
                            </h4>
                        </v-card-item>
                        <v-card-text class="pa-6">
                            <p class="text-subtitle-1 textSecondary mt-3">{{ $t('Prénom :') }} {{ item.firstname || '' }}</p>
                            <p class="text-subtitle-1 textSecondary mt-3">{{ $t('Nom :') }} {{ item.lastname || '' }}</p>
                            <p class="text-subtitle-1 textSecondary mt-3">{{ $t('Email :') }} {{ item.email || '' }}</p>
                            <p class="text-subtitle-1 textSecondary mt-3">{{ $t('Téléphone :') }} {{ item.phone || '' }}</p>
                            <p class="text-subtitle-1 textSecondary mt-3">
                                {{ $t("Date d'enregistrement :") }} {{ formatDate(item.created_at) || '' }}
                            </p>
                            <p class="text-subtitle-1 textSecondary mt-3">
                                {{ $t('Type :') }}
                                <v-chip v-if="item && item.is_customer" color="success">{{ $t('Client') }} </v-chip>
                                <v-chip v-else color="error">{{ $t('Prospect') }}</v-chip>
                            </p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="8">
                    <v-row>
                        <v-col cols="12" md="3">
                            <v-card elevation="10" class="bg-primary h-100">
                                <v-card-text>
                                    <div class="d-flex align-start">
                                        <h2 class="text-h4 mt-1">{{ $t('Devis') }}</h2>
                                        <v-spacer></v-spacer>
                                    </div>
                                    <div class="mt-9">
                                        <h2 class="text-h4 font-weight-semibold mb-1">{{ item.demands ? item.demands.length : 0 }}</h2>
                                        <!--                                    <span class="text-subtitle-1 text-medium-emphasis font-weight-medium">Monthly Revenue</span>-->
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-card elevation="10" class="bg-info h-100">
                                <v-card-text>
                                    <div class="d-flex align-start">
                                        <h2 class="text-h4 mt-1">{{ $t('Prestations') }}</h2>
                                        <v-spacer></v-spacer>
                                    </div>
                                    <div class="mt-9">
                                        <h2 class="text-h4 font-weight-semibold mb-1">
                                            {{ item.prestations ? item.prestations.length : 0 }}
                                        </h2>
                                        <!--                                    <span class="text-subtitle-1 text-medium-emphasis font-weight-medium">Monthly Revenue</span>-->
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-card elevation="10" class="bg-primary h-100">
                                <v-card-text>
                                    <div class="d-flex align-start">
                                        <h2 class="text-h4 mt-1">{{ $t('Paiements') }}</h2>
                                        <v-spacer></v-spacer>
                                    </div>
                                    <div class="mt-9">
                                        <h2 class="text-h4 font-weight-semibold mb-1">
                                            {{ formatAmount(item.payments_sum_amount || 0) }}
                                        </h2>
                                        <!--                                    <span class="text-subtitle-1 text-medium-emphasis font-weight-medium">Monthly Revenue</span>-->
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-card elevation="10" class="bg-success h-100">
                                <v-card-text>
                                    <div class="d-flex align-start">
                                        <h2 class="text-h4 mt-1">{{ $t('Prestations Clôturées') }}</h2>
                                        <v-spacer></v-spacer>
                                    </div>
                                    <div class="mt-9">
                                        <h2 class="text-h4 font-weight-semibold mb-1">
                                            {{ item.prestations_count || 0 }}
                                        </h2>
                                        <!--                                    <span class="text-subtitle-1 text-medium-emphasis font-weight-medium">Monthly Revenue</span>-->
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" lg="6">
            <v-card elevation="10" class="overflow-x-hidden h-100">
                <v-card-item class="py-4 px-6 text-white bg-info">
                    <h4 class="text-h6 d-flex align-center">
                        {{ $t('Les devis de') }} {{ item.firstname || '' }}
                        {{ item.lastname || '' }}
                        <v-spacer />
                        <demand-form v-model="demand" @saved="fetchCustomer" :show-customer="false" />
                    </h4>
                </v-card-item>
                <v-card-text class="pa-6 overflow-y-auto" style="max-height: 500px">
                    <v-table class="month-table">
                        <thead>
                            <tr>
                                <th class="text-h6">{{ $t('ID') }}</th>
                                <th class="text-h6">{{ $t('Prestation') }}</th>
                                <th class="text-h6">{{ $t('Date') }}</th>
                                <th class="text-h6">{{ $t('Status') }}</th>
                                <th class="text-h6">{{ $t('Action') }}</th>
                            </tr>
                        </thead>
                        <tbody style="max-height: 500px" class="overflow-y-auto">
                            <tr v-for="demand in item.demands || []" :key="demand.id" class="month-item">
                                <td>
                                    {{ demand.id }}
                                </td>
                                <td>
                                    <h6 class="text-h6 font-weight-medium text-medium-emphasis">{{ demand.event_type }}</h6>
                                </td>
                                <td>
                                    {{ formatDate(demand.demand_date) }}
                                </td>
                                <td>
                                    <v-chip
                                        rounded="md"
                                        class="font-weight-bold"
                                        :color="useDemandStore().statusColor(demand.status)"
                                        size="small"
                                        label
                                        >{{ useDemandStore().statusText(demand.status) }}
                                    </v-chip>
                                </td>
                                <td>
                                    <v-btn variant="outlined" density="compact" color="info" :to="'/demands/' + demand.id">
                                        {{ $t('Voir') }}
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" lg="6">
            <v-card elevation="10" class="overflow-x-hidden h-100">
                <v-card-item class="py-4 px-6 text-white bg-info">
                    <h4 class="text-h6">
                        {{ $t('Prestations de devis de') }} {{ item.firstname || '' }}
                        {{ item.lastname || '' }}
                    </h4>
                </v-card-item>
                <v-card-text class="pa-6 overflow-y-auto" style="max-height: 500px">
                    <v-table class="month-table">
                        <thead>
                            <tr>
                                <th class="text-h6">{{ $t('ID') }}</th>
                                <th class="text-h6">{{ $t('Prestation') }}</th>
                                <th class="text-h6">{{ $t('Date') }}</th>
                                <th class="text-h6">{{ $t('Status') }}</th>
                                <th class="text-h6">{{ $t('Action') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="prestation in item.prestations || []" :key="prestation.id" class="month-item">
                                <td>
                                    {{ prestation.id }}
                                </td>
                                <td>
                                    <h6 class="text-h6 font-weight-medium text-medium-emphasis">
                                        {{ prestation.event_type }}
                                    </h6>
                                </td>
                                <td>
                                    {{ formatDate(prestation.demand_date) }}
                                </td>
                                <td>
                                    <v-chip
                                        rounded="md"
                                        class="font-weight-bold"
                                        :color="usePrestationStore().statusColor(prestation.status)"
                                        size="small"
                                        label
                                        >{{ usePrestationStore().statusText(prestation.status) }}
                                    </v-chip>
                                </td>
                                <td>
                                    <v-btn variant="outlined" density="compact" color="info" :to="'/prestations/' + prestation.id">
                                        {{ $t('Voir') }}
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
