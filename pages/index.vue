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
            id: 3,
            name: 'Agostinho Carrara',
            avatar: 'https://s2-gshow.glbimg.com/19J9NXPOE9EvzcwcsxwUs_0uT4g=/0x0:1440x800/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2017/n/B/bEDK6CRByxaLqqPA3kog/20091021-a-grande-familia-ac-006-abre.jpg',
            lastMessage: '199,99'
        },
        {
            id: 4,
            name: 'Beiçola',
            avatar: 'https://www.metroworldnews.com.br/resizer/wOFdaIF0annpm50m3UQKdm6Bdyw=/1024x1024/filters:format(jpg):quality(70):focal(389x147:399x157)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/REPJOHSVXZBUNFB5EUN4A6WEZI.jpg',
            lastMessage: 'Precisamos ver dos fiado, tem muita gente nisso, sabe'
        },
        {
            id: 5,
            name: 'Agostinho Carrara',
            avatar: 'https://s2-gshow.glbimg.com/19J9NXPOE9EvzcwcsxwUs_0uT4g=/0x0:1440x800/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2017/n/B/bEDK6CRByxaLqqPA3kog/20091021-a-grande-familia-ac-006-abre.jpg',
            lastMessage: '199,99'
        },
        {
            id: 6,
            name: 'Beiçola',
            avatar: 'https://www.metroworldnews.com.br/resizer/wOFdaIF0annpm50m3UQKdm6Bdyw=/1024x1024/filters:format(jpg):quality(70):focal(389x147:399x157)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/REPJOHSVXZBUNFB5EUN4A6WEZI.jpg',
            lastMessage: 'Precisamos ver dos fiado, tem muita gente nisso, sabe'
        },
        {
            id: 7,
            name: 'Agostinho Carrara',
            avatar: 'https://s2-gshow.glbimg.com/19J9NXPOE9EvzcwcsxwUs_0uT4g=/0x0:1440x800/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2017/n/B/bEDK6CRByxaLqqPA3kog/20091021-a-grande-familia-ac-006-abre.jpg',
            lastMessage: '199,99'
        },
        {
            id: 8,
            name: 'Beiçola',
            avatar: 'https://www.metroworldnews.com.br/resizer/wOFdaIF0annpm50m3UQKdm6Bdyw=/1024x1024/filters:format(jpg):quality(70):focal(389x147:399x157)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/REPJOHSVXZBUNFB5EUN4A6WEZI.jpg',
            lastMessage: 'Precisamos ver dos fiado, tem muita gente nisso, sabe'
        },
        {
            id: 9,
            name: 'Agostinho Carrara',
            avatar: 'https://s2-gshow.glbimg.com/19J9NXPOE9EvzcwcsxwUs_0uT4g=/0x0:1440x800/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2017/n/B/bEDK6CRByxaLqqPA3kog/20091021-a-grande-familia-ac-006-abre.jpg',
            lastMessage: '199,99'
        },
        {
            id: 10,
            name: 'Beiçola',
            avatar: 'https://www.metroworldnews.com.br/resizer/wOFdaIF0annpm50m3UQKdm6Bdyw=/1024x1024/filters:format(jpg):quality(70):focal(389x147:399x157)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/REPJOHSVXZBUNFB5EUN4A6WEZI.jpg',
            lastMessage: 'Precisamos ver dos fiado, tem muita gente nisso, sabe'
        },
        {
            id: 11,
            name: 'Agostinho Carrara',
            avatar: 'https://s2-gshow.glbimg.com/19J9NXPOE9EvzcwcsxwUs_0uT4g=/0x0:1440x800/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2017/n/B/bEDK6CRByxaLqqPA3kog/20091021-a-grande-familia-ac-006-abre.jpg',
            lastMessage: '199,99'
        },
        {
            id: 12,
            name: 'Beiçola',
            avatar: 'https://www.metroworldnews.com.br/resizer/wOFdaIF0annpm50m3UQKdm6Bdyw=/1024x1024/filters:format(jpg):quality(70):focal(389x147:399x157)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/REPJOHSVXZBUNFB5EUN4A6WEZI.jpg',
            lastMessage: 'Precisamos ver dos fiado, tem muita gente nisso, sabe'
        },
        
    ])
    
    const userSore = useUserStore()

    const selectUser = (user) => {
        userSore.setUser(user)
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
            <Inbox :users="users" :selectUser="selectUser" />

            <!-- RIGTH -->
            <div class="mensagens">
                <div v-if="userSore.user.name !== ''">
                    <!-- HEADER -->
                    <H3ader />


                </div>
                <div v-else>
                    Selecione um usuário
                </div>
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

    .mensagens {
        min-width: 510px;
        height: 100%;
        display: flex;
        flex-direction: column;

        

    }
</style>

