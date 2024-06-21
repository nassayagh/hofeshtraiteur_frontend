<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { useDemandStore } from '@/stores/apps/demands';
import { useRoute, useRouter } from 'vue-router';

// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';

import { emailValidator, requiredValidator } from '@/utils/validators';
import { formatDateToMonthShort, formatDate } from '@/utils/helpers/formatters';
import { t } from '@/plugins/i18n';
import type { VForm } from 'vuetify/components/VForm';
import { Form } from 'vee-validate';

const refForm = ref<VForm>();

import { useSnackbar } from '@/stores/snackbar';
import { router } from '@/router';
import { basicTableData1 } from '@/_mockApis/components/table/basicTables';
import CancelDemand from '@/components/CancelDemand.vue';
import ValidateDemand from '@/components/ValidateDemand.vue';

const snackbarStore = useSnackbar();
const item = ref({
    id: null,
    status: 0,
    service: '',
    demand_date: null,
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
    title:
        t('Détails de la demande') +
        ' ' +
        (item.value.event_type || '') +
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
        text: t('Gestion des demandes'),
        disabled: false,
        href: '/demands'
    },
    {
        text: item.value.event_type || '',
        disabled: true,
        href: '#'
    }
]);

function setPageMeta() {
    page.value = {
        title:
            t('Détails de la demande') +
            ' ' +
            (item.value.event_type || '') +
            ' (' +
            (item.value.customer || { firstname: '' }).firstname +
            ' ' +
            (item.value.customer || { lastname: '' }).lastname +
            ' ' +
            (formatDate(item.value.demand_date) || '') +
            ')'
    };
    breadcrumbs.value = [
        {
            text: t('Dashboard'),
            disabled: false,
            href: '/'
        },
        {
            text: t('Gestion des demandes'),
            disabled: false,
            href: '/demands'
        },
        {
            text: item.value.event_type || '',
            disabled: true,
            href: '#'
        }
    ];
}

const store = useDemandStore();
const route = useRoute();
onMounted(() => {
    /*store.fetchDemands({}).then((response) => {
        demands.value = response.data.data;
    });*/
    fetchDemand();
});

const loading = ref(false);
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
        title: 'Date de la demande',
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
    return store.demands.data.filter((user: any) => {
        return user.email.toLowerCase().includes(search.value.toLowerCase());
    });
});

const currentId = computed(() => route.params.id);
const demands = computed(() => {
    if (item.value.customer.demands) {
        return item.value.customer.demands.filter((e) => e.id != item.value.id);
    } else {
        return [];
    }
});

function editItem(item: any) {
    loading.value = false;
    editedIndex.value = demands.value.indexOf(item);
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

function fetchDemand() {
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
            fetchDemand();
        }
    },
    { deep: true }
);

