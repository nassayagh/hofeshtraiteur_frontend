<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { useUsersStore } from '@/stores/authUser';

// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';

import { emailValidator, requiredValidator } from '@/utils/validators';
import { t } from '@/plugins/i18n';
import type { VForm } from 'vuetify/components/VForm';
import { Form } from 'vee-validate';
import sidebarItems from '@/layouts/full/vertical-sidebar/sidebarItem';
const refForm = ref<VForm>();

import { useSnackbar } from '@/stores/snackbar';

const snackbarStore = useSnackbar();
// theme breadcrumb
const page = ref({ title: 'Gestions des administrateurs' });
const breadcrumbs = ref([
    {
        text: t('Dashboard'),
        disabled: false,
        href: '/'
    },
    {
        text: t('Administrateurs'),
        disabled: true,
        href: '#'
    }
]);
const users = ref([]);
const store = useUsersStore();

onMounted(() => {
    /*store.fetchUsers({}).then((response) => {
        users.value = response.data.data;
    });*/
    fetchUsers();
});

const loading = ref(false);
const saving = ref(false);
const duplicating = ref(false);
const deleting = ref(false);
const confirmDelete = ref(false);
const searchQuery = ref('');
const selectedRole = ref();
const isAddNewUserDrawerVisible = ref(false);
const timeout = ref(null);
const createdDate = ref(null);
const paymentStatus = ref(null);
const documentStatus = ref(null);
const duplicateDialog = ref(false);
const selectedStatus = ref();
const rowPerPage = ref(10);
const currentPage = ref(2);
const totalPage = ref(2);
const totalUsers = ref(0);


const valid = ref(false);
const dialog = ref(false);
const errorMessage = ref(null);
const search = ref('');
const rolesbg = ref(['primary', 'secondary', 'error', 'success', 'warning']);
const sorting = ref([{ key: 'name', order: 'asc' }]);
const pageCount = ref(0);
const options = ref({
    itemsPerPage: 10,
    rowsPerPage: 10,
    page: 1,
    sortDesc: [true],
    sortBy: [{ key: 'name', order: 'desc' }]
});

const editedIndex = ref(-1);
const editedItem = ref({
    id: null,
    avatar: '1.jpg',
    name: '',
    email: '',
    password: '',
    changePassword: true,
    jdate: '',
    role: '',
    rolestatus: '',
    roles: []
});
const defaultItem = ref({
    id: null,
    avatar: '1.jpg',
    name: '',
    email: '',
    password: '',
    changePassword: true,
    jdate: '',
    role: '',
    rolestatus: '',
    roles: []
});
const dialogDelete = ref(false);
const headers = ref([
    {
        title: 'Nom',
        align: 'start',
        key: 'name'
    },
    { title: 'Email', key: 'email' },
    /* { title: 'Protein (g)', key: 'protein' },*/
    { title: 'Actions', key: 'actions', sortable: false }
]);

//Methods
const filteredList = computed(() => {
    return store.users.data.filter((user: any) => {
        return user.email.toLowerCase().includes(search.value.toLowerCase());
    });
});
const roleItems = computed(() => {
    const rs = [];
    for (let i = 0; i < sidebarItems.length; i++) {
        if (sidebarItems[i].children != null && sidebarItems[i].children.length > 0) {
            rs.push(sidebarItems[i]);
            for (let j = 0; j < sidebarItems[i].children.length; j++) {
                if (!sidebarItems[i].children[j].header)
                    rs.push({ ...sidebarItems[i].children[j], title: sidebarItems[i].title + ' ' + sidebarItems[i].children[j].title });
            }
        } else {
            if (!sidebarItems[i].header) rs.push(sidebarItems[i]);
        }
    }
    return rs;
});

