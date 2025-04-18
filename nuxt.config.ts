// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    ['@nuxtjs/google-fonts', {
      download: true,
      prefetch: true,
      families: {
        'Titillium Web': [ 400 ],
        'Space Mono': [ 400 ],
      },
    }]
  ],
  css: ['~/assets/css/general.scss',
    '~/assets/css/partials/_colors.scss',
    '~/assets/css/partials/_typography.scss'
  ],
})