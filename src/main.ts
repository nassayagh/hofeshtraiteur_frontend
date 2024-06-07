import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from './router';
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';
import VueTablerIcons from 'vue-tabler-icons';
import { fakeBackend } from '@/utils/helpers/fake-backend';
import 'vue3-carousel/dist/carousel.css';
//Mock Api data
import './_mockApis';

import Maska from 'maska';

// print
// import print from 'vue3-print-nb';
// Table
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
//i18
import i18n from '@/plugins/i18n';
import { createI18n } from 'vue-i18n';
import messages from '@/utils/locales/messages';
//ScrollTop
import VueScrollTo from 'vue-scrollto';
/*
const i18n = createI18n({
    locale: 'fr',
    messages: messages,
    silentTranslationWarn: true,
    silentFallbackWarn: true
});
*/
import { useSnackbar } from '@/stores/snackbar';
import Snackbar from '@/components/notifications/Snackbar.vue';

const app = createApp(App);
fakeBackend();
app.use(router);
app.component('EasyDataTable', Vue3EasyDataTable);
app.use(PerfectScrollbar);
app.use(createPinia());
app.use(VueTablerIcons);
// app.use(print);
app.use(i18n);
app.use(Maska);
app.use(VueApexCharts);

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

app.use(vuetify).mount('#app');
//ScrollTop Use
// app.use(VueScrollTo);
app.use(VueScrollTo, {
    duration: 1000,
    easing: 'ease'
});
