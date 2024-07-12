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
        <v-col cols="12" md="6" lg="6" xl="4" xxl="4">
            <PrestastionTable
                class="h-100"
                :title="$t('LISTE PRESTATION A VENIR')"
                :options="{ per_page: 10, order_by: 'event_date', direction: 'ASC', statistics: 'future' }"
            />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="4" xxl="4">
            <PrestastionTable
                class="h-100"
                :title="$t('LISTE PRESTATION DEJA PASSE')"
                :options="{ per_page: 10, order_by: 'event_date', direction: 'DESC', statistics: 'past' }"
            />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="4" xxl="4">
            <CustomerTable
                class="h-100"
                :title="$t('LISTE DES CLIENTS RECENTS')"
                :options="{ per_page: 10, order_by: 'created_at', direction: 'DESC', statistics: 'past' }"
            />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="4" xxl="4">
            <IncomePerMonthTable
                class="h-100"
                :title="$t('CHIFFRE D’AFFAIRE PAR MOIS - DÉJÀ PASSÉ')"
                :options="{ per_page: 10, order_by: 'event_date', direction: 'ASC', statistics: 'month_income', section: 'past' }"
            />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="4" xxl="4">
            <IncomePerMonthTable
                class="h-100"
                :title="$t('CHIFFRE D’AFFAIRE PAR MOIS - A VENIR')"
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
        <v-col cols="12" md="6" lg="6" xl="3" xxl="3">
            <HallTable
                class="h-100"
                :title="$t('LISTE SALLES')"
                :options="{ per_page: 10, order_by: 'name', direction: 'ASC', statistics: 'dashboard' }"
            />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="3" xxl="3">
            <PaymentTable
                class="h-100"
                :title="$t('LISTE REGLEMENTS')"
                :options="{ per_page: 10, order_by: 'created_at', direction: 'DESC', statistics: 'dashboard' }"
            />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="3" xxl="3">
            <PaymentTypeTable
                class="h-100"
                :title="$t('TYPE REGLEMENTS')"
                :options="{ per_page: 1000, order_by: 'name', direction: 'ASC', statistics: 'dashboard' }"
            />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="3" xxl="3">
            <PrestationTypeTable
                class="h-100"
                :title="$t('TYPE PRESTATIONS')"
                :options="{ per_page: 1000, order_by: 'name', direction: 'ASC', statistics: 'dashboard' }"
            />
        </v-col>
    </v-row>
</template>
<style>
.dashboard td {
    height: auto !important;
}
</style>
