<style lang="scss">
  @import "panel.scss";
</style>

<template>
  <div class="panel">
  <div class="panel-card">
    <div class="content">
      <figure>
        <img :src="image" alt="Mountains">

        <span class="title">OK</span>
        <figcaption>

          <p>azeerty</p>

        </figcaption>
      </figure>
    </div>
  </div>
</div>
</template>

<script>
import image from "@/assets/about-us-1.jpg"

export default {
    name: 'PanelComponent',
    setup() {
      return {
        image,
      }
    },
}
</script>
