<script setup>
    import { useUserStore } from '../stores/token';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const userStore = useUserStore();

    onMounted(() => {
        if (!userStore.token.access_token) {
            router.push('/login');
        }
    })
</script>

<template>
    <div>Chats</div>
</template>

