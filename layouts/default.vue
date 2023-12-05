<template>
  <div class="layout--default">
    <slot />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'My Page',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'a description',
    },
  ],
});

</script>
