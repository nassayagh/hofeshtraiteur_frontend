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
    <v-row>
        <v-col cols="12">
            <v-card elevation="10" class="overflow-hidden h-100">
                <v-card-item class="py-4 px-6 text-white bg-info">
                    <h4 class="text-h6">{{ $t('Détails de la prestation') }}</h4>
                </v-card-item>
                <v-card-text class="pl-6 pr-6" v-if="showDemandInfo">
                    <p class="text-subtitle-1 textSecondary mt-3">
                        {{ $t('Type événement :') }} <strong>{{ item.eventtype ? item.eventtype.name : item.event_type || '' }}</strong>
                    </p>
                    <p class="text-subtitle-1 textSecondary mt-3">
                        {{ $t("Date de l'événement :") }} <strong>{{ formatDate(item.event_date) || '' }}</strong>
                    </p>
                    <p class="text-subtitle-1 textSecondary mt-3">
                        {{ $t('La réception se déroulera plutôt :') }} <strong>{{ item.reception_period || '' }}</strong>
                    </p>
                    <p class="text-subtitle-1 textSecondary mt-3">
                        {{ $t('Heure de réception :') }} <strong>{{ item.reception_start_time || '' }}</strong>
                    </p>
                    <p class="text-subtitle-1 textSecondary mt-3">
                        {{ $t('Nombre de convives :') }} <strong>{{ item.number_people || '' }}</strong>
                    </p>
                    <p class="text-subtitle-1 textSecondary mt-3">
                        {{ $t('Nombre de jours restants :') }} <strong>{{ item.days_left || '' }}</strong>
                    </p>
                    <p class="text-subtitle-1 textSecondary mt-3">
                        {{ $t('Date de la demande :') }} <strong>{{ formatDate(item.demand_date) || '' }}</strong>
                    </p>

                    <p class="text-subtitle-1 textSecondary mt-3" v-if="item.status >= store.statuses.validated">
                        {{ $t('Date de validation de la demande :') }} <strong>{{ formatDate(item.validated_date) || '' }}</strong>
                    </p>

                    <!--            <p class="text-subtitle-1 textSecondary mt-3">
                        {{ $t("Lieu de l'événement :") }} {{ item.event_location || '' }}
                    </p>-->

                    <!--            <p class="text-subtitle-1 textSecondary mt-3" v-if="item.status >= store.statuses.processing">
                        {{ $t('Date lancement de la prestation :') }} {{ formatDate(item.start_date) || '' }}
                    </p>-->
                    <p class="text-subtitle-1 textSecondary mt-3" v-if="item.status >= store.statuses.closed">
                        {{ $t('Date clôture de la prestation :') }} <strong>{{ formatDate(item.closed_date) || '' }}</strong>
                    </p>
                    <p class="text-subtitle-1 textSecondary mt-3">
                        {{ $t('Source :') }} <strong>{{ props.source || '' }}</strong>
                    </p>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12">
            <v-card elevation="10" class="overflow-hidden h-100">
                <v-card-item class="py-4 px-6 text-white bg-primary">
                    <h4 class="text-h6">{{ $t('Identification du demandeur') }}</h4>
                </v-card-item>
                <v-card-text class="pl-6 pr-6">
                    <p class="text-subtitle-1 textSecondary mt-3">
                        {{ $t('Prénom :') }} <strong>{{ item.customer.firstname || '' }}</strong>
                    </p>
                    <p class="text-subtitle-1 textSecondary mt-3">
                        {{ $t('Nom :') }} <strong>{{ item.customer.lastname || '' }}</strong>
                    </p>
                    <p class="text-subtitle-1 textSecondary mt-3">
                        {{ $t('Email :') }} <strong>{{ item.customer.email || '' }}</strong>
                    </p>
                    <p class="text-subtitle-1 textSecondary mt-3">
                        {{ $t('Téléphone :') }} <strong>{{ item.customer.phone || '' }}</strong>
                    </p>
                    <p class="text-subtitle-1 textSecondary mt-3">
                        {{ $t("Date d'enregistrement :") }} <strong>{{ formatDate(item.customer.created_at) || '' }}</strong>
                    </p>
                    <p class="text-subtitle-1 textSecondary mt-3">
                        {{ $t('Type :') }}
                        <v-chip v-if="item.customer && item.customer.is_customer" color="success">{{ $t('Client') }} </v-chip>
                        <v-chip v-else color="error">{{ $t('Prospect') }}</v-chip>
                    </p>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<style scoped lang="scss"></style>
