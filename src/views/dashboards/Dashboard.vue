<script setup lang="ts">
import { ref } from 'vue';
import { t } from '@/plugins/i18n';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import DemandsDashboard from '@/views/demands/DemandsDashboard.vue';
import CustomerDashboard from '@/views/customers/CustomerDashboard.vue';
import PrespationDashboard from '@/views/prestations/PrespationDashboard.vue';
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

    <v-row>
        <v-col md="6">
            <PrespationDashboard show-payments show-description />
        </v-col>
        <v-col md="6">
            <CustomerDashboard show-description />
        </v-col>
    </v-row>
    <DemandsDashboard />
    <PrespationDashboard show-description show-cancelled show-closed show-processing :show-validated="false" show-validation md="3" />
</template>
