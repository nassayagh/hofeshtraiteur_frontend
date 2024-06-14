<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { Form } from 'vee-validate';
import { t } from '@/plugins/i18n';
/*Social icons*/
import google from '@/assets/images/svgs/google-icon.svg';
import facebook from '@/assets/images/svgs/facebook-icon.svg';
import { router } from '@/router';

import type { VForm } from 'vuetify/components/VForm';
import Logo from '@/layouts/full/logo/Logo.vue';
const refForm = ref<VForm>();
const checkbox = ref(false);
const valid = ref(false);
const show1 = ref(false);
const loading = ref(false);
const password = ref(null);
const email = ref(null);
const passwordRules = ref([
    (v: string) => !!v || t('Le mot de passe est requis'),
    (v: string) => (v && v.length >= 8) || t('Le mot de passe doit comporter moins de 8 caractères')
]);
const emailRules = ref([(v: string) => !!v || t('L’e-mail est requis'), (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid']);

function validate(values: any, { setErrors }: any) {
    const authStore = useAuthStore();
    refForm.value?.validate().then(({ valid }) => {
        if (
            valid &&
            email.value != null &&
            password.value != null &&
            email.value.toString().length > 3 &&
            password.value.toString().length > 3
        ) {
            return authStore
                .login(email.value, password.value)
                .then((response) => {
                    loading.value = false;
                    if (response.data.error) {
                        setErrors({ apiError: response.data.message });
                        return;
                    }

                    // update pinia state
                    authStore.user = response.data;
                    // store user details and jwt in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(response.data));
                    // redirect to previous url or default to home page
                    router.push('/')/*.then(() => {
                        //window.location.reload();
                    })*/;
                })
                .catch((error) => setErrors({ apiError: error }))
                .then(() => {
                    loading.value = false;
                });
        } else {
            return setErrors({ apiError: t('Veuillez soumettre des valeurs valides') });
        }
    });
}
</script>

<template>
    <!--    <v-row class="d-flex mb-3">
        <v-col cols="6" sm="6" class="pr-2">
            <v-btn variant="outlined" size="large" class="border text-subtitle-1" block>
                <img :src="google" height="16" class="mr-2" alt="google" />
                <span class="d-sm-flex d-none mr-1">Sign in with</span>Google
            </v-btn>
        </v-col>
        <v-col cols="6" sm="6" class="pl-2">
            <v-btn variant="outlined" size="large" class="border text-subtitle-1" block>
                <img :src="facebook" width="25" height="25" class="mr-1" alt="facebook" />
                <span class="d-sm-flex d-none mr-1">Sign in with</span>FB
            </v-btn>
        </v-col>
    </v-row>-->

    <Form @submit="validate" v-slot="{ errors, isSubmitting }" ref="refForm" v-model="valid" class="mt-5">
        <v-label class="text-subtitle-1 font-weight-medium pb-2 text-lightText">{{ $t('E-mail') }}</v-label>
        <VTextField v-model="email" :rules="emailRules" class="mb-8" required hide-details="auto"></VTextField>
        <v-label class="text-subtitle-1 font-weight-medium pb-2 text-lightText">{{ $t('Mot de passe') }}</v-label>
        <VTextField v-model="password" :rules="passwordRules" required hide-details="auto" type="password" class="pwdInput"></VTextField>
        <div class="d-flex flex-wrap align-center my-3 ml-n2">
            <!--            <v-checkbox
                v-model="checkbox"
                :rules="[(v: any) => !!v || 'You must agree to continue!']"
                required
                hide-details
                color="primary"
            >
                <template v-slot:label class="">Remeber this Device</template>
            </v-checkbox>-->
            <div class="ml-sm-auto">
                <RouterLink to="" class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">{{
                    $t('Mot de passe oublié ?')
                }}</RouterLink>
            </div>
        </div>
        <v-btn size="large" :loading="isSubmitting" color="primary" :disabled="valid" block type="submit" flat>{{ $t('Connexion') }}</v-btn>
        <div v-if="errors.apiError" class="mt-2">
            <v-alert color="error">{{ errors.apiError }}</v-alert>
        </div>
    </Form>
</template>
