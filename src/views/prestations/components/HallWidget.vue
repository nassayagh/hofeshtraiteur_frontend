<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { t } from '@/plugins/i18n';
import { usePrestationStore } from '@/views/prestations/Controller';
import { useSnackbar } from '@/stores/snackbar';
import { formatDate } from '@/utils/helpers/formatters';
import ChangeHall from '@/views/prestations/components/ChangeHall.vue';

const store = usePrestationStore();
const props = defineProps({
    modelValue: Object,
    showDemandInfo: Boolean
});

const emit = defineEmits(['update:modelValue']);

const item = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
});
</script>

<template>
    <v-card elevation="10" class="overflow-hidden h-100">
        <v-card-item class="py-4 px-6 text-white bg-info">
            <h4 class="text-h6 d-flex align-content-center align-center">
                {{ $t('Information de la salle') }}
                <v-spacer></v-spacer>
                <change-hall v-model="item" />
                <!--                <v-btn variant="tonal" density="compact">{{ $t('Modifier') }}</v-btn>-->
            </h4>
        </v-card-item>
        <v-card-text class="pl-6 pr-6 pt-6" v-if="!item.hall">
            <v-alert type="info"
                >{{ $t("Aucune salle n'a été attribuée. Veuillez attribuer une salle.") }} <br />
                <change-hall v-model="item"
            /></v-alert>
        </v-card-text>
        <v-card-text v-else class="pl-6 pr-6">
            <p class="text-subtitle-1 textSecondary mt-3">{{ $t('Nom :') }} {{ item.hall.name || '' }}</p>
            <p class="text-subtitle-1 textSecondary mt-3">{{ $t('Adresse :') }} {{ item.hall.address || '' }}</p>
            <p class="text-subtitle-1 textSecondary mt-3">{{ $t('Nom du régisseur :') }} {{ item.hall.manager_name || '' }}</p>
            <p class="text-subtitle-1 textSecondary mt-3">{{ $t('Téléphone du régisseur :') }} {{ item.hall.manager_phone || '' }}</p>
            <p class="text-subtitle-1 textSecondary mt-3">{{ $t('Mail du régisseur :') }} {{ item.hall.manager_email || '' }}</p>
            <p class="text-subtitle-1 textSecondary mt-3" v-if="item.hall.packing">{{ $t('Parking :') }} {{ 'Oui' }}</p>
            <p class="text-subtitle-1 textSecondary mt-3" v-if="item.hall.kitchen">{{ $t('Cuisine :') }} {{ 'Oui' }}</p>
            <p class="text-subtitle-1 textSecondary mt-3" v-if="item.hall.cold_rooom">{{ $t('Chambre froidre :') }} {{ 'Oui' }}</p>
            <p class="text-subtitle-1 textSecondary mt-3" v-if="item.hall.ladder">{{ $t('Escalier pour déchargement :') }} {{ 'Oui' }}</p>
            <p class="text-subtitle-1 textSecondary mt-3" v-if="item.hall.transportation_fee">
                {{ $t('Frais de déplacement à prévoir :') }} {{ 'Oui' }}
            </p>
            <p class="text-subtitle-1 textSecondary mt-3" v-if="item.hall.table">{{ $t('Table de buffet :') }} {{ 'Oui' }}</p>
            <p class="text-subtitle-1 textSecondary mt-3">
                {{ $t('Bac de poubelle :') }} {{ item.hall.bin == 'salle' ? $t('Géré par la salle') : $t('Géré par le client') }}
            </p>
            <p class="text-subtitle-1 textSecondary mt-3" v-html="item.hall.comment ? item.hall.comment : ''"></p>
        </v-card-text>
    </v-card>
</template>

<style scoped lang="scss"></style>
