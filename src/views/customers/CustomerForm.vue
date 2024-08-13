<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { useCustomerStore } from '@/stores/apps/customers';
import { useEventTypeStore } from '@/stores/apps/eventType';
import { useDate } from 'vuetify';
const dateObject = useDate();

// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';

import { emailValidator, requiredValidator } from '@/utils/validators';
import { formatDateToMonthShort, formatDate } from '@/utils/helpers/formatters';
import { t } from '@/plugins/i18n';
import type { VForm } from 'vuetify/components/VForm';
import { Form } from 'vee-validate';
const refForm = ref<VForm>();

import { useSnackbar } from '@/stores/snackbar';
import DatePicker from '@/components/DatePicker.vue';
import CustomerDashboard from '@/views/customers/CustomerDashboard.vue';
const snackbarStore = useSnackbar();
const eventStore = useEventTypeStore();
// theme breadcrumb
const props = defineProps({
    modelValue: Object,
    isNew: { type: Boolean, default: true },
    showCustomer: { type: Boolean, default: true },
    title: t('Service'),
    buttonText: { type: String, default: t('Ajouter') }
});
const emit = defineEmits(['update:modelValue', 'update:item']);
const item = computed({
    get: () => props.modelValue || { id: null, customer: {} },
    set: (val) => emit('update:modelValue', val)
});
const customers = ref([]);
const eventTypes = ref([]);
const store = useCustomerStore();

onMounted(() => {
    /*store.fetchCustomers({}).then((response) => {
        customers.value = response.data.data;
    });*/
    fetchCustomers();
    //fetchEventTypes();
});

const loading = ref(false);
const saving = ref(false);
const duplicating = ref(false);
const deleting = ref(false);
const confirmDelete = ref(false);
const searchQuery = ref('');
const selectedRole = ref();
const isAddNewCustomerDrawerVisible = ref(false);
const timeout = ref(null);
const createdDate = ref(null);
const paymentStatus = ref(null);
const documentStatus = ref(null);
const dateModal = ref(false);
const selectedStatus = ref();
const rowPerPage = ref(100);
const currentPage = ref(2);
const totalPage = ref(2);
const totalCustomers = ref(0);

const valid = ref(false);
const dialog = ref(false);
const dialogEdit = ref(false);
const errorMessage = ref(null);
const search = ref('');
const rolesbg = ref(['primary', 'secondary', 'error', 'success', 'warning']);
const sorting = ref([{ key: 'firstname', order: 'asc' }]);
const pageCount = ref(0);
const filters = ref({
    search: null,
    status: null,
    date: null,
    event_type: null
});
const options = ref({
    itemsPerPage: 100,
    rowsPerPage: 100,
    page: 1,
    sortDesc: [true],
    sortBy: [{ key: 'firstname', order: 'asc' }]
});

const editedIndex = ref(-1);

const defaultItem = ref({
    id: null,
    avatar: '1.jpg',
    name: '',
    email: '',
    password: '',
    changePassword: true,
    jdate: '',
    role: '',
    rolestatus: ''
});
const dialogDelete = ref(false);

const formatedDate = computed(() => {
    if (filters.value.date && filters.value.date.length > 0) {
        return formatDate(filters.value.date[0]) + ' - ' + formatDate(filters.value.date[filters.value.date.length - 1]);
    }
    return null;
});

function close() {
    dialogEdit.value = false;
    /* setTimeout(() => {
        //item.value = Object.assign({}, defaultItem.value);
       // editedIndex.value = -1;
    }, 300);*/
}
function save(values: any, { setErrors }: any) {
    refForm.value?.validate().then(({ valid }) => {
        if (valid) {
            saving.value = true;
            store
                .addItem(item.value)
                .then((response) => {
                    if (response.data.error) {
                        setErrors({ apiError: response.data.message });
                        snackbarStore.showError(response.data.message);
                        return;
                    }
                    /*if (item.value.id != null) {
                        Object.assign(customers.value[editedIndex.value], response.data);
                    } else {
                        customers.value.unshift(response.data);
                    }*/
                    saving.value = false;
                    dialogEdit.value = false;
                    snackbarStore.showSuccess(t('Client enregistré avec succès'));
                    emit('saved', response.data);
                    //store.fetchStatistics();
                })
                .catch((error) => {
                    saving.value = false;
                    setErrors({ apiError: error });
                })
                .then(() => {
                    saving.value = false;
                    setErrors({ apiError: null });
                });

            /* */
        }
    });

    /*if (editedIndex.value > -1) {
        Object.assign(customers.value[editedIndex.value], item.value);
    } else {
        customers.value.push(item.value);
    }*/
    //close();
}

function deleteItemConfirm() {
    store.deleteItem(item.value.id);
    const index = customers.value.findIndex((e) => e.id == item.value.id);
    customers.value.splice(index, 1);
    dialogDelete.value = false;
    snackbarStore.showSuccess(t('Client supprimé avec succès'));
    store.fetchStatistics();
}

