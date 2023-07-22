<script setup>
    import { useUserStore } from '../stores/user';

    const userSore = useUserStore()

</script>

<template>
    <div class="headerSection">
        <div class="avatar">
            <img :src="userSore.user.avatar" alt="avatar" />
        </div>
        <div class="contactName">{{ userSore.user.name }}</div>
    </div>
</template>

<style lang="scss">
    @import "@/assets/scss/global.scss";
    .headerSection {
        width: 510px;
        height: 64px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding-right: 16px;
        padding-left: 16px;
        background-color: $fill-neutral-low-0;
        gap: 8px;

        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid $border-neutral-1;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .contactName {
            font-size: 16px;
            font-weight: 600;
            color: $text-low-strong;
            font-size: $body-1;
        }
    }
</style>