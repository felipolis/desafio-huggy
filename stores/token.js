import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from "@vueuse/core";

export const useTokenStore = defineStore('token', () => {
    const token = useLocalStorage('token', {
        token_type: 'Bearer',
        expires_in: 0,
        access_token: '',
        refresh_token: ''
    })

    const setToken = (data) => {
        const dataAtual = new Date()
        const timestampEmMilisegundos = dataAtual.getTime()
        const expires_em_milisegundos = data.expires_in * 1000
        const timestampExpiração = timestampEmMilisegundos + expires_em_milisegundos
        const dataExpiração = new Date(timestampExpiração)

        token.value.token_type = data.token_type
        token.value.expires_in = timestampExpiração
        token.value.access_token = data.access_token
        token.value.refresh_token = data.refresh_token
    }

    return {
        token,
        setToken
    }
})