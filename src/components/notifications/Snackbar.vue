<template>
    <v-snackbar v-bind:model="show" :color="color" :timeout="timeout">
        <template v-slot:default>
            <div>{{ message }}</div>
            <v-btn text x-large @click="dismiss"> Close </v-btn>
        </template>
    </v-snackbar>
</template>

<script setup lang="ts">
import { useSnackbar } from '@/stores/snackbar';

interface SnackbarProps {
    show: boolean;
    color?: string;
    message: string;
    timeout?: number;
}

const snackbarStore = useSnackbar();
const dismiss = () => snackbarStore.dismissSnackbar();

const props: SnackbarProps = defineProps<{
    show: boolean;
    color?: string;
    message: string;
    timeout?: number;
}>();
</script>
