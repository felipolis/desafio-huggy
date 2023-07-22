import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const user = ref({
        id: 0,
        name: '',
        avatar: '',
        lastMessage: ''
    })

    const setUser = (data) => {
        user.value.id = data.id
        user.value.name = data.name
        user.value.lastMessage = data.lastMessage
        user.value.avatar = data.avatar
    }

    return {
        user,
        setUser
    }
})