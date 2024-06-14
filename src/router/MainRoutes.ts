import { t } from '@/plugins/i18n';

const MainRoutes = {
    path: '/main',
    meta: {
        requiresAuth: true
    },
    redirect: '/main',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            path: '/',
            component: () => import('@/views/dashboards/Dashboard.vue')
        },
        {
            name: t('Gestion des devis'),
            path: '/demands',
            component: () => import('@/views/demands/List.vue')
        },
        {
            name: t('Devis'),
            path: '/demands/:id',
            component: () => import('@/views/demands/View.vue')
        },
        {
            name: t('Clients'),
            path: '/customers',
            component: () => import('@/views/customers/List.vue')
        },
        {
            name: t('Client'),
            path: '/customers/:id',
            component: () => import('@/views/customers/View.vue')
        },
        {
            name: t('Gestion des services'),
            path: '/services',
            component: () => import('@/views/services/List.vue')
        },
        {
            name: t('Service'),
            path: '/services/:id',
            component: () => import('@/views/services/List.vue')
        },
        {
            name: t('Gestions des événements'),
            path: '/event_types',
            component: () => import('@/views/eventTypes/List.vue')
        },
        {
            name: t('Modes de paiement'),
            path: '/payment_methods',
            component: () => import('@/views/paymentMethods/List.vue')
        },
        {
            name: t('Paiements'),
            path: '/payments',
            component: () => import('@/views/payments/List.vue')
        },
        {
            name: t('Gestions des admins'),
            path: '/admins',
            component: () => import('@/views/admins/AdminsTable.vue')
        },

        {
            name: t('Gestions des prestations'),
            path: '/prestations/',
            component: () => import('@/views/prestations/List.vue'),
            children: [
                {
                    name: t('Prestations'),
                    path: 'list/:status',
                    component: () => import('@/views/prestations/List.vue')
                },
                {
                    path: '/',
                    redirect: '/dashboards/analytical'
                }
            ]
        },
        {
            name: t('Prestation'),
            path: '/prestations/:id',
            component: () => import('@/views/prestations/View.vue')
        },

    ]
};

export default MainRoutes;
