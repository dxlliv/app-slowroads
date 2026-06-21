import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin({
  name: 'app-slowroads-playground-launch',
  dependsOn: ['desktop-app-slowroads-register'],
  setup(nuxtApp) {
    autoStartPlaygroundApps(nuxtApp, [
      { id: 'io.slowroads.app', entry: 'slowroads', windowModel: 'main' }
    ])
  },
})
