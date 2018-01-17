<template>
  <div class="live-photo" style="width:667px;height:375px;" >
  </div>
</template>

<script>
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
  console.log("livephotoskit is loaded.")
}
</script>

<style>
</style>
