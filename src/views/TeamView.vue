<template>
  <main>
    <!-- <h1>Team</h1> -->
    <div v-if="error">
      {{ error }}
    </div>

    <div class="teamContainer" v-else>

      <div v-for="player in players" :key="player.id" class="article-card">
        <router-link :to="{ name: 'player', params: { name: player.attributes.name }}">
        <div class="content">
          <figure>
            <img :src="getImage(player.attributes.photo.data.attributes.formats.small.url)" alt="Mountains">

            <span class="title">{{ player.attributes.name }}</span>
            <figcaption>
              <img class="img-full" :src="image" />
            </figcaption>
          </figure>
        </div>
      </router-link>
      </div>

      <!-- <div v-for="player in players" :key="player.id" class="article-card">
        <div class="content">
            <router-link :to="{ name: 'player', params: { name: player.attributes.name }}" class="title">{{ player.attributes.name }}</router-link>
        </div>
        <img :src="getImage(player.attributes.photo.data.attributes.formats.small.url)" />
      </div> -->
    </div>
  </main>

  <router-view v-slot="{ Component }">
    <!-- *** A REGARDER POUR LES TRANSITIONS ! https://www.youtube.com/watch?v=pG5pwDGc3D4 *** -->
    <transition name="fade" mode="out-in">
      <Component :is="Component" />
    </transition>
</router-view>
</template>

<script setup lang="ts">
import axios from 'axios'
import image from "@/assets/sf6-logo.png"
import { ref } from 'vue'

const players = ref([]);
const error = ref('')

function getImage(imagePath) {
  const baseURL = 'http://localhost:1337';
  return baseURL + imagePath;
}

async function getMoviesData() {
  try {
    const response = await axios.get('http://localhost:1337/api/players?populate=*')
    players.value = response.data.data
  } catch (error) {
    this.error = error;
  }
}

getMoviesData()

</script>
