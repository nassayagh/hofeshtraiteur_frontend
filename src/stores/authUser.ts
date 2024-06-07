import { defineStore } from 'pinia';

import axios from '@/utils/axios';
import type { AxiosResponse } from 'axios';

export const useUsersStore = defineStore({
    id: 'Authuser',
    state: () => ({
        users: {
            data: [],
            loading: false,
            error: null
        }
    }),
    actions: {
        async getAll() {
            this.users.loading = true;
            axios
                .get('/users')
                .then((response) => (this.users.data = response.data))
                .catch((error) => (this.users.error = error));
        },
        // 👉 Fetch users data
        fetchUsers(params: any) {
            return axios.get('/users', { params });
        },

        // 👉 Add User
        async addUser(userData: any) {
            return new Promise((resolve, reject) => {
                axios
                    .post('/users', userData)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },

        // 👉 fetch single user
        fetchUser(id: string) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .get(`/users/${id}`)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        // 👉 delete single user
        deleteUser(id: string) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .delete(`/users/${id}`)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        }
    }
});
