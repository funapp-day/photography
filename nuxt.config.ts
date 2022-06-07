import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  css: [
    'vuetify/lib/styles/main.sass',
    '~/assets/styles/styles.less',
    '~/assets/fonts/Cafe24Classictype/styles.less'
  ],
  components: [
    { path: '@/components/atoms', prefix: 'Atom' },
    { path: '@/components/molecules', prefix: 'Molecule' },
    { path: '@/components/organisms', prefix: 'Organism' },
    { path: '@/components/templates', prefix: 'Template' }
  ],
  build: {
    transpile: ['vuetify']
  },
  modules: [
    '@pinia/nuxt'
  ]
});
