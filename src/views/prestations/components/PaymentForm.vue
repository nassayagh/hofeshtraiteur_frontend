<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { t } from '@/plugins/i18n';
import { usePrestationStore } from '../Controller';
import { usePaymentMethodStore } from '@/stores/apps/paymentMethod';
import { useSnackbar } from '@/stores/snackbar';
import { formatDateToYear, formatDate, formatAmount, formatDateToMonthShortYear } from '@/utils/helpers/formatters';
const store = usePrestationStore();
const snackbarStore = useSnackbar();
const paymentMethodStore = usePaymentMethodStore();
import { useDate } from 'vuetify';
const dateObject = useDate();
const props = defineProps({
    modelValue: Object,
    prestation: Object,
    title: t('PaymentMethod'),
    variant: { type: String, default: 'elevated' },
    density: { type: String, default: 'default' },
    classes: { type: String, default: '' },
    buttonText: t('Ajouter un paymentMethod')
});

const emit = defineEmits(['update:modelValue', 'update:item']);

const oldItem = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
});
const item = ref(
    oldItem.value || {
        id: null,
        prestation_id: null,
        amount: 0,
        payment_date: new Date()
    }
);
const dialog = ref(false);
const datePaymentModal = ref(false);
const loading = ref(false);
const prestationPaymentMethods = ref([]);

onMounted(() => {
    paymentMethodStore.fetchItems({ per_page: 500 }).then((response) => {
        prestationPaymentMethods.value = response.data.data;
        console.log(prestationPaymentMethods.value);
    });

    if (!item.value.id) {
        item.value.amount = totalAmountLeft.value;
    }
});

const totalAmount = computed(() => {
    if (props.prestation.services) {
        return props.prestation.services.reduce((c, e) => {
            console.log(e.total, c);
            return parseFloat(e.total) + parseFloat(c);
        }, 0);
    } else {
        return 0;
    }
});
const totalAmountLeft = computed(() => {
    if (props.prestation.payments && props.prestation.payments.length) {
        return (
            totalAmount.value -
            props.prestation.payments.reduce((c, e) => {
                return parseFloat(e.amount) + parseFloat(c);
            }, 0)
        );
    } else {
        return totalAmount.value;
    }
});

function save() {
    loading.value = true;
    store
        .savePayment(props.prestation.id, { ...item.value, payment_date: formatedDemandDate.value })
        .then((response) => {
            //item.value = response.data.paymentMethod;
            dialog.value = false;
            emit('update:item', response.data);
            // oldItem.value = {};
            //oldItem.value = {};
            snackbarStore.showSuccess(t('Paiement enregistré avec succès'));
        })
        .catch((error) => {
            loading.value = false;
            snackbarStore.showError(error.message);
        })
        .then(() => {
            loading.value = false;
        });
}

function paymentMethodSelected(val) {
    console.log(totalAmountLeft.value);
    if (val) {
        const paymentMethod = prestationPaymentMethods.value.find((e) => e.id == val);
        if (paymentMethod) {
            item.value.payment_method = paymentMethod.name || null;
            if (!item.value.id) {
                item.value.amount = totalAmountLeft.value;
            }
        }
    }
}

const formatedDemandDate = computed(() => {
    if (item.value.payment_date) {
        return dateObject.format(item.value.payment_date, 'shortDate');
    }
    return null;
});
const formatedDemandDateFr = computed(() => {
    if (item.value.payment_date) {
        return formatDate(item.value.payment_date);
    }
    return null;
});
function newPayment() {
    loading.value = false;
    if (!item.value.id) {
        item.value = { payment_date: new Date(), amount: totalAmountLeft.value };
    }
}
watch(
    [props.prestation],
    (val) => {
        console.log('prestat', val);
        if (!item.value.id) {
            item.value.amount = totalAmountLeft.value;
        }
    },
    { deep: true }
);
</script>

<template>
    <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ props }">
            <v-btn
                dark
                v-bind="props"
                :icon="item.id != null"
                :flat="item.id != null"
                :variant="variant"
                :density="density"
                :color="item.id != null ? null : 'primary'"
                :class="classes"
                @click="newPayment"
            >
                <slot>
                    <EditIcon v-if="item.id" stroke-width="1.5" size="20" class="text-primary" />
                    <span v-else>{{ buttonText }}</span>
                </slot>
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="text-h5 text-center py-6">{{ title }} </v-card-title>
            <v-divider />
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <v-autocomplete
                            v-model="item.payment_method_id"
                            :label="$t('PaymentMethod')"
                            clearable
                            :items="prestationPaymentMethods"
                            item-title="name"
                            item-value="id"
                            :filled="false"
                            variant="outlined"
                            required
                            @update:modelValue="paymentMethodSelected"
                        />
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-dialog
                            ref="dialogDemandDate"
                            v-model="datePaymentModal"
                            v-model:return-value="item.payment_date"
                            persistent
                            width="290px"
                        >
                            <template #activator="{ props }">
                                <VTextField
                                    v-model="formatedDemandDateFr"
                                    v-bind="props"
                                    :placeholder="$t('Date de la demande')"
                                    hide-details
                                    clearable
                                    readonly
                                    @click:clear="item.payment_date = null"
                                />
                            </template>
                            <template #default="{ isActive }">
                                <VLocaleProvider locale="fr">
                                    <VDatePicker v-model="item.payment_date" hide-header>
                                        <template #actions>
                                            <VBtn color="primary" @click="datePaymentModal = false">
                                                {{ $t('Annuler') }}
                                            </VBtn>
                                            <VSpacer />
                                            <VBtn variant="elevated" color="primary" @click="datePaymentModal = false">
                                                {{ $t('OK') }}
                                            </VBtn>
                                        </template>
                                    </VDatePicker>
                                </VLocaleProvider>
                            </template>
                        </v-dialog>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field :min="0" v-model="item.amount" type="number" :label="$t('Montant')" />
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
