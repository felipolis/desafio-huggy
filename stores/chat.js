import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', () => {
    const chat = ref({})

    const setChat = (data) => {
        chat.value = data
    }

    return {
        chat,
        setChat
    }
})