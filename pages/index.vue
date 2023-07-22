<script setup>
    import { useTokenStore } from '../stores/token';

    const token = useTokenStore().token

    const useRefreshToken = async () => {
        
        if (token.expires_in > Date.now()) {
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
</template>

