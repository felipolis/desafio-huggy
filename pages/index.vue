<script setup>
    import { useTokenStore } from '../stores/token';
    import { useUserStore } from '../stores/user';
    import { ref } from 'vue'

    const users = ref([
        {
            id: 1,
            name: 'Agostinho Carrara',
            avatar: 'https://s2-gshow.glbimg.com/19J9NXPOE9EvzcwcsxwUs_0uT4g=/0x0:1440x800/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2017/n/B/bEDK6CRByxaLqqPA3kog/20091021-a-grande-familia-ac-006-abre.jpg',
            lastMessage: '199,99'
        },
        {
            id: 2,
            name: 'Beiçola',
            avatar: 'https://www.metroworldnews.com.br/resizer/wOFdaIF0annpm50m3UQKdm6Bdyw=/1024x1024/filters:format(jpg):quality(70):focal(389x147:399x157)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/REPJOHSVXZBUNFB5EUN4A6WEZI.jpg',
            lastMessage: 'Precisamos ver dos fiado, tem muita gente nisso, sabe'
        },
        {
            id: 1,
            name: 'Agostinho Carrara',
            avatar: 'https://s2-gshow.glbimg.com/19J9NXPOE9EvzcwcsxwUs_0uT4g=/0x0:1440x800/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2017/n/B/bEDK6CRByxaLqqPA3kog/20091021-a-grande-familia-ac-006-abre.jpg',
            lastMessage: '199,99'
        },
        {
            id: 2,
            name: 'Beiçola',
            avatar: 'https://www.metroworldnews.com.br/resizer/wOFdaIF0annpm50m3UQKdm6Bdyw=/1024x1024/filters:format(jpg):quality(70):focal(389x147:399x157)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/REPJOHSVXZBUNFB5EUN4A6WEZI.jpg',
            lastMessage: 'Precisamos ver dos fiado, tem muita gente nisso, sabe'
        },
        {
            id: 1,
            name: 'Agostinho Carrara',
            avatar: 'https://s2-gshow.glbimg.com/19J9NXPOE9EvzcwcsxwUs_0uT4g=/0x0:1440x800/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2017/n/B/bEDK6CRByxaLqqPA3kog/20091021-a-grande-familia-ac-006-abre.jpg',
            lastMessage: '199,99'
        },
        {
            id: 2,
            name: 'Beiçola',
            avatar: 'https://www.metroworldnews.com.br/resizer/wOFdaIF0annpm50m3UQKdm6Bdyw=/1024x1024/filters:format(jpg):quality(70):focal(389x147:399x157)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/REPJOHSVXZBUNFB5EUN4A6WEZI.jpg',
            lastMessage: 'Precisamos ver dos fiado, tem muita gente nisso, sabe'
        },
        {
            id: 1,
            name: 'Agostinho Carrara',
            avatar: 'https://s2-gshow.glbimg.com/19J9NXPOE9EvzcwcsxwUs_0uT4g=/0x0:1440x800/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2017/n/B/bEDK6CRByxaLqqPA3kog/20091021-a-grande-familia-ac-006-abre.jpg',
            lastMessage: '199,99'
        },
        {
            id: 2,
            name: 'Beiçola',
            avatar: 'https://www.metroworldnews.com.br/resizer/wOFdaIF0annpm50m3UQKdm6Bdyw=/1024x1024/filters:format(jpg):quality(70):focal(389x147:399x157)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/REPJOHSVXZBUNFB5EUN4A6WEZI.jpg',
            lastMessage: 'Precisamos ver dos fiado, tem muita gente nisso, sabe'
        },
        {
            id: 1,
            name: 'Agostinho Carrara',
            avatar: 'https://s2-gshow.glbimg.com/19J9NXPOE9EvzcwcsxwUs_0uT4g=/0x0:1440x800/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2017/n/B/bEDK6CRByxaLqqPA3kog/20091021-a-grande-familia-ac-006-abre.jpg',
            lastMessage: '199,99'
        },
        {
            id: 2,
            name: 'Beiçola',
            avatar: 'https://www.metroworldnews.com.br/resizer/wOFdaIF0annpm50m3UQKdm6Bdyw=/1024x1024/filters:format(jpg):quality(70):focal(389x147:399x157)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/REPJOHSVXZBUNFB5EUN4A6WEZI.jpg',
            lastMessage: 'Precisamos ver dos fiado, tem muita gente nisso, sabe'
        },
        {
            id: 1,
            name: 'Agostinho Carrara',
            avatar: 'https://s2-gshow.glbimg.com/19J9NXPOE9EvzcwcsxwUs_0uT4g=/0x0:1440x800/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2017/n/B/bEDK6CRByxaLqqPA3kog/20091021-a-grande-familia-ac-006-abre.jpg',
            lastMessage: '199,99'
        },
        {
            id: 2,
            name: 'Beiçola',
            avatar: 'https://www.metroworldnews.com.br/resizer/wOFdaIF0annpm50m3UQKdm6Bdyw=/1024x1024/filters:format(jpg):quality(70):focal(389x147:399x157)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/REPJOHSVXZBUNFB5EUN4A6WEZI.jpg',
            lastMessage: 'Precisamos ver dos fiado, tem muita gente nisso, sabe'
        },
        
    ])
    
    const userSore = useUserStore()
    const selectedUser = ref(null)

    const selectUser = (user) => {
        selectedUser.value = user
        userSore.setUser(user)
        console.log(userSore.user)
    }

    const useRefreshToken = async () => {
        const token = useTokenStore().token
        if (!token.access_token) {
                navigateTo('/login')
        }
        
        if (token.expires_in > new Date().getTime()) {
            console.log('token is still valid')
        } else {
            console.log('token is expired')
        }
    }


    onMounted(async () => {
        try {
            await useRefreshToken()
        } catch (error) {
            console.error(error)
        }
    })

</script>

<template>
    <div class="container">
        <div class="main">
            <!-- LEFT -->
            <div class="inboxSection">
                <div class="inboxTitle">
                    <h1>Minhas Mensagens</h1>
                </div>
                <div class="cardList">

                    <div 
                        class="chatCard" 
                        v-for="(user, index) in users" :key="index"
                        @click="selectUser(user)"
                        :class="{'selected': selectedUser === user}"    
                    >
                        <img class="avatar" :src="user.avatar" alt="avatar" />
                        <div class="messageInfo">
                            <div class="contactName">{{user.name}}</div>
                            <div class="lastMessage">{{user.lastMessage}}</div>
                        </div>
                    </div>

                </div>

            </div>
            <!-- RIGTH -->
            <div class="mensagens">

            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "@/assets/scss/global.scss";

    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
    }

    .main {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 80%;
        width: 80%;
    }

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
        height: 10%;
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

        .selected {
            background-color: $fill-primary-0;
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
                min-height: 52px;
                border-radius: 8px;
                border: 1px solid $border-neutral-1;
            }

            .messageInfo {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;

                .contactName {
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 25.6px;
                    color: $text-neutral-low-cta;
                }

                .lastMessage {
                    font-size: 14px;
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



    .mensagens {
        min-width: 510px;
        height: 100%;
        background-color: blue;
    }
</style>

