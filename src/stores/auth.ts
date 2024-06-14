import { defineStore } from 'pinia';
import { router } from '@/router';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';
import axios from '@/utils/axios';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        // @ts-ignore
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {
        async login(email: string, password: string) {
            return await axios.post(`/login`, { email, password });
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
});
