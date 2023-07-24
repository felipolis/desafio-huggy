<script setup>
    import { useChatStore } from '../stores/chat';
    import { useTokenStore } from '../stores/token';

    const token = useTokenStore().token
    const chatStore = useChatStore()

    const page = ref(0)

    const loading = ref(false)

    watch(async () => chatStore.chat, async (newValue, oldValue) => {
        page.value = 0;
        await fetchMessages()
        const messageSection = document.querySelector('.messageSection')    
        messageSection.scrollTop = messageSection.scrollHeight
    })

    const fetchMessages = async () => {
        const id = useChatStore().chat.id

        try {
            const response = await fetch(`http://localhost:3000/api/chats/${id}/messages?page=${page.value}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'Authorization': `Bearer ${token.access_token}`
            }
            })

            const data = await response.json()

            chatStore.setMessages(data.reverse())

        } catch (error) {
            console.error(error)
        }

    }

    /* wahcer do scroll. caso esteja no topo, exiba um log avisando */
    const scrollWatcher = async () => {
        const messageSection = document.querySelector('.messageSection')
        const scrollHeight = messageSection.scrollHeight
        const scrollTop = messageSection.scrollTop
        const clientHeight = messageSection.clientHeight

        if (scrollTop === 0) {

            page.value += 1

            const id = useChatStore().chat.id

            try {
                const response = await fetch(`http://localhost:3000/api/chats/${id}/messages?page=${page.value}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token.access_token}`
                }
                })

                const data = await response.json()
                chatStore.addMessagesFirst(data.reverse())

            } catch (error) {
                console.error(error)
            }

        }
    }
    

    const getMetadata = (message) => {
        const date = new Date(message.sendAt)
        
        const hora = date.getHours()
        const minuto = date.getMinutes()

        const horaFormatada = hora < 10 ? `0${hora}` : hora
        const minutoFormatado = minuto < 10 ? `0${minuto}` : minuto

        return `${horaFormatada}:${minutoFormatado}`
    }

    onMounted(async () => {
        loading.value = true
        await fetchMessages()

        const messageSection = document.querySelector('.messageSection')    
        messageSection.scrollTop = messageSection.scrollHeight

        messageSection.addEventListener('scroll', scrollWatcher)

        loading.value = false

    })

    onUnmounted(() => {
        const messageSection = document.querySelector('.messageSection')    
        messageSection.removeEventListener('scroll', scrollWatcher)
    })

</script>

<template>
    <div class="messageSection" v-loading="loading">
        <div 
            :class="{'contactMessageContainer': message.sender?.id === message.chat?.customer?.id, 'userMessageContainer': message.sender?.id !== message.chat?.customer?.id}"
            v-for="message in chatStore.messages"
            :key="message.id"
        >
            <div class="message">
                <img 
                    v-if="message.type === 'image'" 
                    :src="message.file" alt="img"
                    class="image"
                >
                <div class="text">
                    {{ message.text }}
                </div>
            </div>
            <div class="metadata">
                {{ getMetadata(message) }}
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "@/assets/scss/global.scss";

    ::-webkit-scrollbar {
            display: none;
    }

    .messageSection {
        min-width: 510px;
        max-width: 510px;
        /* max-height: calc(735.19px - 64px); */
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: $fill-neutral-low-1;
        padding-top: 24px;
        padding-bottom: 24px;
        padding-left: 16px;
        padding-right: 16px;
        overflow-y: scroll;
        
        .contactMessageContainer {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-top: 8px;
            padding-bottom: 8px;
            padding-right: 16px;

            .message {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                background-color: $fill-neutral-low-0;
                color: $text-neutral-low-strong;
                border: 1px solid $border-neutral-2;
                border-radius: 6px 6px 6px 2px;
                padding-top: 14px;
                padding-bottom: 14px;
                padding-left: 20px;
                padding-right: 20px;

                .text {
                    font-size: $body-1;
                    text-align: left;
                }

                .image {
                    width: 280px;
                    border-radius: 4px;
                }


            }

            .metadata {
                color: $text-neutral-low-strong;
                font-size: $caption-1;
                text-align: left;
            }
        }

        .userMessageContainer {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            padding-top: 8px;
            padding-bottom: 8px;
            padding-left: 16px;

            .message {
                background-color: $fill-primary-3;
                color: $text-neutral-high-strong;
                border: 1px solid $border-primary-1;
                border-radius: 6px 6px 2px 6px;
                padding: 14px 20px 14px 20px;
                font-size: $body-1;
                text-align: left;

                .text {
                    font-size: $body-1;
                    text-align: left;
                }

                .image {
                    width: 280px;
                    border-radius: 4px;
                }

            }

            .metadata {
                color: $text-neutral-low-strong;
                font-size: $caption-1;
                text-align: right;
            }
        }
    }
</style>