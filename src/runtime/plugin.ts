import { defineNuxtPlugin } from 'nuxt/app'
import { defineDesktopApp } from '@owdproject/core/kit/defineDesktopApp'
import configAppSlowroads from './app.config'

export default defineNuxtPlugin({
  name: 'desktop-app-slowroads-register',
  async setup() {
    if (import.meta.server) return
    await defineDesktopApp(configAppSlowroads)
  },
})
