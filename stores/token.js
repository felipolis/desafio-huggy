import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('token', () => {
    const token = useLocalStorage('token', {
        token_type: 'Bearer',
        expires_in: 0,
        access_token: '',
        refresh_token: ''
    })

    const setToken = (data) => {
        token.value.token_type = data.token_type
        token.value.expires_in = data.expires_in
        token.value.access_token = data.access_token
        token.value.refresh_token = data.refresh_token
    }

    return {
        token,
        setToken
    }
})