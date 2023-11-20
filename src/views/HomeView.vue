<script setup lang="ts">
import logo from "@/assets/yuzu_logoo.svg";
import { ref, watchEffect } from 'vue'
// import TheWelcome from '../components/TheWelcome.vue'
import { useLanguageStore } from '@/stores/language'

const language = useLanguageStore()
const API_URL = 'http://localhost:1337/api/homepage?locale='

const datas = ref(null)

watchEffect(async () => {
  const url = `${API_URL}${language.langs}`
  try {
    const response = await fetch(url)
    datas.value = await response.json()
  } catch (error) {
      console.error('Failed to fetch data:', error)
  }
})
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <h1><span class="d-block yellow">Yuzu</span>Gaming</h1>
    <h1 class="text-3xl font-bold underline text-green-700">
        Hello world!
    </h1>
    <template v-if="datas && datas.data">
        <p>{{ datas.data.attributes.text }}</p>
        <p>{{ datas.data.id }}</p>
    </template>
    <p>#Yuzurenext</p>

    <img :src="logo" alt="Yuzu Gaming" width="450" />

  </main>
</template>
