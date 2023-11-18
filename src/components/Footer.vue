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

<script>

export default {
  name: 'FooterComponent',
  data() {
    return {
      youtubeURL: process.env.VUE_APP_YOUTUBE,
      discordURL: process.env.VUE_APP_DISCORD,
      twitterURL: process.env.VUE_APP_TWITTER
    }
  },
  setup() {
    const currentDate = new Date().getFullYear();

    return {
        currentDate
    }
  }
}
</script>

<style lang="scss">
footer {
  padding: 15px;
  font-family: 'Montserrat', sans-serif;

  @media screen and (min-width: $breakpoint-lg) {
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-social {
    display: flex;
    align-items: center;
  }

  .footer__social {
    margin-left: 15px;
    display: flex;
    justify-content: space-around;

    a {
      text-decoration: none;
    }
    &>li {
      // margin-bottom: 32px;
      margin-left: 10px;
      font-size: 24px;
      line-height: 1;
      vertical-align: middle;
    }
  }

  .footer__copyright {
    font-size: 11px;
  }

  .logo {
    @media screen and (min-width: $breakpoint-lg) {
      margin-left: 30px;
    }
  }

  [class^="icon-"],
  [class*=" icon-"] {
    // background-color: aqua;
    // font-size: 24px;
    &:hover::before {
      color: $sub-color;
    }
    &::before {
      color: #fff;
    }
  }
}


</style>
