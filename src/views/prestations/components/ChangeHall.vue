<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { t } from '@/plugins/i18n';
import { usePrestationStore } from '../Controller';
import { useSnackbar } from '@/stores/snackbar';
import { formatDate } from '@/utils/helpers/formatters';
import { router } from '@/router';
import { useHallStore } from '@/stores/apps/hall';

const store = usePrestationStore();
const snackbarStore = useSnackbar();
const hallStore = useHallStore();

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
const hall = ref(item.value.hall_id || null);
const halls = ref([]);

const title = computed(() => `${t('Modifier la salle')}`);
function validateItemConfirm() {
    loading.value = true;
    store
        .changeHall(item.value.id, hall.value)
        .then((response) => {
            item.value = response.data;
            dialog.value = false;
            snackbarStore.showSuccess(t('Salle changée avec succès'));
            emit('refresh', response.data);
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

onMounted(() => {
    hallStore.fetchItems({ per_page: 1000 }).then((response) => {
        halls.value = response.data.data;
    });
});
</script>

<template>
    <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ props }">
            <v-btn dark v-bind="props" variant="tonal" density="compact" @click="loading = false">{{ $t('Modifier') }} </v-btn>
        </template>
        <v-card>
            <v-card-title class="text-h5 text-center py-6">{{ $t('Modifier la salle') }}</v-card-title>
            <v-divider />
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <v-col cols="12">
                            <v-select v-model="hall" :items="halls" item-value="id" item-title="name" :label="$t('Salle liée')" />
                        </v-col>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-divider />
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" variant="flat" dark @click="dialog = false">{{ $t('Annuller') }} </v-btn>
                <v-btn color="success" variant="flat" :loading="loading" dark @click="validateItemConfirm">
                    {{ $t('Enregistrer') }}
                </v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style scoped lang="scss"></style>
