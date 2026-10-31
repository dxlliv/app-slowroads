import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  theme: '@owdproject/nuxt-theme-paper',
  apps: ['@owdproject/nuxt-app-slowroads'],
  modules: [],
  systemBar: {
    enabled: true,
    startButton: true,
  },
})
