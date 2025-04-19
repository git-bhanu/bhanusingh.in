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
    '@hypernym/nuxt-gsap',
    ['@nuxtjs/google-fonts', {
      download: true,
      prefetch: true,
      families: {
        'Titillium Web': [ 400 ],
        'Space Mono': [ 400 ],
      },
    }]
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/reset.css" as *; @use "~/assets/css/general.scss" as *; @use "~/assets/css/partials/typography.scss" as *; @use "~/assets/css/partials/colors.scss" as *;'
        }
      }
    }
  },
  gsap: {
    composables: true,
    extraEases: {
      custom: true,
    }, extraPlugins: {
      scrollTrigger: true,
      observer: true
    },
  },
})