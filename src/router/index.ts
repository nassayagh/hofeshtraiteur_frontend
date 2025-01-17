import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';
import { useAuthStore } from '@/stores/auth';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/authentication/Error.vue')
        },
        MainRoutes,
        AuthRoutes
    ]
});

router.beforeEach(async (to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const auth: any = useAuthStore();
    const user = auth.user || JSON.parse(localStorage.getItem('user'));

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (authRequired && !user) {
            auth.returnUrl = to.fullPath;
            return next('/login');
        } else {
            if (!user || !user.roles || !user.roles.includes(to.path)) {
                return next(/*'/auth/404'*/);
            } else {
                next();
            }
        }
    } else {
        if (!user || !user.roles || !user.roles.includes(to.path)) {
            return next(/*'/auth/404'*/);
        } else {
            next();
        }
    }
});
