<style lang="scss">
  @import "header.scss";
</style>

<script>
import { ref } from 'vue'
import myLogoSrc from "@/assets/yuzu_logo.png";
import { useLanguageStore } from '@/stores/language'

import SelectComponent from '../SelectComponent.vue';
export default {
  name: 'HeaderComponent',
  props: {
    lang: String,
    ch: Object,
    style: Object
  },
  setup() {
    const isActive = ref(false)
    const langActive = ref(false)
    const locales = ['en', 'fr']

    const language = useLanguageStore()

    function changelang(paramm) {
      console.log("plplplpl");
      language.$patch({langs: paramm})
      console.log(language.langs);
    }
    return {
        myLogoSrc,
        language,
        changelang,
        locales,
        isActive,
        langActive
    };
  },
  components: {
    SelectComponent
  },
}
</script>

<template>
    <header>
        <img class="logo" :src="myLogoSrc" alt="my-logo"  width="50" />
          <div class="menu-bg" :class="{ fs: isActive }"></div>
          <div class="menu-burger" :class="{ fs: isActive }" @click="isActive = !isActive">
            <span v-if="!isActive">☰</span>
            <span v-else>✕</span>
          </div>
          <nav class="menu-items" :class="{fs: isActive }">
              <router-link to="/">Home</router-link>
              <router-link to="/about">About</router-link>
              <router-link to="/team">Team</router-link>
              <router-link to="/searchplayers">Players</router-link>
          </nav>

          <SelectComponent
          v-for="locale in locales" :key="locale"
          :lang="locale"
          @some-event="changelang(locale)"
          />
          <!-- <select>
            <option :value="locale" v-for="(locale, index) in locales" v-bind:key="index">
              {{locale}}
            </option>
          </select> -->

          <!-- <div class="dropdown-lang-wrapper"> 
            <span @click="langActive = !langActive">
              <slot></slot>
            </span>
            <div v-if="langActive" class="dropdown-content" :class="$attrs.class">
              {{ ch }}
            </div>
          </div> -->
      </header>
      <!-- <p :class="{ active: isActive }">Element active</p>
      <p v-if="isActive">ok !</p>
      <p v-else>not ok!</p> -->
</template>
