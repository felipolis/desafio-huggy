import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', () => {
    const chat = ref({})
    const messages = ref([])

    const setChat = (data) => {
        chat.value = data
    }

    const setMessages = (data) => {
        messages.value = data
    }

    const addMessage = (data) => {
        messages.value.push(data)
    }

    const addMessagesFirst = (data) => {
        // concatena o array data com o array messages
        messages.value = data.concat(messages.value)
    }

    return {
        chat,
        setChat,
        messages,
        setMessages,
        addMessage,
        addMessagesFirst
    }
})