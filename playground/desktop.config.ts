import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  theme: '@owdproject/theme-nuxt-nova',
  apps: ['@owdproject/app-slowroads'],
  modules: [],
  systemBar: {
    enabled: true,
    startButton: true,
  },
})
