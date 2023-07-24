import { useTokenStore } from '../stores/token';

export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/login' || to.path === '/callback') {
        return 
    }

})