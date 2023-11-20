<template>
    <li role="presentation" class="mr-2" v-bind:class="[ activeTab === true ? '' : '' ]">
      <button @click="$emit('someEvent')" class="inline-block p-4 hover:border-b-2 rounded-t-lg hover:border-gray-300 dark:hover:text-gray-300" 
      v-bind:class="[ activeTab === true ? 'border-b-2 text-gray-300' : '' ]" id="profile-tab" data-tabs-target="#profile" 
      type="button" role="tab" aria-controls="profile" :ariaSelected="activeTab">{{ title }}</button>
  </li>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    title: String,
    tabNumber: Number,
    activeTab: Boolean,
  }>()
  </script>
