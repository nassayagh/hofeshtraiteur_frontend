<script setup lang="ts">
import { ref } from 'vue';
import { t } from '@/plugins/i18n';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import DemandsDashboard from '@/views/demands/DemandsDashboard.vue';
import PrespationDashboard from '@/views/prestations/PrespationDashboard.vue';
import PrestastionTable from '@/components/dashboards/PrestastionTable.vue';
import CustomerTable from '@/components/dashboards/CustomerTable.vue';
import IncomeTable from '@/components/dashboards/IncomePerMonthTable.vue';
import IncomePerYearTable from '@/components/dashboards/IncomePerYearTable.vue';
import IncomePerMonthTable from '@/components/dashboards/IncomePerMonthTable.vue';
import HallTable from '@/components/dashboards/HallTable.vue';
import PaymentTable from '@/components/dashboards/PaymentTable.vue';
import PaymentTypeTable from '@/components/dashboards/PaymentTypeTable.vue';
import PrestationTypeTable from '@/components/dashboards/PrestationTypeTable.vue';
import DemandTable from '@/components/dashboards/DemandTable.vue';

const page = ref({ title: 'Dashboard' });
const breadcrumbs = ref([
    /*{
        text: "Dashboard",
        disabled: this,
        href: "#",
    },*/
]);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>

    <v-row class="dashboard">
        <v-col cols="12" md="6" lg="6" xl="6" xxl="6">
            <PrestastionTable
                class="h-100"
                :title="$t('PRESTATION A VENIR')"
                :options="{ per_page: 10, order_by: 'event_date', direction: 'ASC', statistics: 'future', status: 1 }"
            />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6" xxl="6">
            <PrestastionTable
                class="h-100"
                :title="$t('PRESTATION DEJA PASSE')"
                :options="{ per_page: 10, order_by: 'event_date', direction: 'DESC', statistics: 'past', status: 3 }"
            />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6" xxl="6">
            <CustomerTable
                class="h-100"
                :title="$t('CLIENTS')"
                :options="{ per_page: 10, order_by: 'created_at', direction: 'DESC', statistics: 'past', status: 1 }"
            />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6" xxl="6">
            <DemandTable
                class="h-100"
                :title="$t('DEMANDES RECENTS')"
                :options="{ per_page: 10, order_by: 'event_date', direction: 'asc', statistics: 'past', status: 1 }"
            />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="4" xxl="4">
            <IncomePerMonthTable
                class="h-100"
                :title="$t('CA/MOIS DÉJÀ PASSÉ')"
                :options="{ per_page: 10, order_by: 'event_date', direction: 'ASC', statistics: 'month_income', section: 'past' }"
            />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="4" xxl="4">
            <IncomePerMonthTable
                class="h-100"
                :title="$t('CA/MOIS A VENIR')"
                :options="{ per_page: 10, order_by: 'event_date', direction: 'ASC', statistics: 'month_income', section: 'future' }"
            />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="4" xxl="4">
            <IncomePerYearTable
                class="h-100"
                :title="$t('CA A L’ANNEE')"
                :options="{ per_page: 10, order_by: 'event_date', direction: 'ASC', statistics: 'year_income' }"
            />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="4" xxl="4">
            <HallTable
                class="h-100"
                :title="$t('LISTE SALLES')"
                :options="{ per_page: 10, order_by: 'name', direction: 'ASC', statistics: 'dashboard' }"
            />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="4" xxl="4">
            <PaymentTable
                class="h-100"
                :title="$t('REGLEMENTS')"
                :options="{ per_page: 10, order_by: 'payment_date', direction: 'DESC', statistics: 'dashboard' }"
            />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="4" xxl="4">
            <PrestastionTable
                class="h-100"
                :title="$t('REG. EN ATTENTE')"
                :options="{ per_page: 10, order_by: 'event_date', direction: 'ASC', statistics: 'closed' }"
            />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="4" xxl="4">
            <PaymentTypeTable
                class="h-100"
                :title="$t('TYPE REGLEMENTS')"
                :options="{ per_page: 1000, order_by: 'name', direction: 'ASC', statistics: 'dashboard' }"
            />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="4" xxl="4">
            <PrestationTypeTable
                class="h-100"
                :title="$t('TYPE PRESTATIONS')"
                :options="{ per_page: 1000, order_by: 'name', direction: 'ASC', statistics: 'dashboard' }"
            />
        </v-col>
    </v-row>
</template>
<style>
.dashboard th {
    height: auto !important;
    padding: 5px 2px !important;
}
.dashboard td {
    height: auto !important;
    padding: 0 2px !important;
}
</style>