//Computed Property
const formTitle = computed(() => {
    return item.value.id == null
        ? item.value.is_customer
            ? t('Nouvel Client')
            : t('Nouvel Prospect')
        : item.value.is_customer
          ? t('Modifier Le Client')
          : t('Modifier Le Prospect');
});
const dateRange = computed(() => {
    if (filters.value.date && filters.value.date.length) {
        if (filters.value.date.length > 1) {
            return [
                dateObject.format(filters.value.date[0], 'shortDate'),
                dateObject.format(filters.value.date[filters.value.date.length - 1], 'shortDate')
            ];
        }
        return [dateObject.format(filters.value.date[0], 'shortDate'), dateObject.format(filters.value.date[0], 'shortDate')];
    }
    return null;
});

function fetchCustomers() {
    try {
        clearTimeout(timeout.value);
    } catch (e) {
        /* empty */
    }

    timeout.value = setTimeout(() => {
        loading.value = true;
        let by = 'firstname';
        let direction = 'asc';
        console.log(sorting.value);
        if (sorting.value.length > 0) {
            by = sorting.value[0].key;
            direction = sorting.value[0].order;
        }
        store
            .fetchItems({
                term: search.value,
                paginate: rowPerPage.value,
                current_page: currentPage.value,
                /* page: currentPage.value,

                per_page: rowPerPage.value,*/
                direction: direction,
                order_by: by,

                page: options.value.page,
                per_page: options.value.itemsPerPage,
                ...{ ...filters.value, date: dateRange.value }
            })
            .then((response) => {
                if (response.data) {
                    /*if (download != null && download === true) {
                        const blob = new Blob([jsonToCSV(response.data.result)], { type: 'text/csv;charset=utf-8' });
                        const url = window.URL.createObjectURL(blob);
                        const link = document.createElement('a');

                        link.href = url;
                        link.download = 'reservation.csv';
                        link.click();
                    } else {*/
                    const { data, current_page, next_page_url, total, per_page, to, last_page } = response.data;

                    customers.value = data;
                    totalPage.value = last_page;
                    totalCustomers.value = total;
                    //currentPage.value = current_page;
                    /* }*/
                }
            })
            .catch((error) => {
                console.error(error);
            })
            .then(() => {
                loading.value = false;
            });
    }, 1000);
}
function fetchEventTypes() {
    eventStore
        .fetchItems({
            term: '',
            paginate: 500,
            current_page: 1,
            direction: 'asc',
            order_by: 'name',

            page: 1,
            per_page: 500
        })
        .then((response) => {
            if (response.data) {
                /*if (download != null && download === true) {
                    const blob = new Blob([jsonToCSV(response.data.result)], { type: 'text/csv;charset=utf-8' });
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');

                    link.href = url;
                    link.download = 'reservation.csv';
                    link.click();
                } else {*/
                const { data, current_page, next_page_url, total, per_page, to, last_page } = response.data;

                eventTypes.value = data;
                //currentPage.value = current_page;
                /* }*/
            }
        })
        .catch((error) => {
            console.error(error);
        })
        .then(() => {
            loading.value = false;
        });
}

watch(
    [search, options, filters /*currentPage, rowPerPage*/],
    () => {
        fetchCustomers();
    },
    { deep: true }
);

// watchEffect(fetchCustomers)

// 👉 watching current page
watchEffect(() => {
    if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});
</script>
<template>
    <v-dialog v-model="dialogEdit" max-width="600px">
        <template v-slot:activator="{ props }">
            <v-btn v-if="isNew" color="primary" class="align-self-end float-end mx-2" variant="flat" dark v-bind="props"
                >{{ buttonText }}
            </v-btn>
            <v-btn v-else icon flat v-bind="props"><PencilIcon stroke-width="1.5" size="20" class="text-primary" /></v-btn>
        </template>
        <v-card>
            <v-card-title class="pa-4 bg-info">
                <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <Form v-slot="{ errors, isSubmitting }" ref="refForm" v-model="valid" @submit="save">
                <v-card-text>
                    <v-container class="px-0">
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="item.firstname" :rules="[requiredValidator]" :label="$t('Prénom')"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="item.lastname" :rules="[requiredValidator]" :label="$t('Nom')"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="item.email" :label="$t('Email')"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="item.phone" :label="$t('Téléphone')"></v-text-field>
                            </v-col>
                        </v-row>
                        <div v-if="errors.apiError" class="mt-2">
                            <v-alert color="error">{{ errors.apiError }}</v-alert>
                        </div>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" variant="flat" dark @click="close"> {{ $t('Annuler') }} </v-btn>
                    <v-btn color="success" variant="flat" :loading="saving" type="submit">
                        {{ $t('Sauvegarder') }}
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </Form>
        </v-card>
    </v-dialog>
</template>
