import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const user = ref({
        id: 0,
        name: '',
        lastMessage: '',
    })

    const setUser = (data) => {
        user.value.id = data.id
        user.value.name = data.name
        user.value.lastMessage = data.lastMessage
    }

    return {
        user,
        setUser
    }
})