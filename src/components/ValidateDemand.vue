<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { t } from '@/plugins/i18n';
import { useDemandStore } from '@/stores/apps/demands';
import { useSnackbar } from '@/stores/snackbar';
import { formatDate } from '@/utils/helpers/formatters';
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
const comment = ref('');

const title = computed(
    () =>
        `${t('Validation de la demande de ')} ${(item.value.customer || { firstname: '' }).firstname} ${(item.value.customer || { lastname: '' }).lastname} ${formatDate(item.value.demand_date) || ''}`
);
function validateItemConfirm() {
    loading.value = true;
    store
        .validateItem(item.value.id, comment.value)
        .then((response) => {
            item.value = response.data;
            dialog.value = false;
            snackbarStore.showSuccess(t('Devis validé avec succès'));
            //router.push('/demands');
        })
        .catch((error) => {
            loading.value = false;
            snackbarStore.showError(error.message);
        })
        .then(() => {
            loading.value = false;
        });
}
</script>

<template>
    <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ props }">
            <v-btn dark v-bind="props" variant="elevated" color="primary" @click="loading = false"
                >{{ $t('Valider en prestation') }}
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="text-h5 text-center py-6">{{ $t('Êtes-vous sûr de vouloir Valider en prestation?') }} </v-card-title>
            <v-divider />
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        {{ title }}
                    </v-col>
                    <v-col cols="12">
                        <v-textarea v-model="comment" :label="$t('Note de liée')" />
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" variant="flat" dark @click="dialog = false">{{ $t('Annuler') }} </v-btn>
                <v-btn color="success" variant="flat" :loading="loading" dark @click="validateItemConfirm">
                    {{ $t('Créer la prestation') }}
                </v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style scoped lang="scss"></style>
