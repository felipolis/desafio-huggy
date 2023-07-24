<script setup>
    import { useTokenStore } from '../stores/token';
    import { useChatStore } from '../stores/chat';
    import { ref } from 'vue'

    const config = useRuntimeConfig().app
    const chatStore = useChatStore()

    const chats = ref([])

    const selectChat = (chat) => {
        chatStore.setChat(chat)
    }

    const useRefreshToken = async () => {
        const token = useTokenStore().token
        if (!token.access_token) {
                navigateTo('/login')
        }
        
        if (token.expires_in > new Date().getTime()) {
            console.log('token is still valid')
        } else {
            console.log('token is expired')
            const response = await fetch('http://localhost:3000/api/oauth/access_token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'access-token': token.access_token,
                },
                body: JSON.stringify({
                    grant_type: 'refresh_token',
                    client_id: `${config.clientId}`,
                    client_secret: `${config.clientSecret}`,
                    refresh_token: `${token.refresh_token}`,
                })

            }).then((response) => response.json())

            useTokenStore().setToken(response)
        }
    }

    const fetchChats = async () => {
        const token = useTokenStore().token
        try {
            const response = await fetch('http://localhost:3000/api/chats', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token.access_token}`
                },
            })
            const data = await response.json()
            chats.value = data
        } catch (error) {
            console.error(error)
        }
    }
    
    const loading = ref(false)
    onMounted(async () => {
        try {
            loading.value = true
            await useRefreshToken()

            await fetchChats()

            loading.value = false

            
        } catch (error) {
            console.error(error)
        }
    })


</script>

<template>
    <div class="container" v-loading="loading">
        <div class="main">
            <!-- LEFT -->
            <Inbox :chats="chats" />

            <!-- RIGTH -->
            <div class="mensagens">
                <div v-if="chatStore.chat.id" class="msgs">
                    <!-- HEADER -->
                    <H3ader />

                    <!-- MESSAGES -->
                    <Messages />

                    <!-- Write -->
                    <Writing />

                </div>
                <div v-else class="selecione">
                    Selecione um usuário
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "@/assets/scss/global.scss";

    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
    }

    .main {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 80%;
        width: 80%;
    }

    .mensagens {
        min-width: 510px;
        height: 100%;
        display: flex;
        flex-direction: column;

        .msgs {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .selecione {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
            color: $fill-neutral-low-2;
        }

        

    }
</style>

