<template>
  <div class="layout--default p-8">
    <!-- <ul class="flex flex-row space-x-4">
      <nuxt-link
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="inline-block"
      >
        {{ link.name }}
      </nuxt-link>
    </ul> -->
    <slot />
  </div>
</template>

<script setup lang="ts">
/* const links = ref([
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Other Page',
    path: '/other-page',
  },
]); */

</script>
