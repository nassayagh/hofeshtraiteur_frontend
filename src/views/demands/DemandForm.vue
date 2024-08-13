<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import EditorMenubar from '@/components/forms/plugins/editor/EditorMenubar.vue';
import { useDemandStore } from '@/stores/apps/demands';
import { useEventTypeStore } from '@/stores/apps/eventType';
import { useCustomerStore } from '@/stores/apps/customers';
import { useHallStore } from '@/stores/apps/hall';
import type { CurrencyEuroIcon, BasketIcon, ShoppingCartIcon } from 'vue-tabler-icons';

import { useDate } from 'vuetify';

const dateObject = useDate();

// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';

import { emailValidator, requiredValidator } from '@/utils/validators';
import { formatDateToMonthShort, formatDate, formatAmount } from '@/utils/helpers/formatters';
import { t } from '@/plugins/i18n';
import type { VForm } from 'vuetify/components/VForm';
import { Form } from 'vee-validate';

const refForm = ref<VForm>();

import { useSnackbar } from '@/stores/snackbar';

const snackbarStore = useSnackbar();
const eventStore = useEventTypeStore();
const customerStore = useCustomerStore();
const hallStore = useHallStore();

const props = defineProps({
    modelValue: Object,
    isNew: { type: Boolean, default: true },
    showCustomer: { type: Boolean, default: true },
    title: t('Service'),
    buttonText: { type: String, default: t('Ajouter une demande') }
});
const emit = defineEmits(['update:modelValue', 'update:item']);

// theme breadcrumb
const page = ref({ title: t('Gestion des demandes') });
const breadcrumbs = ref([
    {
        text: t('Dashboard'),
        disabled: false,
        href: '/'
    },
    {
        text: t('Gestion des demandes'),
        disabled: true,
        href: '#'
    }
]);
const demands = ref([]);
const eventTypes = ref([]);
const customers = ref([]);
const halls = ref([]);
const store = useDemandStore();

onMounted(() => {
    fetchDemands();
    fetchEventTypes();
    fetchCustomers();
    hallStore.fetchItems({ per_page: 1000 }).then((response) => {
        halls.value = response.data.data;
    });
});

const loading = ref(false);
const saving = ref(false);
const timeout = ref(null);
const dateDemandModal = ref(false);
const rowPerPage = ref(100);
const currentPage = ref(2);
const totalPage = ref(2);
const totalDemands = ref(0);

const valid = ref(false);
const dialogEdit = ref(false);
const search = ref('');
const sorting = ref([{ key: 'event_date', order: 'ASC' }]);

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
    sortBy: [{ key: 'event_date', order: 'ASC' }]
});

const editedIndex = ref(-1);

const item = computed({
    get: () => props.modelValue || { id: null, customer: {} },
    set: (val) => emit('update:modelValue', val)
});
const editor = useEditor({
    extensions: [StarterKit],
    content: item.value.commentaire
});

const formatedDemandDate = computed(() => {
    if (item.value.event_date) {
        return dateObject.format(item.value.event_date, 'shortDate');
    }
    return null;
});
const formatedDemandDate1 = computed(() => {
    if (item.value.event_date) {
        return formatDate(item.value.event_date);
    }
    return null;
});

//Methods

function editItem(item: any, index: number) {
    loading.value = false;
    editedIndex.value = index;
    item.value = Object.assign({}, item);
    dialogEdit.value = true;
}

function close() {
    dialogEdit.value = false;
    /*setTimeout(() => {
        item.value = Object.assign({ customer: {} }, { customer: { id: null, customer: {} } });
        //editedIndex.value = -1;
    }, 300);*/
}

