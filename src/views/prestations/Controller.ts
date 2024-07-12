import { defineStore } from 'pinia';

import axios from '@/utils/axios';
import type { AxiosResponse } from 'axios';
import { t } from '@/plugins/i18n';

export const usePrestationStore = defineStore({
    id: 'Prestations',
    state: () => ({
        prestations: {
            data: [],
            loading: false,
            error: null
        },
        statuses: {
            started: 0,
            validated: 1,
            processing: 2,
            closed: 3,
            cancelled: -1
        },
        statusesList: [
            /*{ id: 0, label: t('Validation') },*/
            { id: 1, label: t('Validée') },
            /*{ id: 2, label: t('En cours') },*/
            { id: 3, label: t('Clôturée') },
            { id: -1, label: t('Annulé') },
            { id: null, label: t('Tous') }
        ],
        statistics: {
            total: 0,
            validation: 0,
            validated: 0,
            processing: 0,
            closed: 0,
            cancelled: 0,
            paymentsLeft: 0,
            paymentsReceived: 0,
            totalPayments: 0
        }
    }),
    actions: {
        fetchYearStatistics(params: any) {
            return axios.get('/statistics/prestations', { params });
        },
        fetchStatistics(params: any) {
            return axios.get('/statistics/prestations', { params }).then((response) => {
                if (response.data) {
                    this.statistics = response.data;
                }
            });
        },
        // 👉 Fetch users data
        fetchItems(params: any) {
            return axios.get('/prestations', { params });
        },

        // 👉 Add User
        async addItem(userData: any) {
            return new Promise((resolve, reject) => {
                axios
                    .post('/prestations', userData)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },

        // 👉 fetch single user
        fetchItem(id: string) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .get(`/prestations/${id}`)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        // 👉 delete single user
        deleteItem(id: number) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .delete(`/prestations/${id}`)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        deleteService(id: number, serviceId: number) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .delete(`/prestations/services/${id}/${serviceId}`)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        deletePayment(id: number, serviceId: number) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .delete(`/prestations/payments/${id}/${serviceId}`)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        // 👉 delete single user
        cancelItem(id: number, comment: any) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .post(`/prestations/cancel/${id}`, { comment: comment })
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        addComment(id: number, comment: any) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .post(`/prestations/comment/${id}`, { comment: comment })
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        startItem(id: number) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .post(`/prestations/start/${id}`)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        closeItem(id: number) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .post(`/prestations/close/${id}`)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        validateItem(id: number, comment: string) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .post(`/prestations/validate/${id}`, { comment: comment })
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        changeHall(id: number, hall: number) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .post(`/prestations/changehall/${id}`, { hall: hall })
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        saveService(id: number, service: any) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .post(`/prestations/service/${id}`, service)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        savePayment(id: number, payment: any) {
            return new Promise<AxiosResponse>((resolve, reject) => {
                axios
                    .post(`/prestations/payment/${id}`, payment)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        statusColor(status: number) {
            if (status == -1) {
                return '#FA896B';
            } else if (status == 1) {
                return '#97e686';
            } else if (status == 3) {
                return '#1f9007';
            } else if (status == 2) {
                return '#5D87FF';
            } else {
                return '#FFAE1F';
            }
        },
        statusText(status: number) {
            if (status == this.statuses.cancelled) {
                return t('Annulé');
            } else if (status == this.statuses.validated) {
                return t('Validée');
            } else if (status == this.statuses.processing) {
                return t('En cours');
            } else if (status == this.statuses.closed) {
                return t('Clôturée');
            } else {
                return t('Validation');
            }
        },

        pageTitle(status: number) {
            if (status == this.statuses.cancelled) {
                return t('Prestations annulées');
            } else if (status == this.statuses.validated) {
                return t('Prestations validées');
            } else if (status == this.statuses.processing) {
                return t('Prestations en cours');
            } else if (status == this.statuses.closed) {
                return t('Prestations clôturées');
            } else {
                return t('Prestations en attente de validation');
            }
        },

        pageLink(status: number) {
            if (status == this.statuses.cancelled) {
                return '/prestations/list/cancelled';
            } else if (status == this.statuses.validated) {
                return '/prestations/list/validated';
            } else if (status == this.statuses.processing) {
                return '/prestations/list/processing';
            } else if (status == this.statuses.closed) {
                return '/prestations/list/closed';
            } else {
                return '/prestations/list/started';
            }
        }
    }
});
