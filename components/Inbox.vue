<script setup>
    import { useChatStore } from '../stores/chat';

    const chatStore = useChatStore()

    const props = defineProps({
        chats: {
            type: Array,
            required: true
        }
    })

    const selectChat = (chat) => {
        chatStore.setChat(chat)
        console.log(chatStore.chat)
    }

</script>

<template>
    <div class="inboxSection">
        <div class="inboxTitle">
            <h1>Minhas Mensagens</h1>
        </div>
        <div class="cardList">

            <div 
                class="chatCard" 
                v-for="(chat, index) in chats" :key="index"
                @click="selectChat(chat)"
                :class="{'selected': chatStore.chat?.id === chat.id}"    
            >
                <img class="avatar" :src="chat.chatCustomer?.photo" alt="avatar" />
                <div class="messageInfo">
                    <div class="contactName">{{chat.chatCustomer?.name}}</div>
                    <div class="lastMessage">{{chat.lastMessage?.text}}</div>
                </div>
            </div>

        </div>

    </div>
</template>

<style lang="scss">
    @import "@/assets/scss/global.scss";
    
    .inboxSection {
        min-width: 300px;
        height: 100%;
        background-color: $fill-neutral-low-0;
        border: 1px solid $fill-neutral-low-2;
        padding-left: 8px;
        padding-right: 8px;

        ::-webkit-scrollbar {
            display: none;
        }
    }

    .inboxTitle {
        width: 100%;
        height: 64px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding-right: 16px;
        padding-left: 16px;
        border-bottom: 2px solid $fill-neutral-low-1;

        h1 {
            font-size: 20px;
            font-weight: 500;
            color: $text-neutral-low-cta;
        }
    }

    .selected {
        background-color: $fill-primary-0;

        .contactName {
            color: $text-neutral-low-cta !important;
        }
    }

    .cardList {
        width: 100%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 12px;
        overflow-y: scroll;
        padding: 8px 0px 8px 0px;

        .chatCard:hover {
            background-color: $fill-primary-0;
            box-shadow: 0px 2px 8px 0px #0000001F;
        }

        .chatCard:active {
            background-color: $fill-primary-1;
        }


        .chatCard {
            width: 100%;
            min-height: 86px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            border-radius: 4px;
            align-items: center;
            padding: 0px 8px 0px 8px;
            gap: 12px;
            cursor: pointer;

            .avatar {
                min-width: 52px;
                max-width: 52px;
                min-height: 52px;
                max-height: 52px;
                border-radius: 8px;
                border: 1px solid $border-neutral-1;
            }

            .messageInfo {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;

                .contactName {
                    font-size: $body-1;
                    font-weight: bold;
                    line-height: 25.6px;
                    color: $text-neutral-low-strong;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 204px;
                }

                .lastMessage {
                    font-size: $body-2;
                    font-weight: 400;
                    line-height: 25.2px;
                    color: $text-neutral-low-default;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 204px;
                }
            }
        }
    }
</style>