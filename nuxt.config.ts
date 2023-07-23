// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/global.scss'],
  modules: [
    '@pinia/nuxt',
    '@element-plus/nuxt'
  ],
  runtimeConfig: {
    app: {
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      redirectURL: process.env.REDIRECT_URL,
      cloudinaryURL: process.env.CLOUDINARY_URL,
      cloudName: process.env.CLOUD_NAME,
      presetName: process.env.PRESET_NAME,
    }
  },
})
