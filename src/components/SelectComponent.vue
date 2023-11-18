<template lang="">
  <h1 class="green">{{ element }}</h1>
  <nav>
    <ul>
      <li @click="$emit('someEvent')">{{lang}}</li>
    </ul>
  </nav>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  element: String,
  lang: String 
})
</script>
