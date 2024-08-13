<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { usePaymentMethodStore } from '@/stores/apps/paymentMethod';

// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';

import { emailValidator, requiredValidator } from '@/utils/validators';
import { t } from '@/plugins/i18n';
import type { VForm } from 'vuetify/components/VForm';
import { Form } from 'vee-validate';
const refForm = ref<VForm>();

import { useSnackbar } from '@/stores/snackbar';
const snackbarStore = useSnackbar();
// theme breadcrumb
const page = ref({ title: 'Modes de paiement' });
const breadcrumbs = ref([
    {
        text: t('Tableau de bord'),
        disabled: false,
        href: '/'
    },
    {
        text: t('Modes de paiement'),
        disabled: true,
        href: '#'
    }
]);
const items = ref([]);
const store = usePaymentMethodStore();

onMounted(() => {
    /*store.fetchItems({}).then((response) => {
        items.value = response.data.data;
    });*/
    fetchItems();
});

const loading = ref(false);
const saving = ref(false);
const timeout = ref(null);
const rowPerPage = ref(100);
const currentPage = ref(2);
const totalPage = ref(2);
const totalItems = ref(0);

const valid = ref(false);
const dialog = ref(false);
const search = ref('');
const rolesbg = ref(['primary', 'secondary', 'error', 'success', 'warning']);
const sorting = ref([{ key: 'name', order: 'asc' }]);
const pageCount = ref(0);
const options = ref({
    itemsPerPage: 100,
    rowsPerPage: 100,
    page: 1,
    sortDesc: [true],
    sortBy: [{ key: 'name', order: 'desc' }]
});

const editedIndex = ref(-1);
const editedItem = ref({
    id: null,
    name: '',
    description: '',
    status: null
});
const defaultItem = ref({
    id: null,
    name: '',
    description: '',
    status: null
});
function getColor(status: string) {
    if (status == 0) return '#13DEB9';
    else if (status == 1) return '#FA896B';
    else if (status == 2) return '#5D87FF';
    else return '#FFAE1F';
}
function getText(status: string) {
    if (status == 0) return t('Started');
    else if (status == 'cancel') return t('Cancelled');
    else if (status == 'completed') return t('Completed');
    else return t('Started');
}
const dialogDelete = ref(false);
const headers = ref([
    { title: 'Actions', key: 'actions', sortable: false },
    {
        title: 'Nom',
        align: 'start',
        key: 'name'
    } /*
    { title: 'Description', key: 'description' },*/
]);

function editItem(item: any) {
    loading.value = false;
    editedIndex.value = items.value.indexOf(item);
    editedItem.value = Object.assign({}, item);
    dialog.value = true;
}
function deleteItem(item: any) {
    editedItem.value = item;
    dialogDelete.value = true;
}

function close() {
    dialog.value = false;
    setTimeout(() => {
        editedItem.value = Object.assign({}, defaultItem.value);
        editedIndex.value = -1;
    }, 300);
}
function save(values: any, { setErrors }: any) {
    refForm.value?.validate().then(({ valid }) => {
        if (valid) {
            saving.value = true;
            store
                .addItem(editedItem.value)
                .then((response) => {
                    if (response.data.error) {
                        setErrors({ apiError: response.data.message });
                        return;
                    }
                    if (editedItem.value.id != null) {
                        Object.assign(items.value[editedIndex.value], response.data);
                    } else {
                        items.value.unshift(response.data);
                    }
                    loading.value = false;
                    dialog.value = false;
                    editedItem.value = { changePassword: true };
                    snackbarStore.showSuccess(t('Mode de paiement sauvée avec succès'));
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
        Object.assign(items.value[editedIndex.value], editedItem.value);
    } else {
        items.value.push(editedItem.value);
    }*/
    //close();
}

function deleteItemConfirm() {
    store.deleteItem(editedItem.value.id);
    const index = items.value.findIndex((e) => e.id == editedItem.value.id);
    items.value.splice(index, 1);
    dialogDelete.value = false;
    snackbarStore.showSuccess(t('Mode de paiement supprimé avec succès'));
}

//Computed Property
const formTitle = computed(() => {
    return editedIndex.value === -1 ? t('Nouvel Mode de paiement') : t('Modifier la Mode de paiement');
});

function fetchItems() {
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
                per_page: options.value.itemsPerPage
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

                    items.value = data;
                    totalPage.value = last_page;
                    totalItems.value = total;
                    //currentPage.value = current_page;
                    /* }*/
                }
            })
            .catch((error) => {
                console.error(error);
            })
            .then(() => {
                dialog.value = false;
                loading.value = false;
            });
    }, 1000);
}

