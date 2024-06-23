<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { t } from '@/plugins/i18n';
import { usePrestationStore } from '../Controller';
import { useSnackbar } from '@/stores/snackbar';
import { formatDate } from '@/utils/helpers/formatters';
import { router } from '@/router';

const store = usePrestationStore();
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

const title = computed(() => `${t('Terminer la prestation')}`);
function validateItemConfirm() {
    loading.value = true;
    store
        .closeItem(item.value.id)
        .then((response) => {
            item.value = response.data;
            dialog.value = false;
            snackbarStore.showSuccess(t('Prestation clôturée avec succès'));
            //router.push(store.pageLink(item.value.status));
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
                >{{ $t('Terminer la prestation') }}
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="text-h5 text-center py-6">{{ $t('Terminer la prestation') }}</v-card-title>
            <v-divider />
            <v-card-text>
                <v-row>
                    <v-col cols="12" class="text-center">
                        {{ $t('Êtes-vous sûr de vouloir terminer la prestation?') }}
                    </v-col>
                </v-row>
            </v-card-text>
            <v-divider />
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" variant="flat" dark @click="dialog = false">{{ $t('Non') }} </v-btn>
                <v-btn color="success" variant="flat" :loading="loading" dark @click="validateItemConfirm">
                    {{ $t('Oui') }}
                </v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style scoped lang="scss"></style>
