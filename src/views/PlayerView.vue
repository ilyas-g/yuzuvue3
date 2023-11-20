<template>
  <main>
    <div v-if="fetchError">Oops! Error encountered: {{ fetchError.message }}</div>
    <div v-else-if="fetchData">
      <div v-for="data in fetchData.data" :key="data.id" class="playerContainer">
        <div>
          <div class="player">
            <h1 class="player-title">{{ data.attributes.name }} {{ data.attributes.game.data.attributes.name }}</h1> 
          </div>
          <div class="player-profile">
            <div class="player-card">
              <img :src="getImage(data.attributes.photo.data.attributes.formats.small.url)" />
            </div>
            <div class="okbro">
              <div>
                <img :src="image" />
              </div>
            </div>
            <ul class="socials-aside socials-aside socials-aside_ready">
              <a v-if="data.attributes.twitter !== null" :href="data.attributes.twitter" target="_blank" :title="data.attributes.name + ' Twitter'" aria-label="Twitter" class="icon-twitter"></a>
              <a v-if="data.attributes.instagram !== null" :href="data.attributes.instagram" target="_blank" title="" aria-label="Instagram" class="icon-instagram"></a>
              <a v-if="data.attributes.twitch !== null" :href="data.attributes.twitch" target="_blank" title="" aria-label="Twitch" class="icon-twitch1"></a>
            </ul>
          </div>
        </div>

        <div>
          <h2 class="text-center text-uppercase"><i class="icon-medaille"></i>Palmares</h2>
          <Charts :player-slug="data.attributes.idStartGG" />
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import { useFetch } from '../utils/fetch.js'
import Charts from '../components/Charts.vue'

import image from "@/assets/ggst-logo.png"

    // const router = useRouter()
    const route = useRoute()
    const players = ref([])
    const { fetchData, fetchError } = useFetch(`http://localhost:1337/api/players?populate=*&filters[name][$eq]=${route.params.name}`)

    watch(fetchData, () => {
      console.log(route.params.name);
    })

    function getImage(imagePath: string) {
      const baseURL = 'http://localhost:1337';
      return baseURL + imagePath;
    }

</script>

<!-- <style lang="scss">
.playerContainer {
  @media screen and (min-width: $breakpoint-lg) {
    display: flex;
    justify-content: space-around;
    padding-block: min(1vh, 10rem);
  }

  h2 {
    margin-bottom: 15px;
    i {
      padding-right: 10px;
    }
  }
}
@media screen and (min-width: $breakpoint-lg) {
  .player-profile {
    display: flex;
    position: relative;
  }
}

.player-card {
  width: 100%;
  max-width: 400px;
  height: 450px;
  border: 1px solid #ffffff22;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 300ms;
  margin: auto;
}

.player-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.player-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.player-card .content {
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  padding: 30px 20px 20px 20px;
  height: auto;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  
  a {
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
}

.player {
  @media screen and (min-width: $breakpoint-md) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: $breakpoint-lg) {
    justify-content: space-between;
  }
}

.player-title {
  text-align: center;
  text-transform: uppercase;
  color: #fff;
}

.socials-aside {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  flex-wrap: wrap;
  transition: color .4s ease .1s;
  z-index: 1;
  margin-bottom: 30px;

  @media screen and (min-width: $breakpoint-md) {
    justify-content: center;
  }

  @media screen and (min-width: $breakpoint-lg) {
    margin-top: inherit;
    flex-direction: column;
    justify-content: inherit;
  }
}

.socials-aside a,.socials-aside button {
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(1rem + 36px);
    height: calc(1rem + 36px);
    text-align: center;
    color: inherit;
    text-decoration: none;
    line-height: 1rem;
    transition: background-color .4s ease .1s,box-shadow .4s ease .1s;

    @media screen and (min-width: $breakpoint-md) {
      font-size: 20px;
      width: calc(1rem + 26px);
      height: calc(1rem + 26px)
    }
}

.socials-aside button {
    border: 0;
    padding: 0;
    outline: none
}

.socials-aside button:hover {
    background: white
}

.socials-aside_ready .icon-video-camera1:before,.socials-aside_ready .icon-video-camera:before {
    color: #fff
}

.socials-aside_ready a,.socials-aside_ready button {
    background-color: #fff;
    box-shadow: 0 1px 3px 1px #14204f80;
    border-radius: 50%;
    margin: 15px 0;

    @media screen and (min-width: $breakpoint-md) {
      margin: 15px 7px 0;

      &:first-child {
          margin-top: 0;
      }
    }
}

.socials-aside_ready a.icon-video-camera1:before,.socials-aside_ready a.icon-cross:before,.socials-aside_ready a.icon-twitter:before,.socials-aside_ready a.icon-discord:before,.socials-aside_ready a.icon-video-camera:before,.socials-aside_ready button.icon-video-camera1:before,.socials-aside_ready button.icon-cross:before,.socials-aside_ready button.icon-twitter:before,.socials-aside_ready button.icon-discord:before,.socials-aside_ready button.icon-video-camera:before {
    padding-top: 1px
}

.socials-aside_ready a.icon-twitch:hover:before,.socials-aside_ready button.icon-twitch:hover:before {
    color: #6441a5
}

.socials-aside_ready a.icon-twitter:hover:before,.socials-aside_ready button.icon-twitter:hover:before {
    color: #00acee
}

.socials-aside_ready a.icon-discord:hover:before,.socials-aside_ready button.icon-discord:hover:before {
    color: #7289da
}

.socials-aside_ready .tooltip {
    position: relative
}

.socials-aside_ready .tooltip .tooltiptext {
    display: initial;
    visibility: hidden;
    font-size: 12px;
    width: 120px;
    background-color: #000;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: -5px;
    left: 105%
}

.socials-aside_ready .tooltip:hover .tooltiptext {
    visibility: visible
}

.okbro {
  background-color: #161616d0;
  margin: -75px auto 30px;
  position: relative;
  border: 1px solid $ter-color;
  border-radius: 50%;
  width: 150px;
  height: 150px;

  div {
    // position: relative;
    img {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      // padding: 7px;
    }
  }

  @media screen and (min-width: $breakpoint-lg) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -25px;
    padding: 30px;
    margin: 0;
  }
}
</style> -->
