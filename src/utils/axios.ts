/**
 * axios setup to use mock service
 */

import axios from 'axios';
import { router } from '@/router';
import { useAuthStore } from '@/stores/auth';

const axiosServices = axios.create({
    baseURL: import.meta.env.VITE_APP_API || '',
    withCredentials: true,
    withXSRFToken: true,
    'Access-Control-Allow-Origin': true,
    'X-Requested-With': 'XMLHttpRequest',


    // You can add your headers here
    // ================================
    // baseURL: 'https://some-domain.com/api/',
    // timeout: 1000,
     headers: {
        'Access-Control-Allow-Origin': true,
         'X-Requested-With': 'XMLHttpRequest',
         'x-xsrf-token': true,
         'credentials': true,
     }
});
axiosServices.get(`${import.meta.env.VITE_APP_BASE_URL}/sanctum/csrf-cookie`).then((response) => {
    //
});
// ℹ️ Add request interceptor to send the authorization header on each subsequent request after login
axiosServices.interceptors.request.use((config) => {
    // Retrieve token from localStorage

    config.headers = config.headers || {
        withCredentials: true,
        withXSRFToken: true
    };
    const { user } = useAuthStore();

    if (import.meta.env.DEV) {
        const isLoggedIn = !!user?.token;

        if (isLoggedIn) {
            const token = user.token;
            if (token) {
                // Set authorization header
                // ℹ️ JSON.parse will convert token to string
                config.headers.Authorization = token ? `Bearer ${token}` : '';
            }
        }
    }

    // console.log(config)
    config.withCredentials = true;
    config.withXSRFToken = true;
    config.headers.common = config.headers.common || [];
    config.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    config.headers.common['Access-Control-Allow-Origin'] = true;
    config.headers['Access-Control-Allow-Origin'] = true;

    return config;
});
axiosServices.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // localStorage.removeItem('user');
            router.push('/login');
        }

        return Promise.reject(error);
    }
);

export default axiosServices;
