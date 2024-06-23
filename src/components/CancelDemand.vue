<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { t } from '@/plugins/i18n';
import { useDemandStore } from '@/stores/apps/demands';
import { useSnackbar } from '@/stores/snackbar';
import { router } from '@/router';
const store = useDemandStore();
const snackbarStore = useSnackbar();

const props = defineProps({
    modelValue: Object
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
        .cancelItem(item.value.id)
        .then((response) => {
            item.value = response.data;
            dialog.value = false;
            snackbarStore.showSuccess(t('Devis annulé avec succès'));
            //router.push('/demands');
        })
        .then(() => {
            loading.value = false;
        });
}
</script>

<template>
    <v-dialog v-model="dialog" max-width="350px">
        <template v-slot:activator="{ props }">
            <v-btn v-if="item.status == 0" color="error" class="ml-3" variant="outlined" dark v-bind="props"
                >{{ $t('Annuler la demande') }}
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="text-h5 text-center py-6">{{ $t('Êtes-vous sûr de vouloir annuller la demande?') }} </v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" variant="flat" dark @click="dialog = false">{{ $t('Annuler') }} </v-btn>
                <v-btn color="success" variant="flat" :loading="loading" dark @click="cancelItemConfirm">
                    {{ $t('OK') }}
                </v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style scoped lang="scss"></style>
