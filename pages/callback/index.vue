<script setup>
    import { useTokenStore } from '../../stores/token';

    const config = useRuntimeConfig().app

    const tokenStore = useTokenStore()


    const fetchToken = async () => {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');

            const response = await fetch('http://localhost:3000/api/oauth/access_token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    grant_type: 'authorization_code',
                    redirect_uri: `${config.redirectURL}`,
                    client_id: `${config.clientId}`,
                    client_secret: `${config.clientSecret}`,
                    code: `${code}`,
                })

            }).then((response) => response.json())

            return response

        } catch (error) {
            throw new Error(error)
        }
    } 

    onMounted(async () => {
        try {
            const token = await fetchToken()
            tokenStore.setToken(token)
            console.log(token)
        } catch (error) {
            console.error(error)
        }
    })


    
</script>

<template>
    Callback
</template>