<script setup lang="ts">
const props = defineProps<{
  window?: IWindowController
}>()
</script>

<template>
  <DesktopWindowIframe
    width="100%"
    height="100%"
    src="https://slowroads.io/"
    allow="autoplay"
    v-bind="$props"
  />
</template>
