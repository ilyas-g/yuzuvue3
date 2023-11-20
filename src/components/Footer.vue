<template>
    <footer>
      <div class="footer-social">
        <p class="text-center text-uppercase">Suivez-nous</p>
        <ul class="footer__social">
          <li>
            <a :href="twitterURL" target="_blank" title="" aria-label="Twitter" class="icon-twitter"></a>
          </li>
          <li>
            <a :href="discordURL" target="_blank" title="" aria-label="Discord" class="icon-discord"></a>
          </li>
          <li>
            <a :href="youtubeURL" target="_blank" title="" aria-label="Youtube" class="icon-youtube"></a>
          </li>
        </ul>
      </div>
      <p class="footer__copyright">© 2019 - {{ currentDate }} Yuzu Gaming - All Rights Reserved.</p>
    </footer>
</template>

<script setup lang="ts">
  const youtubeURL = import.meta.env.VUE_APP_YOUTUBE
  const discordURL = import.meta.env.VUE_APP_DISCORD
  const twitterURL = import.meta.env.VUE_APP_TWITTER
  const currentDate = new Date().getFullYear();
</script>
