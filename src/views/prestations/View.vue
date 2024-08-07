<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { usePrestationStore } from './Controller';
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
import type { CurrencyEuroIcon } from 'vue-tabler-icons';
import CancelPrestation from './components/CancelPrestation.vue';
import ValidatePrestation from './components/ValidatePrestation.vue';
import CustomerWidget from '@/components/CustomerWidget.vue';
import ServiceForm from '@/views/prestations/components/ServiceForm.vue';
import DeleteService from '@/views/prestations/components/DeleteService.vue';
import DeletePayment from '@/views/prestations/components/DeletePayment.vue';
import PaymentForm from '@/views/prestations/components/PaymentForm.vue';
import StartPrestation from '@/views/prestations/components/StartPrestation.vue';
import ClosePrestation from '@/views/prestations/components/ClosePrestation.vue';
import CommentPrestation from '@/views/prestations/components/CommentPrestation.vue';
import HallWidget from '@/views/prestations/components/HallWidget.vue';

const snackbarStore = useSnackbar();
const item = ref({
    id: null,
    status: 0,
    service: '',
    demand_date: null,
    customer_id: null,
    demand_id: null,
    payments: [],
    services: [],
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
const store = usePrestationStore();
const route = useRoute();
// theme breadcrumb
const page = ref({
    title:
        t('Détails du prestation') +
        ' ' +
        (item.value.eventtype?(item.value.eventtype.name || '') : '') +
        ' ' +
        (item.value.customer || { firstname: '' }).firstname +
        ' ' +
        (item.value.customer || { lastname: '' }).lastname +
        ' ' +
        (formatDate(item.value.demand_date) || '')
});
const breadcrumbs = ref([
    {
        text: t('Dashboard'),
        disabled: false,
        href: '/'
    },
    {
        text: t('Prestations'),
        disabled: false,
        href: '/prestations'
    },
    /*{
        text: store.pageTitle(item.value.status),
        disabled: false,
        href: store.pageLink(item.value.status)
    },*/
    {
        text: item.value.eventtype?item.value.eventtype.name : '',
        disabled: true,
        href: '#'
    }
]);

function setPageMeta() {
    page.value = {
        title:
            t('Prestation') +
            ' ' +
            (item.value.eventtype?(item.value.eventtype.name || '') : '') +
            ' (' +
            (item.value.customer || { firstname: '' }).firstname +
            ' ' +
            (item.value.customer || { lastname: '' }).lastname +
            ' ' +
            (formatDate(item.value.event_date) || '') +
            ')'
    };
    breadcrumbs.value = [
        {
            text: t('Dashboard'),
            disabled: false,
            href: '/'
        },
        {
            text: t('Prestations'),
            disabled: false,
            href: '/prestations'
        },
        /*{
            text: store.pageTitle(item.value.status),
            disabled: false,
            href: store.pageLink(item.value.status)
        },*/
        {
            text: page.value.title,
            disabled: true,
            href: '#'
        }
    ];
}

onMounted(() => {
    /*store.fetchPrestations({}).then((response) => {
        prestations.value = response.data.data;
    });*/
    fetchPrestation();
});

const loading = ref(false);
const loadingService = ref(false);
const loadingPayment = ref(false);
const dialogPayment = ref(false);
const dialogService = ref(false);
const dialogPaymentDelete = ref(false);
const dialogServiceDelete = ref(false);
const editedService = ref({});
const editedPayment = ref({});
const cancelling = ref(false);
const rowPerPage = ref(10);
const currentPage = ref(2);
const totalPage = ref(2);

const valid = ref(false);
const dialog = ref(false);
const errorMessage = ref(null);
const search = ref('');
const rolesbg = ref(['primary', 'secondary', 'error', 'success', 'warning']);
const sorting = ref([{ key: 'demand_date', order: 'DESC' }]);
const pageCount = ref(0);

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
const service = ref({
    id: null,
    service_id: null,
    name: '',
    price: 0,
    total: 0,
    quantity: 0
});
const payment = ref({
    id: null,
    prestation_id: null,
    amount: 0
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
        title: 'Prestation',
        align: 'start',
        key: 'eventtype.name'
    },
    {
        title: 'Date de la prestation',
        align: 'start',
        key: 'demand_date'
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
    return store.prestations.data.filter((user: any) => {
        return user.email.toLowerCase().includes(search.value.toLowerCase());
    });
});

const currentId = computed(() => route.params.id);
const prestations = computed(() => {
    if (item.value.customer.prestations) {
        return item.value.customer.prestations.filter((e) => e.id != item.value.id);
    } else {
        return [];
    }
});
const totalAmount = computed(() => {
    if (item.value.services && item.value.services.length) {
        return item.value.services.reduce((c, e) => {
            console.log(e.total, c);
            return parseFloat(e.total) + parseFloat(c);
        }, 0);
    } else {
        return 0;
    }
});
const totalAmountLeft = computed(() => {
    if (item.value.payments && item.value.payments.length) {
        return (
            totalAmount.value -
            item.value.payments.reduce((c, e) => {
                return parseFloat(e.amount) + parseFloat(c);
            }, 0)
        );
    } else {
        return totalAmount.value;
    }
});

function editItem(item: any) {
    loading.value = false;
    editedIndex.value = prestations.value.indexOf(item);
    editedItem.value = Object.assign({}, item);
    dialog.value = true;
}
function editService(item: any) {
    loadingService.value = false;
    service.value = Object.assign({}, item);
    // service.value = Object.assign({}, item);
    dialogService.value = true;
}
function editPayment(item: any) {
    loadingPayment.value = false;
    payment.value = Object.assign({}, item);
    // service.value = Object.assign({}, item);
    dialogPayment.value = true;
}

function cancelItem(item: any) {
    editedItem.value = item;
    dialogCancel.value = true;
}
function confirmDeleteService(item: any) {
    editedService.value = item;
    dialogServiceDelete.value = true;
}
function confirmDeletePayment(item: any) {
    editedPayment.value = item;
    dialogPaymentDelete.value = true;
}
function deleteService(item: any) {
    store
        .deleteService(item.id, editedService.value)
        .then((response) => {
            item.value = response.data;
            dialogServiceDelete.value = false;
            snackbarStore.showSuccess(t('Service supprimé avec succès'));
        })
        .then(() => {
            cancelling.value = false;
        });
}
function deletePayment(item: any) {
    store
        .deletePayment(item.id, editedPayment.value)
        .then((response) => {
            item.value = response.data;
            dialogPaymentDelete.value = false;
            snackbarStore.showSuccess(t('Paiement supprimé avec succès'));
        })
        .then(() => {
            cancelling.value = false;
        });
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

function fetchPrestation() {
    loading.value = true;
    store
        .fetchItem(route.params.id)
        .then((response) => {
            if (response.data.error) {
                return;
            }
            loading.value = false;
            item.value = response.data;
            item.value.payments = (item.value.payments || []).map((e) => {
                const dateObject = e.payment_date != null ? new Date(e.payment_date) : null;
                return {
                    ...e,
                    payment_date: dateObject
                };
            });
            setPageMeta();
            // snackbarStore.showSuccess(t('Utilisateur enregistrphp artisan serveé avec succès'));
        })
        .catch((error) => {
            loading.value = false;
        })
        .then(() => {
            loading.value = false;
        });
}

function updatePrestation(val) {
    item.value = val;
}

watch(
    currentId,
    (newVal, oldValue) => {
        if (newVal != oldValue) {
            fetchPrestation();
        }
    },
    { deep: true }
);
</script>
<template>
    <BaseBreadcrumb v-if="!loading" :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row v-if="loading" justify="center" align="center" align-content="center">
        <v-col cols="12" justify="center" align="center" align-content="center">
            <v-progress-circular indeterminate color="primary" size="150"></v-progress-circular>
        </v-col>
    </v-row>
    <v-row v-else>
        <v-col cols="12" md="4">
            {{ $t('Status :') }}
            <v-chip rounded="md" class="font-weight-bold" :color="store.statusColor(item.status)" size="small" label
                >{{ store.statusText(item.status) }}
            </v-chip>
            <span class="ml-2" v-if="item.status == store.statuses.cancelled"
                >{{ $t('Le') }} {{ formatDate(item.cancelled_date) || '' }}</span
            >
        </v-col>
        <v-col cols="12" md="8" justify="end" align-content="end" align="end">
            <validate-prestation v-if="item.status == store.statuses.started || item.status == store.statuses.cancelled" v-model="item" />
            <!--            <start-prestation v-if="item.status == store.statuses.validated" v-model="item" />-->
            <close-prestation v-if="item.status == store.statuses.validated" v-model="item" />
            <cancel-prestation v-model="item" v-if="item.status != store.statuses.cancelled" />
            <v-divider vertical />
            <v-btn variant="elevated" color="success" class="ml-2" :to="'/customers/' + item.customer_id"
                >{{ $t('Voir le Client') }}
            </v-btn>
            <!--            <v-btn variant="elevated" color="info" class="ml-2" :to="'/demands/' + item.demand_id"
                >{{ $t('Voir la demande associée') }}
            </v-btn>-->
        </v-col>
        <v-col cols="12" md="3">
            <CustomerWidget v-model="item" show-demand-info :source="item.source" />
        </v-col>
        <v-col cols="12" md="3">
            <HallWidget v-model="item" show-demand-info />
        </v-col>
        <v-col cols="12" md="6" class="justify-end align-end">
            <v-row class="align-end justify-end align-content-end">
                <v-col cols="12" class="align-end justify-end align-content-end">
                    <v-row class="align-end justify-end align-content-end">
                        <v-col cols="12" md="6" v-if="item.status >= store.statuses.validated" class="">
                            <v-card elevation="10">
                                <v-card-text>
                                    <div class="d-flex align-start">
                                        <h2 class="text-h4 mt-1">{{ $t('Reste à payer') }}</h2>
                                        <v-spacer></v-spacer>
                                        <div class="ml-auto">
                                            <v-btn color="primary" icon flat>
                                                <CurrencyEuroIcon />
                                            </v-btn>
                                        </div>
                                    </div>
                                    <div class="mt-9">
                                        <h2 class="text-h4 font-weight-semibold mb-1">{{ formatAmount(totalAmountLeft) }}</h2>
                                        <!--                                    <span class="text-subtitle-1 text-medium-emphasis font-weight-medium">Monthly Revenue</span>-->
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-card elevation="10">
                                <v-card-text>
                                    <div class="d-flex align-start">
                                        <h2 class="text-h4 mt-1">{{ $t('Montant total') }}</h2>
                                        <v-spacer></v-spacer>
                                        <div class="ml-auto">
                                            <v-btn color="primary" icon flat>
                                                <CurrencyEuroIcon />
                                            </v-btn>
                                        </div>
                                    </div>
                                    <div class="mt-9">
                                        <h2 class="text-h4 font-weight-semibold mb-1">
                                            {{ formatAmount(item.payment_total || 0) }}/{{ formatAmount(totalAmount || 0) }}
                                        </h2>
                                        <!--                                    <span class="text-subtitle-1 text-medium-emphasis font-weight-medium">Monthly Revenue</span>-->
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" class="align-end justify-end align-content-end">
                    <v-row class="align-end justify-end align-content-end">
                        <v-col class="h-100" cols="12">
                            <v-row>
<!--                                <v-col cols="12" md="6">
                                    <v-card elevation="10" class="h-100">
                                        <v-card-text>
                                            <div class="d-flex align-start">
                                                <h2 class="text-h4 mt-1">{{ $t('Note liée à la prestation') }}</h2>
                                            </div>
                                            <div class="mt-4">
                                                <p class="mb-1"  v-html="(item.comment ||  $t('Aucun commentaire')).replace(/\n/g, '<br/>')"></p>
                                                &lt;!&ndash;                                    <span class="text-subtitle-1 text-medium-emphasis font-weight-medium">Monthly Revenue</span>&ndash;&gt;
                                            </div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>-->
                                <v-col cols="12">
                                    <v-card elevation="10" class="h-100">
                                        <v-card-text>
                                            <div class="d-flex align-start">
                                                <h2 class="text-h4 mt-1">
                                                    {{ $t('Commentaire') }}
                                                </h2>
                                                <comment-prestation v-model="item" />
                                            </div>
                                            <div class="mt-4">
                                                <p class="mb-1" v-html="(item.comment ||  $t('Aucun commentaire')).replace(/\n/g, '<br/>')"></p>
                                                <!--                                    <span class="text-subtitle-1 text-medium-emphasis font-weight-medium">Monthly Revenue</span>-->
                                            </div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" v-if="item.status == store.statuses.cancelled">
                            <v-card elevation="10" class="h-100">
                                <v-card-text>
                                    <div class="d-flex align-start">
                                        <h2 class="text-h4 mt-1">{{ $t("Raison de l'annulation") }}</h2>
                                    </div>
                                    <div class="mt-4">
                                        <p class="mb-1" v-html="(item.cancel_comment ||  $t('Aucun commentaire')).replace(/\n/g, '<br/>')"></p>
                                        <!--                                    <span class="text-subtitle-1 text-medium-emphasis font-weight-medium">Monthly Revenue</span>-->
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" :lg="item.status > store.statuses.started ? '6' : '12'">
            <v-card elevation="10" class="overflow-hidden h-100">
                <v-card-item class="py-4 px-6 text-white bg-info">
                    <h4 class="text-h6 d-flex align-center">
                        <span>{{ $t('Désignation des services attendus') }}</span>
                        <v-spacer> </v-spacer>
                        <!--                        v-if="item.status < store.statuses.processing"-->
                        <service-form
                            v-model="service"
                            :prestation="item"
                            @update:item="updatePrestation"
                            :button-text="$t('Ajouter un service')"
                            :title="$t('Ajouter un service')"
                        />
                    </h4>
                </v-card-item>
                <v-card-text class="pa-6">
                    <v-table class="month-table">
                        <thead>
                            <tr>
                                <th class="text-h6">{{ $t('Désignation') }}</th>
                                <th class="text-h6">{{ $t('Quantité') }}</th>
                                <th class="text-h6">{{ $t('Prix unitaire') }}</th>
                                <th class="text-h6">{{ $t('Prix total') }}</th>
                                <th class="text-h6">{{ $t('Actions') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(service, index) in item.services" :key="service.id" class="month-item">
                                <td>
                                    {{ service.service_name }}
                                </td>
                                <td>
                                    {{ service.quantity }}
                                </td>
                                <td>
                                    {{ formatAmount(service.price) }}
                                </td>
                                <td>
                                    {{ formatAmount(service.total) }}
                                </td>

                                <td>
                                    <div class="d-flex align-center">
                                        <v-tooltip :text="$t('Modifier')">
                                            <template v-slot:activator="{ props }">
                                                <service-form
                                                    v-model="item.services[index]"
                                                    :prestation="item"
                                                    @update:item="updatePrestation"
                                                    :button-text="$t('Modifier le service')"
                                                    :title="$t('Modifier le service')"
                                                />
                                            </template>
                                        </v-tooltip>
                                        <DeleteService v-model="item" :service="item.services[index]" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col v-if="item.status > store.statuses.started" cols="12" :lg="item.status > store.statuses.started ? '6' : '12'">
            <v-card elevation="10" class="overflow-hidden h-100">
                <v-card-item class="py-4 px-6 text-white bg-info">
                    <h4 class="text-h6 d-flex align-center">
                        <span class="mr-2">{{ $t('Paiements') }}</span> : {{ item.payments.length }} -
                        {{ formatAmount(item.payment_total || 0) }}
                        <v-spacer> </v-spacer>
                        <!--                            v-if="item.status < store.statuses.closed"-->
                        <payment-form
                            :prestation="item"
                            @update:item="updatePrestation"
                            :button-text="$t('Ajouter un paiement')"
                            :title="$t('Ajouter un paiement')"
                        />
                    </h4>
                </v-card-item>
                <v-card-text class="pa-6">
                    <v-table class="month-table">
                        <thead>
                            <tr>
                                <th class="text-h6">{{ $t('Mode de paiement') }}</th>
                                <th class="text-h6">{{ $t('Montant payé') }}</th>
                                <th class="text-h6">{{ $t('Date du paiement') }}</th>
                                <th class="text-h6">{{ $t('Actions') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(pa, index) in item.payments" :key="payment.id">
                                <td>
                                    {{ pa.payment_method_name || pa.payment_method }}
                                </td>
                                <td>
                                    {{ formatAmount(pa.amount) }}
                                </td>
                                <td>
                                    {{ formatDate(pa.payment_date) }}
                                </td>
                                <td>
                                    <v-tooltip :text="$t('Modifier')">
                                        <template v-slot:activator="{ props }">
                                            <payment-form
                                                v-model="item.payments[index]"
                                                icon
                                                :prestation="item"
                                                @update:item="updatePrestation"
                                                :button-text="$t('Modifier le paiement')"
                                                :title="$t('Modifier le paiement')"
                                            />
                                        </template>
                                    </v-tooltip>
                                    <DeletePayment v-model="item" :payment="item.payments[index]" />
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
