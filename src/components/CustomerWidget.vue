<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { t } from '@/plugins/i18n';
import { usePrestationStore } from '@/views/prestations/Controller';
import { useSnackbar } from '@/stores/snackbar';
import { formatDate } from '@/utils/helpers/formatters';

const store = usePrestationStore();
const props = defineProps({
    modelValue: Object,
    showDemandInfo: Boolean,
    source: { type: String, default: 'SITE' }
});

const emit = defineEmits(['update:modelValue']);

const item = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
});
</script>

<template>
    <v-card elevation="10" class="overflow-hidden h-100">
        <v-card-item class="py-4 px-6 text-white bg-primary">
            <h4 class="text-h6">{{ $t('Identification du demandeur') }}</h4>
        </v-card-item>
        <v-card-text class="pl-6 pr-6">
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
        <v-card-text class="pt-0 pb-0" v-if="showDemandInfo">
            <v-divider />
        </v-card-text>
        <v-card-text class="pl-6 pr-6" v-if="showDemandInfo">
            <p class="text-subtitle-1 textSecondary mt-3">{{ $t('Source :') }} {{ props.source || '' }}</p>
            <p class="text-subtitle-1 textSecondary mt-3">{{ $t('Type événement :') }} {{ item.event_type || '' }}</p>
            <p class="text-subtitle-1 textSecondary mt-3">{{ $t('Date de la demande :') }} {{ formatDate(item.demand_date) || '' }}</p>

            <p class="text-subtitle-1 textSecondary mt-3">
                {{ $t('Date création de la prestation :') }} {{ formatDate(item.created_at) || '' }}
            </p>
            <p class="text-subtitle-1 textSecondary mt-3">
                {{ $t('La réception se déroulera plutôt :') }} {{ item.reception_period || '' }}
            </p>
            <p class="text-subtitle-1 textSecondary mt-3">
                {{ $t('Heure de réception :') }} {{ item.reception_start_time || '' }}
            </p>
            <p class="text-subtitle-1 textSecondary mt-3">
                {{ $t("Lieu de l'événement :") }} {{ item.event_location || '' }}
            </p>
            <p class="text-subtitle-1 textSecondary mt-3">
                {{ $t('Nombre de convives :') }} {{ item.number_people || '' }}
            </p>
            <!--            <p class="text-subtitle-1 textSecondary mt-3" v-if="item.status >= store.statuses.processing">
                {{ $t('Date lancement de la prestation :') }} {{ formatDate(item.start_date) || '' }}
            </p>-->
            <p class="text-subtitle-1 textSecondary mt-3" v-if="item.status >= store.statuses.closed">
                {{ $t('Date clôture de la prestation :') }} {{ formatDate(item.closed_date) || '' }}
            </p>
        </v-card-text>
    </v-card>
</template>

<style scoped lang="scss"></style>
