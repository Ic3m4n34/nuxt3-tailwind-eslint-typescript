// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js',
          async: true,
        },
      ],
    },
  },
});