watch(
    [search, options /*currentPage, rowPerPage*/],
    () => {
        fetchItems();
    },
    { deep: true }
);

// watchEffect(fetchItems)

// 👉 watching current page
watchEffect(() => {
    if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});
</script>
<template>
    <BaseBreadcrumb :title="`${page.title}(${totalItems})`" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <v-data-table-server
                class="border rounded-md"
                :headers="headers"
                :loading="loading"
                :items="items"
                :multi-sort="false"
                v-model:items-per-page="rowPerPage"
                :items-per-page-text="$t('Articles par page')"
                v-model:options="options"
                v-model:sort-by="sorting"
                v-model:page="currentPage"
                v-model:items-length="totalItems"
                :show-select="false"
                :loading-text="$t('Chargement des éléments')"
                :no-data-text="$t('Pas de données')"
                :no-results-text="$t('Aucun résultat')"
                @page-count="totalPage = $event"
            >
                <template v-slot:top>
                    <v-toolbar class="rounded-t-md" flat>
                        <v-toolbar-title>
                            <v-text-field
                                density="compact"
                                v-model="search"
                                :placeholder="$t('Rechercher...')"
                                hide-details
                                variant="solo"
                            ></v-text-field>
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="350px">
                            <template v-slot:activator="{ props }">
                                <v-btn color="primary" variant="flat" @click="editedItem = {}" dark v-bind="props">{{
                                    $t('Ajouter une Mode de paiement')
                                }}</v-btn>
                            </template>
                            <v-card>
                                <v-card-title class="pa-4 bg-secondary">
                                    <span class="text-h5">{{ formTitle }}</span>
                                </v-card-title>
                                <Form v-slot="{ errors, isSubmitting }" ref="refForm" v-model="valid" @submit="save">
                                    <v-card-text>
                                        <v-container class="px-0">
                                            <v-row>
                                                <v-col cols="12">
                                                    <v-text-field
                                                        v-model="editedItem.name"
                                                        :rules="[requiredValidator]"
                                                        :label="$t('Nom')"
                                                    ></v-text-field>
                                                </v-col>
                                                <!--                                                <v-col cols="12">
                                                    <v-textarea v-model="editedItem.description" :label="$t('Description')"></v-textarea>
                                                </v-col>-->
                                            </v-row>
                                            <div v-if="errors.apiError" class="mt-2">
                                                <v-alert color="error">{{ errors.apiError }}</v-alert>
                                            </div>
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="error" variant="flat" dark @click="close"> {{ $t('Annuler') }} </v-btn>
                                        <v-btn color="success" variant="flat" :loading="loading" type="submit">
                                            {{ $t('Sauvegarder') }}
                                        </v-btn>
                                    </v-card-actions>
                                </Form>
                            </v-card>
                        </v-dialog>
                        <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card>
                                <v-card-title class="text-h5 text-center py-6">{{
                                    $t('Êtes-vous sûr de vouloir supprimer cet élément ?')
                                }}</v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="error" variant="flat" dark @click="dialogDelete = false">{{ $t('Annuler') }}</v-btn>
                                    <v-btn color="success" variant="flat" dark @click="deleteItemConfirm">{{ $t('OK') }}</v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
                <template v-slot:item.status="{ item }">
                    <v-chip :color="getColor(item.status)">
                        {{ getText(item.status) }}
                    </v-chip>
                </template>
                <template v-slot:item.name="{ item }">
                    <span @click="editItem(item)" class="cursor-pointer">
                        {{ item.name }}
                    </span>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-btn icon small @click="editItem(item)" flat>
                        <EditIcon stroke-width="1.5" size="20" class="text-primary" />
                    </v-btn>
                    <v-btn icon small @click="deleteItem(item)" flat>
                        <TrashIcon stroke-width="1.5" size="20" class="text-error" />
                    </v-btn>
                </template>
                <template v-slot:no-data>
                    <span>{{ $t('Aucune donnée disponible') }}</span>
                    <!--                    <v-btn color="primary" @click="initialize"> Reset </v-btn>-->
                </template>

                <!--                <template v-slot:bottom>
                    <div class="text-center pt-2">
                        <v-pagination v-model="currentPage" :length="totalPage"></v-pagination>
                    </div>
                </template>-->
            </v-data-table-server>
        </v-col>
    </v-row>
</template>
