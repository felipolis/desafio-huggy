import { useUserStore } from '../stores/token';

export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/login') {
        return
    }

    const token = useUserStore().token
    if (!token.access_token) {
        return navigateTo('/login')
    }
})