// watchEffect(fetchDemands)

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
        <v-col cols="12" md="6">
            {{ $t('Status :') }}
            <v-chip rounded="md" class="font-weight-bold" :color="store.statusColor(item.status)" size="small" label
                >{{ store.statusText(item.status) }}
            </v-chip>
        </v-col>
        <v-col cols="12" md="6" justify="end" align-content="end" align="end">
            <validate-demand v-if="!item.prestation && item.status == store.statuses.started" v-model="item" />
            <v-btn
                v-if="item.prestation && item.prestation.id"
                variant="elevated"
                color="primary"
                :to="'/prestations/' + item.prestation.id"
                >{{ $t('Voir la prestation liée') }}
            </v-btn>
            <cancel-demand v-if="!item.prestation" v-model="item" />
        </v-col>
        <v-col cols="12" md="4">
            <v-card elevation="10" class="overflow-hidden h-100">
                <v-card-item class="py-4 px-6 text-white bg-primary">
                    <h4 class="text-h6">{{ $t('Identification du demandeur') }}</h4>
                </v-card-item>
                <v-card-text class="pa-6">
                    <p class="text-subtitle-1 textSecondary mt-3">{{ $t('Prénom :') }} {{ item.customer.firstname || '' }}</p>
                    <p class="text-subtitle-1 textSecondary mt-3">{{ $t('Nom :') }} {{ item.customer.lastname || '' }}</p>
                    <p class="text-subtitle-1 textSecondary mt-3">{{ $t('Email :') }} {{ item.customer.email || '' }}</p>
                    <p class="text-subtitle-1 textSecondary mt-3">{{ $t('Téléphone :') }} {{ item.customer.phone || '' }}</p>
                    <p class="text-subtitle-1 textSecondary mt-3">
                        {{ $t("Date d'enregistrement :") }} {{ formatDate(item.customer.created_at) || '' }}
                    </p>
                    <p class="text-subtitle-1 textSecondary mt-3">
                        {{ $t('Type :') }}
                        <v-chip v-if="item.customer && item.customer.is_customer" color="success">{{ $t('Client') }} </v-chip>
                        <v-chip v-else color="error">{{ $t('Prospect') }}</v-chip>
                    </p>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="8">
            <v-card elevation="10" class="overflow-hidden h-100">
                <v-card-item class="py-4 px-6 text-white bg-info">
                    <h4 class="text-h6">{{ $t('Détails de la demande') }}</h4>
                </v-card-item>
                <v-card-text class="pa-6">
                    <v-row>
                        <v-col cols="12" md="6" lg="5">
                            <!--                    Type événement : Mariage
                   Date de l'événement : 11 décembre 2024
                   La réception se déroulera plutôt : En matinée
                   Lieu de l'événement : 11 avenue Barbuse, 77270 Paris, France
                   Nombre de convives : 11
                   Commentaires :-->
                            <p class="text-subtitle-1 textSecondary mt-3">{{ $t('Type événement :') }} {{ item.event_type || '' }}</p>
                            <p class="text-subtitle-1 textSecondary mt-3">
                                {{ $t("Date de l'événement :") }} {{ formatDate(item.event_date) || '' }}
                            </p>
                            <p class="text-subtitle-1 textSecondary mt-3">
                                {{ $t('La réception se déroulera plutôt :') }} {{ item.reception_start_time || '' }}
                            </p>
                            <p class="text-subtitle-1 textSecondary mt-3">{{ $t("Lieu de l'événement :") }} {{ item.event_location || '' }}</p>
                            <p class="text-subtitle-1 textSecondary mt-3">{{ $t('Nombre de convives :') }} {{ item.number_people || '' }}</p>
                        </v-col>
                        <v-col cols="12" md="6" lg="7" v-if="item.comment && item.comment.length > 0">
                            <v-card flat variant="outlined" density="compact">
                                <v-card-title>{{ $t("Description de la demande")}}</v-card-title>
                                <v-card-text v-html="item.comment.replace(/\n/g,'<br/>')"></v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>


                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" v-if="item.customer && demands">
            <v-card elevation="10" class="overflow-hidden h-100">
                <v-card-item class="py-4 px-6 text-white bg-info">
                    <h4 class="text-h6">
                        {{ $t('Autre demandes de devis de') }} {{ item.customer.firstname || '' }}
                        {{ item.customer.lastname || '' }}
                    </h4>
                </v-card-item>
                <v-card-text class="pa-6">
                    <v-table class="month-table">
                        <thead>
                            <tr>
                                <th class="text-h6">ID</th>
                                <th class="text-h6">Prestation</th>
                                <th class="text-h6">Date de la demande</th>
                                <th class="text-h6">Status</th>
                                <th class="text-h6">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="demand in demands" :key="demand.id" class="month-item">
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
                                        :color="store.statusColor(demand.status)"
                                        size="small"
                                        label
                                        >{{ store.statusText(demand.status) }}
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
        <v-col cols="12" v-if="item.customer && item.customer.prestations">
            <v-card elevation="10" class="overflow-hidden h-100">
                <v-card-item class="py-4 px-6 text-white bg-info">
                    <h4 class="text-h6">
                        {{ $t('Autre prestations de devis de') }} {{ item.customer.firstname || '' }}
                        {{ item.customer.lastname || '' }}
                    </h4>
                </v-card-item>
                <v-card-text class="pa-6">
                    <v-table class="month-table">
                        <thead>
                            <tr>
                                <th class="text-h6">ID</th>
                                <th class="text-h6">Prestation</th>
                                <th class="text-h6">Date de la demande</th>
                                <th class="text-h6">Status</th>
                                <th class="text-h6">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="prestation in item.customer.prestations" :key="prestation.id" class="month-item">
                                <td>
                                    {{ prestation.id }}
                                </td>
                                <td>
                                    <h6 class="text-h6 font-weight-medium text-medium-emphasis">
                                        {{ prestation.demand ? prestation.demand.event_type : '' }}
                                    </h6>
                                </td>
                                <td>
                                    {{ formatDate(prestation.demand_date) }}
                                </td>
                                <td>
                                    <v-chip
                                        rounded="md"
                                        class="font-weight-bold"
                                        :color="store.statusColor(prestation.status)"
                                        size="small"
                                        label
                                        >{{ store.statusText(prestation.status) }}
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
