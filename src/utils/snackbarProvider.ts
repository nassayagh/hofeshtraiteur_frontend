import { createApp } from 'vue';
import App from '@/App.vue';
import { useSnackbar } from '@/stores/snackbar';
import Snackbar from '@/components/notifications/Snackbar.vue'; // Import the Snackbar component

const app = createApp(App);

const snackbarStore = useSnackbar();

app.component('Snackbar', Snackbar); // Make Snackbar component globally available

app.mixin({
    // Create a global mixin to access the snackbar function
    methods: {
        showSnackbar(message: string, color: string = 'success') {
            snackbarStore.showSnackbar(message, color);
        }
    }
});

app.mount('#app');
