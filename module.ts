import {
  defineNuxtModule,
  createResolver,
  addComponentsDir,
  addPlugin,
} from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'owd-app-slowroads',
  },
  async setup() {
    const { resolve } = createResolver(import.meta.url)

    addComponentsDir({ path: resolve('./runtime/components') })
    addPlugin(resolve('./runtime/plugin'))
  },
})
