<template>
  <div class="">
    <h1>
      Homepage
    </h1>
  </div>
</template>

<script setup lang="ts">
const handleData = async () => {
  const articleData = await $fetch('/api/v1/article');

  const reader = articleData.body.getReader();
  const decoder = new TextDecoder('utf-8');

  const { done, value } = await reader.read();
  if (done) {
    console.log('release locked');
    return reader.releaseLock();
  }

  const chunk = decoder.decode(value, { stream: true });

  console.log('chunk', chunk);

  return handleData();
};

handleData();
</script>
