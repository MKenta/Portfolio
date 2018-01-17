<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        miyachik
      </h1>
      <h2 class="subtitle">
        Social
      </h2>
      <social/>
      <h2 class="subtitle">
        Ohter
      </h2>
      <livePhoto/>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Social from '~/components/Social.vue'
import LivePhoto from '~/components/LivePhoto.vue'

export default {
  components: {
    Logo,
    Social,
    LivePhoto
  },
  created () {
    if (process.browser) {
      var LivePhotosKit = require('livephotoskit')
      var player = new LivePhotosKit.Player(document.getElementsByClassName('live-photo')[0])
      player.photoSrc = 'https://s3-ap-northeast-1.amazonaws.com/liviewm-dev/articles/images/' + 'shabon_song.mov-00m40s09-A05BC584-D6E0-41BF-BB2C-DF9BA8922E4E' + '.JPG'
      player.videoSrc = 'https://s3-ap-northeast-1.amazonaws.com/liviewm-dev/articles/movies/' + 'shabon_song.mov-00m40s09-A05BC584-D6E0-41BF-BB2C-DF9BA8922E4E' + '.MOV'
      player.videoHeight = 750 / 2 + 'px'
      player.photoHeight = 750 / 2 + 'px'
      player.videoWidth = 1334 / 2 + 'px'
      player.photoWidth = 1334 / 2 + 'px'
      player.style.height = 750 / 2 + 'px'
      player.style.width = 1334 / 2 + 'px'
      console.log('livephotoskit is loaded.')
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
