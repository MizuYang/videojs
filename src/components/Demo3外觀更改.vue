<template>
  <section class="bg-gainsboro mb-3 p-10">
    <h2 class="text-20 mb-3">3. 外觀更改</h2>

    <section class="text-center">
      <video id="video2"
             class="video-js">
        <source src="@/assets/files/影片1.mp4" type="video/mp4">
        <track src="/字幕.vtt" kind="subtitles" label="中文字幕" srclang="zh" default>
      </video>
    </section>

    <div class="text-center mt-4">
      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
        <template v-for="(value,btnName) in buttonList" :key="btnName">
          <input type="radio" class="btn-check" name="btnradio" :id="`${btnName}`"
                 autocomplete="off" :checked="value.isUseingTheme"
                 @click="setTheme(btnName)">
          <label class="btn btn-outline-primary" :for="`${btnName}`">{{ btnName }}</label>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

// City
import '@videojs/themes/dist/city/index.css'
// Fantasy
import '@videojs/themes/dist/fantasy/index.css'
// Forest
import '@videojs/themes/dist/forest/index.css'
// Sea
import '@videojs/themes/dist/sea/index.css'

// data
const buttonList = reactive({
  city: {
    name: 'city',
    isUseingTheme: true
  },
  fantasy: {
    name: 'fantasy',
    isUseingTheme: false
  },
  forest: {
    name: 'forest',
    isUseingTheme: false
  },
  sea: {
    name: 'sea',
    isUseingTheme: false
  }
})
const player = ref(null)
const videoOptions = {
  language: 'zh-TW',
  autoplay: true,
  controls: true,
  width: '500',
  height: '200'
}
const themeList = ['city', 'fantasy', 'forest', 'sea']

onMounted(() => {
  videoPlayerInit()
})

function setTheme (themeName) {
  themeStateInit()

  const videoElement = document.querySelector('#video2')
  videoElement.classList.add(`vjs-theme-${themeName}`)

  buttonList[themeName].isUseingTheme = true

  player.value = null

  // videoPlayerInit()
}
function themeStateInit () {
  const videoElement = document.querySelector('#video2')
  // className init
  themeList.forEach(theme => videoElement.classList.remove(`vjs-theme-${theme}`))

  // useing state init
  Object.keys(buttonList).forEach(themeName => (buttonList[themeName].isUseingTheme = false))
}
function videoPlayerInit () {
  player.value = videojs('#video2', videoOptions, function () {
    console.log('影片準備完畢!', player.value)
  })
}
</script>

<style lang='scss' scope>
// 顯示當前的播放時間
.video-js .vjs-time-control{display:block;}
.video-js .vjs-remaining-time{display: none;}
</style>
