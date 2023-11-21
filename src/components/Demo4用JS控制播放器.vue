<template>
  <section class="bg-gainsboro mb-3 p-10">
    <h2 class="text-20 mb-3">4. 用 JavaScript 控制播放器</h2>

    <section class="text-center">
      <video id="video3"
             class="video-js">
        <source src="@/assets/files/mp4.mp4" type="video/mp4">
        <source src="@/assets/files/mp4.webm" type="video/webm">
        <track src="../../public/字幕.vtt" kind="subtitles" label="中文字幕" srclang="zh" default>
      </video>
    </section>

    <div class="bg-whitesmoke mt-10 py-3"
         style="padding: 0 200px;">
      <!-- 第一排 -->
      <div class="d-flex align-items-center">
        <!-- 播放、暫停 -->
        <button type="button"
                class="btn"
                :class="isPlaying?'btn-secondary':'btn-primary'"
                @click="isPlaying?player.pause():player.play()">
          {{ isPlaying?'暫停':'播放' }}
        </button>
        <!-- 播放器寬高 -->
        <div class="d-flex border-start border-primary m-3 ms-10 ps-5">
          <label for="dmeoWidth4" class="d-flex align-items-center">
            寬度
            <input type="number"
                  class="form-control mx-2"
                  id="dmeoWidth4"
                  v-model.number="width"
                  style="width:80px;">
          </label>
          <label for="dmeoHeight4" class="d-flex align-items-center">
            高度
            <input type="number"
                  class="form-control ms-2"
                  id="dmeoHeight4"
                  v-model.number="height"
                  style="width:80px;">
          </label>
        </div>
        <!-- 音量 -->
        <div class="d-flex border-start border-end border-primary mx-3"
             style="min-width:215px;padding: 7px;">
          音量
          <input type="range" class="mx-2" v-model="volume">
          {{ volume }}
        </div>
      </div>

      <!-- 第二排 -->
      <div class="my-5">
        <button type="button"
                class="btn btn-secondary me-4"
                @click="player.requestFullscreen()">全螢幕</button>
        <button type="button"
                class="btn btn-secondary"
                @click="enterAndLeave">進入全螢幕,一秒後離開全螢幕</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, watchEffect, onMounted } from 'vue' // eslint-disable-line
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

function enterAndLeave () {
  player.value.requestFullscreen()

  setTimeout(() => {
    player.value.exitFullscreen()
  }, 1000)
}

const player = ref(null)
const isPlaying = ref(false)
const volume = ref(100)
const width = ref(0)
const height = ref(0)
const videoOptions = {
  language: 'zh-TW',
  autoplay: true,
  controls: true,
  width: '500',
  height: '200'
}

// watchEffect
watchEffect(() => {
  if (player.value) {
    console.log('調整聲音大小', volume.value / 100)
    player.value.volume(volume.value / 100)
  }
})
watchEffect(() => {
  if (width.value && height.value) {
    console.log('調整寬高', width.value, height.value)
    player.value.width(width.value)
    player.value.height(height.value)
  }
})

onMounted(() => {
  videoPlayerInit()
})

function videoPlayerInit () {
  player.value = videojs('#video3', videoOptions, function () {
    console.log('影片準備完畢!', player.value)

    width.value = player.value.width()
    height.value = player.value.height()

    this.on('play', () => {
      isPlaying.value = true
    })
    this.on('pause', () => {
      isPlaying.value = false
    })
  })
}
</script>

<style lang='scss' scope>
// 顯示當前的播放時間
.video-js .vjs-time-control{display:block;}
.video-js .vjs-remaining-time{display: none;}
</style>
