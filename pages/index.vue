<template>
  <div class="">
    <div class="mb-8">
      <input
        v-model="topic"
        class="border border-gray-400 py-2 px-4 rounded-md mr-4"
        type="text"
      />

      <select
        v-model="selectedOption"
        class="border border-gray-400 p-2 rounded-md mr-4"
      >
        <option value="lockerer">
          Lockerer
        </option>
        <option value="professioneller">
          Professioneller
        </option>
      </select>

      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        @click="handleData"
      >
        Fetch
      </button>
    </div>

    <div class="my-4">
      <span class="font-bold">Wörter:</span> {{ wordCount }}
    </div>

    <div class="prose mb-8">
      <h1>
        Thema: {{ topic }}
      </h1>
    </div>

    <div class="flex flex-row space-x-4">
      <textarea
        v-model="text"
        class="w-1/2 border-2 border-gray-600 rounded-md p-2"
      />
      <div
        class="prose w-1/2 border-2 border-green-600 rounded-md p-2 max-h-screen h-full overflow-y-scroll"
        v-html="rendered"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt({
  html: true,
});

const getWordCount = (str: string) => str.split(' ')
  .filter((n) => n !== '')
  .length;

const topic = ref('Der richtige Grill');
const selectedOption = ref('lockerer');

const text = ref('');

const handleData = async () => {
  text.value = 'Loading...';
  const textFromAPI = await $fetch<string>('/api/v1/article', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      topic: topic.value,
      tone: selectedOption.value,
    }),
  });

  text.value = textFromAPI;
};

const rendered = computed(() => markdown.render(text.value));

const wordCount = computed(() => getWordCount(text.value));

useHead({
  title: 'ArticleFy',
  meta: [
    {
      name: 'description',
      content: 'This is ArticleFy',
    },
  ],
});

</script>