function save(values: any, { setErrors }: any) {
    console.log(item.value);
    refForm.value?.validate().then(({ valid }) => {
        if (valid) {
            saving.value = true;
            store
                .addItem({ ...item.value, event_date: formatedDemandDate.value, commentaire: editor.value?.getHTML() })
                .then((response) => {
                    if (response.data.error) {
                        setErrors({ apiError: response.data.message });
                        return;
                    }
                    const dateObject1 = response.data.event_date != null ? new Date(response.data.event_date) : null;
                    const d = {
                        ...response.data,
                        event_date: dateObject1
                    };
                    /* if (item.value.id != null) {
                        Object.assign(demands.value[editedIndex.value], d);
                    } else {
                        demands.value.unshift(d);
                    }*/
                    emit('saved', d);
                    saving.value = false;
                    dialogEdit.value = false;
                    //item.value = { customer: {} };
                    snackbarStore.showSuccess(t('Demande enregistrée avec succès'));
                    fetchEventTypes();
                    fetchDemands();
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
        Object.assign(demands.value[editedIndex.value], item.value);
    } else {
        demands.value.push(item.value);
    }*/
    //close();
}

//Computed Property
const formTitle = computed(() => {
    return editedIndex.value === -1 ? 'Nouvelle demande' : 'Modifier la demande';
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

function fetchDemands() {
    try {
        clearTimeout(timeout.value);
    } catch (e) {
        /* empty */
    }

    timeout.value = setTimeout(() => {
        loading.value = true;
        let by = 'id';
        let direction = 'desc';
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
                    const { data, current_page, next_page_url, total, per_page, to, last_page } = response.data;
                    demands.value = data.map((e) => {
                        const dateObject = e.event_date != null ? new Date(e.event_date) : null;
                        return {
                            ...e,
                            event_date: dateObject
                        };
                    });
                    totalPage.value = last_page;
                    totalDemands.value = total;
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
                const { data, current_page, next_page_url, total, per_page, to, last_page } = response.data;

                eventTypes.value = data;
            }
        })
        .catch((error) => {
            console.error(error);
        })
        .then(() => {
            //loading.value = false;
        });
}

function fetchCustomers() {
    customerStore
        .fetchItems({
            term: '',
            paginate: 5000,
            current_page: 1,
            direction: 'asc',
            order_by: 'firstname',

            page: 1,
            per_page: 5000
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

                customers.value = data.map((e) => {
                    return {
                        ...e,
                        name: e.firstname + ' ' + e.lastname + ' (' + (e.is_customer ? t('Client') : t('Prospect')) + ')'
                    };
                });
                //currentPage.value = current_page;
                /* }*/
            }
        })
        .catch((error) => {
            console.error(error);
        })
        .then(() => {
            //loading.value = false;
        });
}

watch(
    [search, options, filters /*currentPage, rowPerPage*/],
    () => {
        fetchDemands();
    },
    { deep: true }
);

// watchEffect(fetchDemands)

// 👉 watching current page
watchEffect(() => {
    if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});

function customerSelected(val) {
    if (val) {
        const customer = customers.value.find((e) => e.id == val);
        if (customer) {
            item.value.customer = customer;
        }
    }
}
</script>
<template>
    <v-dialog v-model="dialogEdit" max-width="1000px">
        <template v-slot:activator="{ props }">
            <v-btn v-if="isNew" color="primary" class="align-self-end float-end mx-2" variant="flat" dark v-bind="props"
                >{{ buttonText }}
            </v-btn>
            <v-list-item v-else value="action" hide-details min-height="38" v-bind="props">
                <v-list-item-title>
                    <v-avatar size="20" class="mr-2">
                        <component is="EditIcon" stroke-width="2" size="20" />
                    </v-avatar>
                    {{ $t('Modifier') }}
                </v-list-item-title>
            </v-list-item>
        </template>
        <v-card>
            <v-card-title class="pa-4 bg-secondary">
                <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <Form v-slot="{ errors, isSubmitting }" ref="refForm" v-model="valid" @submit="save">
                <v-card-text>
                    <v-container class="px-0">
                        <v-row>
                            <template v-if="showCustomer">
                                <v-col cols="12">
                                    <v-autocomplete
                                        v-model="item.customer_id"
                                        :placeholder="$t('Client')"
                                        :label="$t('Client')"
                                        :items="customers"
                                        item-value="id"
                                        item-title="name"
                                        clearable
                                        hide-details
                                        variant="outlined"
                                        @update:modelValue="customerSelected"
                                    >
                                    </v-autocomplete>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        v-model="item.customer.firstname"
                                        :rules="[requiredValidator]"
                                        :label="$t('Prénom')"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        v-model="item.customer.lastname"
                                        :rules="[requiredValidator]"
                                        :label="$t('Nom')"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="item.customer.email" :label="$t('Email')"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="item.customer.phone" :label="$t('Téléphone')"></v-text-field>
                                </v-col>
                            </template>
                            <v-col cols="12" md="6">
                                <v-autocomplete
                                    v-model="item.event_type_id"
                                    :placeholder="$t('Type d\'événement')"
                                    :items="eventTypes"
                                    item-value="id"
                                    item-title="name"
                                    clearable
                                    hide-details
                                    variant="outlined"
                                ></v-autocomplete>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-dialog
                                    ref="dialogDemandDate"
                                    v-model="dateDemandModal"
                                    v-model:return-value="item.event_date"
                                    persistent
                                    width="290px"
                                >
                                    <template #activator="{ props }">
                                        <VTextField
                                            v-model="formatedDemandDate1"
                                            prepend-inner-icon="bx-calendar"
                                            v-bind="props"
                                            :placeholder="$t('Date de l\'évènement')"
                                            hide-details
                                            clearable
                                            readonly
                                            @click:clear="item.event_date = null"
                                        />
                                    </template>
                                    <template #default="{ isActive }">
                                        <VLocaleProvider locale="fr">
                                            <VDatePicker v-model="item.event_date" hide-header>
                                                <template #actions>
                                                    <VBtn color="primary" @click="dateDemandModal = false">
                                                        {{ $t('Annuler') }}
                                                    </VBtn>
                                                    <VSpacer />
                                                    <VBtn variant="elevated" color="primary" @click="dateDemandModal = false">
                                                        {{ $t('OK') }}
                                                    </VBtn>
                                                </template>
                                            </VDatePicker>
                                        </VLocaleProvider>
                                    </template>
                                </v-dialog>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-select
                                    v-model="item.reception_period"
                                    hide-details
                                    :items="[$t('En matiné'), $t('Le midi'), $t('En soirée')]"
                                    :label="$t('La réception se déroulera plutôt')"
                                    clearable
                                ></v-select>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="item.reception_start_time"
                                    hide-details
                                    :label="$t('Heure de réception')"
                                    clearable
                                ></v-text-field>
                            </v-col>
                            <!--                            <v-col cols="12" md="6" v-if="item.source != 'admin'">
                                <v-text-field v-model="item.event_location" hide-details :label="$t('Lieu de l\'événement')"></v-text-field>
                            </v-col>-->
                            <v-col cols="12" md="6">
                                <v-select
                                    v-model="item.hall_id"
                                    :items="halls"
                                    item-value="id"
                                    item-title="name"
                                    :label="$t('Salle liée')"
                                />
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="item.number_people"
                                    hide-details
                                    type="number"
                                    :label="$t('Nombre de convives')"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <label>{{ $t('Commentaire') }}</label>
                                <EditorMenubar :editor="editor" />
                                <editor-content :editor="editor" />
                            </v-col>

                            <!--
                    <v-col cols="12">
                        <v-textarea v-model="item.description" :label="$t('Description')"></v-textarea>
                    </v-col>-->
                        </v-row>
                        <div v-if="errors.apiError" class="mt-2">
                            <v-alert color="error">{{ errors.apiError }}</v-alert>
                        </div>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" variant="flat" dark @click="close"> {{ $t('Annuler') }}</v-btn>
                    <v-btn color="success" variant="flat" :loading="saving" type="submit">
                        {{ $t('Sauvegarder') }}
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </Form>
        </v-card>
    </v-dialog>
</template>
