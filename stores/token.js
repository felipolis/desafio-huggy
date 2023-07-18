import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('token', () => {
    const token = ref({
        token_type: 'Bearer',
        expires_in: 0,
        access_token: '',
        refresh_token: ''
    })

    const setToken = (data) => {
        token.value = data
    }

    return {
        token,
        setToken
    }
})