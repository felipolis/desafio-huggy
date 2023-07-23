<script setup>
    const config = useRuntimeConfig().app

    const image = ref(null)

    const adjustTextareaHeight = (event) => {
        const textarea = event.target
        textarea.style.height = 'auto'
        textarea.style.height = textarea.scrollHeight + 'px'
    };

    const setImage = (pics) => {
        if (pics === undefined) {
            return
        }

        if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
            const data = new FormData()
            data.append('file', pics)
            data.append('upload_preset', config.presetName)
            data.append('cloud_name', config.cloudName)

            //Envia a imagem ao cloudinary
            fetch(`${config.cloudinaryURL}`, {
                method: 'post',
                body: data
            })
                .then(res => res.json())
                .then(data => {
                    image.value = data.url.toString()
                    console.log(image.value)
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            console.log('Formato de arquivo não suportado')
        }
    }

    const cancelImage = () => {
        image.value = ''
    }

</script>

<template>
    <div class="writingSection">
        <div class="writingBar">
            <textarea 
                ref="textarea"
                placeholder="Escreva sua mensagem..."
                rows="1"
                @input="adjustTextareaHeight"
            ></textarea>
            <div class="footer" :class="{'borderT' : image}">
                <div class="image" v-if="image">
                    <img :src="image" alt="image" />
                </div>
                <div class="imageIcon" v-if="!image">
                    <input 
                        type="file" 
                        accept="image/*" 
                        @change="(e) => setImage(e.target.files[0])"
                    />
                </div>
                <div class="cancelIcon" 
                    v-else
                    @click="cancelImage"
                >
                </div>
            </div>
        </div>
        <button>
            Enviar
        </button>
    </div>
</template>

<style lang="scss">
    @import "@/assets/scss/global.scss";

    .borderT {
        border-top: 1px solid $border-neutral-1;
    }

    .writingSection {
        display: flex;
        flex-direction: column;
        background-color: $fill-neutral-low-0;
        box-shadow: 0px -1px 6px 0px #00000008;
        gap: 8px;
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 24px;
        padding-right: 24px;

        .writingBar {
            width: 100%;
            padding: 8px 8px 0px 8px;
            border-radius: 4px;
            border: 1px solid $border-neutral-1;

            textarea {
                width: 100%;
                height: auto;
                padding: 4px 12px 4px 12px;
                font-size: $body-1;
                color: $text-neutral-low-default;
                border: none;
                resize: none;


                &:focus {
                    outline: none;
                }

                &:active {
                    outline: none;
                }
            }

            .footer {
                width: 100%;
                min-height: 44px;
                padding: 8px 0px 8px 0px;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
                gap: 8px;

                .image {
                    width: 81px;
                    border-radius: 4px;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 4px;
                    }
                }

                .imageIcon {
                    width: 18px;
                    height: 18px;
                    background-image: url('../assets/icons/pic.svg');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    cursor: pointer !important;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    
                    input {
                        cursor: pointer !important;
                        opacity: 0; 
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                    }
                }

                .cancelIcon {
                    width: 18px;
                    height: 18px;
                    background-image: url('../assets/icons/cancel.svg');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    cursor: pointer !important;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }
            }
        }

        button {
            width: 100%;
            font-size: 16px;
            border-radius: 8px;
            color: #FFFFFF;
            background-color: $fill-success-4;
            padding-top: 12px;
            padding-bottom: 12px;
            padding-left: 24px;
            padding-right: 24px;
            cursor: pointer;
            border: none;

            &:hover {
                background-color: $fill-success-3;
                box-shadow: 0px 4px 8px 0px #00000029;
            }

            &:active {
                background-color: $fill-success-5;
            }

            &:disabled {
                background-color: $fill-neutral-low-4;
                color: $text-neutral-low-disabled;
                cursor: not-allowed;
            }
        }
    }
</style>