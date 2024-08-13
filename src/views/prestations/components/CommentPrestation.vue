<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import EditorMenubar from '@/components/forms/plugins/editor/EditorMenubar.vue';
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
const comment = ref(item.value.comment || '');
const editor = useEditor({
    extensions: [StarterKit],
    content: item.value.comment
});
const title = computed(() => `${t('Commentaire')}`);
function validateItemConfirm() {
    loading.value = true;
    store
        .addComment(item.value.id, editor.value?.getHTML())
        .then((response) => {
            item.value = response.data;
            dialog.value = false;
            snackbarStore.showSuccess(t('Commentaire ajouté avec succès'));
            emit('saved', response.data);
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
    <v-dialog v-model="dialog" max-width="1000px">
        <template v-slot:activator="{ props }">
            <v-btn density="compact" dark v-bind="props" variant="outlined" color="primary" @click="loading = false"
                >{{ !item.comment || item.comment.length == 0 ? $t('Ajouter') : $t('Modifier') }}
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="text-h5 text-center py-6">{{
                !item.comment || item.comment.length == 0 ? $t('Ajouter un commentaire') : $t('Modifier le commentaire')
            }}</v-card-title>
            <v-divider />
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <label>{{ $t('Commentaire') }}</label>
                        <EditorMenubar :editor="editor" />
                        <editor-content :editor="editor" />
                    </v-col>
                </v-row>
            </v-card-text>
            <v-divider />
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" variant="flat" dark @click="dialog = false">{{ $t('Annuler') }} </v-btn>
                <v-btn color="success" variant="flat" :loading="loading" dark @click="validateItemConfirm">
                    {{ $t('Enregistrer') }}
                </v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style scoped lang="scss"></style>
