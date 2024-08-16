import { defineStore } from 'pinia';

import axios from '@/utils/axios';
import type { AxiosResponse } from 'axios';
import { t } from '@/plugins/i18n';

export const useDemandStore = defineStore({
    id: 'Demands',
    state: () => ({
        statuses: {
            started: 0,
            validated: 1,
            processing: 2,
            closed: 3,
            cancelled: -1
        },
        statusesList: [
            { id: 0, label: t('Nouvelle') },
            { id: 1, label: t('Validé') },
            { id: 2, label: t('Terminé') },
            { id: -1, label: t('Annulé') }
        ],
        statistics: {
            total: 0,
            validated: 0,
            unvalidated: 0,
            cancelled: 0
        },
        demands: {
            data: [],
            loading: false,
            error: null
        }
    }),
    actions: {
        fetchStatistics(params: any) {
            return axios.get('/statistics/demands', { params }).then((response) => {
                if (response.data) {
                    this.statistics = response.data;
                }
            });
        },
        fetchStats(params: any) {
            return axios.get('/statistics/demands/stats', { params });
        },
        // 👉 Fetch users data
        fetchItems(params: any) {
            return axios.get('/demands', { params });
        },

        // 👉 Add User
        async addItem(userData: any) {
            return new Promise((resolve, reject) => {
                axios
                    .post('/demands', userData)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },

        // 👉 fetch single user
        fetchItem(id: string) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .get(`/demands/${id}`)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        // 👉 delete single user
        deleteItem(id: string) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .delete(`/demands/${id}`)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        // 👉 delete single user
        cancelItem(id: number) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .post(`/demands/cancel/${id}`)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        addComment(id: number, comment: any) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .post(`/demands/comment/${id}`, { comment: comment })
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        validateItem(id: number, data: any) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .post(`/demands/validate/${id}`, data)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        statusColor(status: number) {
            if (status == -1) {
                return '#FA896B';
            } else if (status == 1) {
                return '#1f9007';
            } else if (status == 2) {
                return '#5D87FF';
            } else {
                return '#FFAE1F';
            }
        },
        statusText(status: number) {
            if (status == -1) {
                return t('Annulé');
            } else if (status == 1) {
                return t('Validé');
            } else if (status == 2) {
                return t('Terminé');
            } else {
                return t('Nouvelle demande');
            }
        },
        getStatuses() {}
    }
});
