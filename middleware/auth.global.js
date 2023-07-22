import { useTokenStore } from '../stores/token';

export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/login' || to.path === '/callback') {
        return
    }

    /* const token = useTokenStore().token
    console.log(token)
    if (token.access_token) {
        console.log('no token')
        return navigateTo('/login')
    } */
})