function editItem(item: any) {
    loading.value = false;
    editedIndex.value = users.value.indexOf(item);
    editedItem.value = Object.assign({}, { ...item, roles: item.roles || [] });
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
                .addUser(editedItem.value)
                .then((response) => {
                    if (response.data.error) {
                        setErrors({ apiError: response.data.message });
                        return;
                    }
                    if (editedItem.value.id != null) {
                        Object.assign(users.value[editedIndex.value], response.data);
                    } else {
                        users.value.unshift(response.data);
                    }
                    loading.value = false;
                    dialog.value = false;
                    editedItem.value = { changePassword: true };
                    snackbarStore.showSuccess(t('Utilisateur enregistreé avec succès'));
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
        Object.assign(users.value[editedIndex.value], editedItem.value);
    } else {
        users.value.push(editedItem.value);
    }*/
    //close();
}

function deleteItemConfirm() {
    store.deleteUser(editedItem.value.id);
    const index = users.value.findIndex((e) => e.id == editedItem.value.id);
    users.value.splice(index, 1);
    dialogDelete.value = false;
    snackbarStore.showSuccess(t('Utilisateur supprimé avec succès'));
}

//Computed Property
const formTitle = computed(() => {
    return editedIndex.value === -1 ? 'Nouvel administrateur' : 'Modifier l’administrateur';
});

function fetchUsers() {
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
            .fetchUsers({
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

                    users.value = data;
                    totalPage.value = last_page;
                    totalUsers.value = total;
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
        fetchUsers();
    },
    { deep: true }
);

// watchEffect(fetchUsers)

// 👉 watching current page
watchEffect(() => {
    if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});
</script>
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>

        <v-col cols="12">
            <v-data-table-server
                class="border rounded-md"
                :headers="headers"
                :loading="loading"
                :items="users"
                :multi-sort="false"
                v-model:items-per-page="rowPerPage"
                :items-per-page-text="$t('Articles par page')"
                v-model:options="options"
                v-model:sort-by="sorting"
                v-model:page="currentPage"
                v-model:items-length="totalUsers"
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
                        <v-dialog v-model="dialog" max-width="550px">
                            <template v-slot:activator="{ props }">
                                <v-btn color="primary" variant="flat" @click="editedItem = { roles: [] }" dark v-bind="props">{{
                                    $t('Ajouter un administrateur')
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
                                                <v-col cols="12">
                                                    <v-text-field
                                                        v-model="editedItem.email"
                                                        :label="$t('Email')"
                                                        :rules="[requiredValidator, emailValidator]"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field
                                                        v-model="editedItem.password"
                                                        :label="$t('Mot de passe')"
                                                        placeholder="············"
                                                        :append-inner-icon="
                                                            editedItem.id && editedItem.changePassword ? 'mdi-eye-off' : 'mdi-eye'
                                                        "
                                                        :rules="[
                                                            (editedItem.id && editedItem.changePassword) || !editedItem.id
                                                                ? requiredValidator
                                                                : true
                                                        ]"
                                                        :readonly="/*editedItem.id && */ !editedItem.changePassword"
                                                        @click:append-inner="editedItem.changePassword = !editedItem.changePassword"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-autocomplete
                                                        v-model="editedItem.roles"
                                                        :items="roleItems"
                                                        item-value="to"
                                                        item-title="title"
                                                        multiple
                                                        clearable
                                                        variant="outlined"
                                                    />
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
                                        <v-btn color="success" variant="flat" :loading="loading" type="submit">
                                            {{ $t('Sauvegarder') }}
                                        </v-btn>
                                        <v-spacer></v-spacer>
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
                <template v-slot:item.actions="{ item }">
                    <div class="d-flex align-center">
                        <v-tooltip :text="$t('Modifier')">
                            <template v-slot:activator="{ props }">
                                <v-btn icon flat @click="editItem(item)" v-bind="props"
                                    ><PencilIcon stroke-width="1.5" size="20" class="text-primary"
                                /></v-btn>
                            </template>
                        </v-tooltip>
                        <v-tooltip :text="$t('Supprimer')">
                            <template v-slot:activator="{ props }">
                                <v-btn icon flat @click="deleteItem(item)" v-bind="props"
                                    ><TrashIcon stroke-width="1.5" size="20" class="text-error"
                                /></v-btn>
                            </template>
                        </v-tooltip>
                    </div>
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
