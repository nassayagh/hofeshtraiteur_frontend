<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { t } from '@/plugins/i18n';
import { usePrestationStore } from '../Controller';
import { useSnackbar } from '@/stores/snackbar';
const store = usePrestationStore();
const snackbarStore = useSnackbar();

const props = defineProps({
    modelValue: Object,
    payment: Object
});

const emit = defineEmits(['update:modelValue']);

const item = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
});
const dialog = ref(false);
const loading = ref(false);
function cancelItemConfirm() {
    loading.value = true;
    store
        .deletePayment(props.payment.prestation_id, props.payment.id)
        .then((response) => {
            item.value = response.data;
            dialog.value = false;
            snackbarStore.showSuccess(t('Paiement supprimé avec succès'));
        })
        .then(() => {
            dialog.value = false;
            loading.value = false;
        });
}
</script>

<template>
    <v-dialog v-model="dialog" max-width="350px">
        <template v-slot:activator="{ props }">
            <v-btn icon flat class="ml-3" dark v-bind="props" @click="loading = false"
                ><TrashIcon stroke-width="1.5" size="20" class="text-error" />
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="text-h5 text-center py-6">{{ $t('Êtes-vous sûr de vouloir supprimer le paiement?') }} </v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" variant="flat" dark @click="dialog = false">{{ $t('Non') }} </v-btn>
                <v-btn color="success" variant="flat" :loading="loading" dark @click="cancelItemConfirm">
                    {{ $t('Oui') }}
                </v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style scoped lang="scss"></style>
