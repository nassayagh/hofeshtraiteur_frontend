<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { t } from '@/plugins/i18n';
import { usePrestationStore } from '../Controller';
import { useServiceStore } from '@/stores/apps/service';
import { useSnackbar } from '@/stores/snackbar';
import { formatDate } from '@/utils/helpers/formatters';
const store = usePrestationStore();
const snackbarStore = useSnackbar();
const serviceStore = useServiceStore();

const props = defineProps({
    modelValue: Object,
    prestation: Object,
    title: t('Service'),
    buttonText: t('Ajouter un service')
});

const emit = defineEmits(['update:modelValue', 'update:item']);

const item = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
});
const dialog = ref(false);
const loading = ref(false);
const prestationServices = ref([]);

onMounted(() => {
    serviceStore.fetchItems({ per_page: 500 }).then((response) => {
        prestationServices.value = response.data.data;
        console.log(prestationServices.value);
    });
});

function save() {
    loading.value = true;
    store
        .saveService(props.prestation.id, item.value)
        .then((response) => {
            //item.value = response.data.service;
            dialog.value = false;
            emit('update:item', response.data);
            //item.value = {};
            //item.value = {};
            snackbarStore.showSuccess(t('Service enregistré avec succès'));
        })
        .catch((error) => {
            loading.value = false;
            snackbarStore.showError(error.message);
        })
        .then(() => {
            loading.value = false;
        });
}

function serviceSelected(val) {
    console.log("service",val);
    if (val) {
        const service = prestationServices.value.find((e) => e.name == val);
        if (service) {
            item.value.quantity = item.value.quantity || 1;
            item.value.service_id = service.id || null;
            item.value.price = service.price || 0;
            item.value.total = (item.value.quantity || 1) * (service.price || 0);
        }
    }
}
</script>

<template>
    <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ props }">
            <v-btn
                dark
                v-bind="props"
                :icon="item.id != null"
                :flat="item.id != null"
                variant="elevated"
                :color="item.id != null ? null : 'primary'"
                @click="loading = false;item = {}"
            >
                <EditIcon v-if="item.id" stroke-width="1.5" size="20" class="text-primary" density="compact" />
                <span v-else>{{ buttonText }}</span>
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="text-h5 text-center py-6">{{ title }} </v-card-title>
            <v-divider />
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <v-autocomplete
                            v-model="item.name"
                            :label="$t('Service')"
                            clearable
                            :items="prestationServices"
                            item-title="name"
                            item-value="name"
                            :filled="false"
                            variant="outlined"
                            @update:modelValue="serviceSelected"
                        />
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field :min="1" v-model="item.quantity" type="number" :label="$t('Quantité')" />
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field :min="0" v-model="item.price" type="number" :label="$t('Prix')" />
                    </v-col>
                    <!--                    <v-col cols="12" md="4">
                        <v-text-field v-model="item.total" type="number" :label="$t('Total')" />
                    </v-col>-->
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" variant="flat" dark @click="dialog = false">{{ $t('Annuler') }} </v-btn>
                <v-btn color="success" variant="flat" :loading="loading" dark @click="save">
                    {{ $t('Ajouter') }}
                </v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style scoped lang="scss"></style>
