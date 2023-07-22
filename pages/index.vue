<script setup>
    import { useTokenStore } from '../stores/token';

    

    const useRefreshToken = async () => {
        const token = useTokenStore().token
        if (!token.access_token) {
                navigateTo('/login')
        }
        
        if (token.expires_in > new Date().getTime()) {
            console.log('token is still valid')
        } else {
            console.log('token is expired')
        }
    }


    onMounted(async () => {
        try {
            await useRefreshToken()
        } catch (error) {
            console.error(error)
        }
    })

</script>

<template>
    <div>Chats</div>
    <!-- INBOX -->

    <!-- HEADER -->

    <!-- CHAT -->

    <!-- WRITING -->
</template>

