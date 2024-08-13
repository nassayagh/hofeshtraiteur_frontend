<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { useHallStore } from '@/stores/apps/hall';

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
const page = ref({ title: 'Gestions des salles' });
const breadcrumbs = ref([
    {
        text: t('Tableau de bord'),
        disabled: false,
        href: '/'
    },
    {
        text: t('Salles'),
        disabled: true,
        href: '#'
    }
]);
const items = ref([]);
const store = useHallStore();

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
const sorting = ref([{ key: 'name', order: 'ASC' }]);
const pageCount = ref(0);
const options = ref({
    itemsPerPage: 100,
    rowsPerPage: 100,
    page: 1,
    sortDesc: [true],
    sortBy: [{ key: 'name', order: 'ASC' }]
});
const yesNo = ref([
    { id: 0, label: t('Non') },
    { id: 1, label: t('Oui') }
]);
const bins = ref([
    { id: 'salle', label: t('Géré par la salle') },
    { id: 'client', label: t('Géré par le client') }
]);
const editedIndex = ref(-1);
const editedItem = ref({
    id: null,
    name: '',
    description: '',
    price: 0,
    status: null,
    packing: null,
    kitchen: null,
    cold_room: null,
    ladder: null,
    table: null,
    transportation_fee: null,
    bin: null
});
const defaultItem = ref({
    id: null,
    name: '',
    description: '',
    status: null,
    packing: null,
    kitchen: null,
    cold_room: null,
    ladder: null,
    table: null,
    transportation_fee: null,
    bin: null
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
    /*{
        title: 'ID',
        align: 'start',
        key: 'id'
    },*/
    {
        title: t('Nom'),
        align: 'start',
        key: 'name'
    },
    {
        title: t('Adrse'),
        align: 'start',
        key: 'address'
    },
    {
        title: t('Nom.régis'),
        align: 'start',
        key: 'manager_name'
    },
    {
        title: t('Tél.rég'),
        align: 'start',
        key: 'manager_phone'
    },
    {
        title: t('Mail.rég'),
        align: 'start',
        key: 'manager_email'
    },
    {
        title: t('Parking'),
        align: 'start',
        key: 'packing'
    },
    {
        title: t('Cuisine'),
        align: 'start',
        key: 'kitchen'
    },
    {
        title: t('Chambre'),
        align: 'start',
        key: 'cold_room'
    },
    {
        title: t('Escalier'),
        align: 'start',
        key: 'ladder'
    },
    {
        title: t('Bac'),
        align: 'start',
        key: 'bin'
    },
    {
        title: t('Frais'),
        align: 'start',
        key: 'transportation_fee'
    },
    {
        title: t('Table'),
        align: 'start',
        key: 'transportation_fee'
    },
    {
        title: t('Cmt'),
        align: 'start',
        key: 'comment'
    }
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
                    saving.value = false;
                    loading.value = false;
                    dialog.value = false;
                    editedItem.value = { changePassword: true };
                    snackbarStore.showSuccess(t('Salle sauvée avec succès'));
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
    snackbarStore.showSuccess(t('Salle supprimé avec succès'));
}

//Computed Property
const formTitle = computed(() => {
    return editedIndex.value === -1 ? t('Nouvel salle') : t('Modifier la salle');
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
                                clearable
                            ></v-text-field>
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="750px">
                            <template v-slot:activator="{ props }">
                                <v-btn color="primary" variant="flat" @click="editItem = defaultItem" dark v-bind="props">{{
                                    $t('Ajouter une salle')
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
                                                <v-col cols="12" md="6">
                                                    <v-text-field
                                                        v-model="editedItem.name"
                                                        :rules="[requiredValidator]"
                                                        :label="$t('Nom')"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="6">
                                                    <v-text-field
                                                        v-model="editedItem.address"
                                                        :label="$t('Adresse de la salle')"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="4">
                                                    <v-text-field
                                                        v-model="editedItem.manager_name"
                                                        :label="$t('Nom du régisseur')"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="4">
                                                    <v-text-field
                                                        v-model="editedItem.manager_phone"
                                                        :label="$t('Téléphone du régisseur')"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="4">
                                                    <v-text-field
                                                        v-model="editedItem.manager_email"
                                                        :label="$t('Mail du régisseur')"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="3">
                                                    <v-select
                                                        v-model="editedItem.packing"
                                                        :items="yesNo"
                                                        item-title="label"
                                                        item-value="id"
                                                        :label="$t('Parking')"
                                                        clearable
                                                /></v-col>
                                                <v-col cols="12" md="3">
                                                    <v-select
                                                        v-model="editedItem.kitchen"
                                                        :items="yesNo"
                                                        item-title="label"
                                                        item-value="id"
                                                        :label="$t('Cuisine')"
                                                        clearable
                                                /></v-col>
                                                <v-col cols="12" md="3">
                                                    <v-select
                                                        v-model="editedItem.cold_room"
                                                        :items="yesNo"
                                                        item-title="label"
                                                        item-value="id"
                                                        :label="$t('Chambre froidre')"
                                                        clearable
                                                /></v-col>
                                                <v-col cols="12" md="3">
                                                    <v-select
                                                        v-model="editedItem.ladder"
                                                        :items="yesNo"
                                                        item-title="label"
                                                        item-value="id"
                                                        :label="$t('Escalier pour déchargement')"
                                                        clearable
                                                /></v-col>
                                                <v-col cols="12" md="4">
                                                    <v-select
                                                        v-model="editedItem.bin"
                                                        :items="bins"
                                                        item-title="label"
                                                        item-value="id"
                                                        :label="$t('Bac de poubelle')"
                                                        clearable
                                                /></v-col>
                                                <v-col cols="12" md="4">
                                                    <v-select
                                                        v-model="editedItem.transportation_fee"
                                                        :items="yesNo"
                                                        item-title="label"
                                                        item-value="id"
                                                        :label="$t('Frais de déplacement à prévoir')"
                                                        clearable
                                                /></v-col>
                                                <v-col cols="12" md="4">
                                                    <v-select
                                                        v-model="editedItem.table"
                                                        :items="yesNo"
                                                        item-title="label"
                                                        item-value="id"
                                                        :label="$t('Table de buffet présent dans la salle')"
                                                        clearable
                                                /></v-col>
                                                <v-col cols="12">
                                                    <v-textarea v-model="editedItem.comment" :label="$t('Commentaire')"></v-textarea>
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
                <template v-slot:item.address="{ item }">
                    <v-tooltip :text="item.address">
                        <template v-slot:activator="{ props }">
                            <span v-bind="props">{{
                                !item.address || item.address.length < 10 ? item.address : `${item.address.slice(0, 9)}...`
                            }}</span>
                        </template>
                    </v-tooltip>
                </template>
                <template v-slot:item.manager_email="{ item }">
                    <v-tooltip :text="item.manager_email">
                        <template v-slot:activator="{ props }">
                            <span v-bind="props">{{
                                !item.manager_email || item.manager_email.length < 10
                                    ? item.manager_email
                                    : `${item.manager_email.slice(0, 9)}...`
                            }}</span>
                        </template>
                    </v-tooltip>
                </template>
                <template v-slot:item.manager_name="{ item }">
                    <v-tooltip :text="item.manager_name">
                        <template v-slot:activator="{ props }">
                            <span v-bind="props">{{
                                !item.manager_name || item.manager_name.length < 10
                                    ? item.manager_name
                                    : `${item.manager_name.slice(0, 9)}...`
                            }}</span>
                        </template>
                    </v-tooltip>
                </template>
                <template v-slot:item.packing="{ item }">
                    {{ item.packing ? $t('Oui') : $t('Non') }}
                </template>
                <template v-slot:item.kitchen="{ item }">
                    {{ item.kitchen ? $t('Oui') : $t('Non') }}
                </template>
                <template v-slot:item.cold_room="{ item }">
                    {{ item.cold_room ? $t('Oui') : $t('Non') }}
                </template>
                <template v-slot:item.ladder="{ item }">
                    {{ item.ladder ? $t('Oui') : $t('Non') }}
                </template>
                <template v-slot:item.table="{ item }">
                    {{ item.table ? $t('Oui') : $t('Non') }}
                </template>
                <template v-slot:item.transportation_fee="{ item }">
                    {{ item.transportation_fee ? $t('Oui') : $t('Non') }}
                </template>
                <template v-slot:item.bin="{ item }">
                    {{ item.bin == 'salle' ? $t('Salle') : $t('Client') }}
                </template>
                <template v-slot:item.comment="{ item }">
                    <v-tooltip :text="item.comment">
                        <template v-slot:activator="{ props }">
                            <span v-bind="props">{{
                                !item.comment || item.comment.length < 10 ? item.comment : `${item.comment.slice(0, 9)}...`
                            }}</span>
                        </template>
                    </v-tooltip>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-icon color="info" size="small" class="me-2" @click="editItem(item)"> mdi-pencil </v-icon>
                    <v-icon color="error" size="small" @click="deleteItem(item)"> mdi-delete </v-icon>
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
