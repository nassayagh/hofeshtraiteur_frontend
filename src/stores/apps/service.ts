import { defineStore } from 'pinia';

import axios from '@/utils/axios';
import type { AxiosResponse } from 'axios';

export const useServiceStore = defineStore({
    id: 'Services',
    state: () => ({
        users: {
            data: [],
            loading: false,
            error: null
        }
    }),
    actions: {
        // 👉 Fetch users data
        fetchItems(params: any) {
            return axios.get('/services', { params });
        },

        // 👉 Add User
        async addItem(userData: any) {
            return new Promise((resolve, reject) => {
                axios
                    .post('/services', userData)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },

        // 👉 fetch single user
        fetchItem(id: string) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .get(`/services/${id}`)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        // 👉 delete single user
        deleteItem(id: string) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .delete(`/services/${id}`)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        }
    }
});
