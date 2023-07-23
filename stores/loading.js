import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
    const inboxLoading = ref(false)
    const chatLoading = ref(false)

    const setInboxLoading = (value) => {
        inboxLoading.value = value
    }

    const setChatLoading = (value) => {
        chatLoading.value = value
    }

    return {
        inboxLoading,
        chatLoading,
        setInboxLoading,
        setChatLoading
    }
})