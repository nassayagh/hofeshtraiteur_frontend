import { defineStore } from 'pinia';

import axios from '@/utils/axios';
import type { AxiosResponse } from 'axios';

export const useEventTypeStore = defineStore({
    id: 'EventType',
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
            return axios.get('/event_types', { params });
        },

        // 👉 Add User
        async addItem(userData: any) {
            return new Promise((resolve, reject) => {
                axios
                    .post('/event_types', userData)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },

        // 👉 fetch single user
        fetchItem(id: string) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .get(`/event_types/${id}`)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        // 👉 delete single user
        deleteItem(id: string) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .delete(`/event_types/${id}`)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        }
    }
});
