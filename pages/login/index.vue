
<script setup>
    import { useTokenStore } from '../../stores/token';
    const config = useRuntimeConfig().app
    const tokenStore = useTokenStore()

    const login = () => {
        navigateTo(`https://auth.huggy.app/oauth/authorize?scope=install_app%20read_agent_profile&response_type=code&redirect_uri=${config.redirectURL}&client_id=${config.clientId}`, { external: true })
    }
</script>

<template>
    <div class="container">
        <h1>Área de Login</h1>
        <p>Faça login para acessar nosso super-aplicativo</p>
        <button @click="login()">
            Fazer login com a Huggy
        </button>
    </div>
</template>

<style lang="scss">
    @import "@/assets/scss/global.scss";

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: $fill-neutral-low-0;

        h1 {
            font-size: $title-1;
            color: $text-neutral-low-cta;
            font-weight: 400;
            line-height: 46.8px;
        }

        p {
            font-size: $body-1;
            color: $text-neutral-low-default;
            font-weight: 400;
            margin-bottom: 3rem;
        }

        button {
            background-color: $fill-primary-4;
            border-radius: 8px;
            padding: 12px 24px;
            color: #FFFFFF;
            font-weight: 600;
            font-size: 16px;
            border: none;
            cursor: pointer;

            &:hover {
                background-color: $fill-primary-3;
            }

            &:active {
                background-color: $fill-primary-5;
            }
        }
    }
</style>
