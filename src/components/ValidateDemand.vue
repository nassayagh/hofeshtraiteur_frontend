<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { t } from '@/plugins/i18n';
import { useDemandStore } from '@/stores/apps/demands';
import { useHallStore } from '@/stores/apps/hall';
import { useSnackbar } from '@/stores/snackbar';
import { formatDate } from '@/utils/helpers/formatters';
import { router } from '@/router';
const store = useDemandStore();
const snackbarStore = useSnackbar();
const hallStore = useHallStore();

const props = defineProps({
    modelValue: Object,
    density: { type: String, default: 'default' },
    icon: { type: Boolean, default: false }
});

const emit = defineEmits(['update:modelValue']);

const item = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
});
const dialog = ref(false);
const loading = ref(false);
const comment = ref(item.value.commentaire);
const hall = ref(item.value.hall_id);
const halls = ref([]);

const title = computed(
    () =>
        `${t('Validation de la demande de ')} ${(item.value.customer || { firstname: '' }).firstname} ${(item.value.customer || { lastname: '' }).lastname} ${formatDate(item.value.demand_date) || ''}`
);
function validateItemConfirm() {
    loading.value = true;
    store
        .validateItem(item.value.id, { comment: comment.value, hall: hall.value })
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

onMounted(() => {
    hallStore.fetchItems({ per_page: 1000 }).then((response) => {
        halls.value = response.data.data;
    });
});
</script>

<template>
    <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ props }">
            <v-btn
                v-if="!item.prestation"
                dark
                v-bind="props"
                flat
                variant="elevated"
                :density="density"
                color="primary"
                :icon="icon"
                @click="loading = false"
                >{{ !icon ? $t('Valider en prestation') : '' }}
                <CheckIcon v-if="icon" stroke-width="1.5" size="20" />
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
                    <v-col cols="12">
                        <v-select v-model="hall" :items="halls" item-value="id" item-title="name" :label="$t('Salle liée')" />
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
