<template>
  <section class="bg-gainsboro mb-3 p-10">
    <h2 class="text-20 mb-3">4. 用 JavaScript 控制播放器</h2>

    <!-- 影片播放器 -->
    <section class="text-center">
      <video id="video3"
             class="video-js">
        <source src="@/assets/files/影片1.mp4" type="video/mp4">
        <source src="@/assets/files/影片1.webm" type="video/webm">
        <track src="../../public/字幕.vtt" kind="subtitles" label="中文字幕" srclang="zh" default>
      </video>
    </section>

    <!-- 操控功能區塊 -->
    <section class="bg-whitesmoke mt-10 py-3"
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
        <div class="d-flex border-start border-secondary m-3 ms-10 ps-10 pe-5">
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
        <div class="d-flex border-start border-secondary mx-3 ps-10"
             style="min-width:215px;padding:7px;">
          音量
          <input type="range" class="mx-2" v-model="volume" style="width:100px;">
          {{ volume }}
        </div>
        <!-- 速率 -->
        <div class="d-flex-align-items-center border-start border-secondary ps-10">
          <label for="customRange3" class="form-label">速率</label>
          <input type="range"
                 class="form-range mx-3 pt-5"
                 min="1" max="5" step="1"
                 id="customRange3"
                 v-model="playbackRate"
                 style="width:100px;">
          {{ playbackRate }}
        </div>
        <!-- 重複播放 -->
        <div class="border-start border-secondary ms-10 ps-10">
          <button type="button"
                  class="btn btn-secondary"
                  @click="loopSetup">{{ isLoop?'不重複播放':'重複播放' }}</button>
        </div>
      </div>

      <!-- 第二排 -->
      <div class="d-flex align-items-center my-5">
        <!-- 切換影片源 -->
        <div>
          <template v-for="value in playList" :key="value.name">
            <button type="button"
                    class="btn me-2"
                    :class="currentPlayer.name===value.name?'btn-primary':'btn-secondary'"
                    @click="changeVideo(value)">播放{{ value.name }}</button>
          </template>
        </div>

        <!-- 全螢幕 -->
        <div class="border-start border-secondary ms-10 ps-10">
          <button type="button"
                  class="btn btn-secondary me-4"
                  @click="player.requestFullscreen()">全螢幕</button>
          <button type="button"
                  class="btn btn-secondary"
                  @click="enterAndLeave">進入全螢幕,一秒後離開全螢幕</button>
        </div>

        <!-- 下載影片 -->
        <div class="border-start border-secondary ms-10 ps-10">
          <button type="button"
                  class="btn btn-success"
                  @click="download">
            下載{{ currentPlayer.name }}.{{ currentPlayer.type }}
          </button>
        </div>
      </div>

      <!-- 第三排 -->
      <div class="d-flex align-items-center my-5">
        <!-- 動態的當前播放時間 -->
        <p class="text-secondary fw-bold-7"
           style="width:300px;">
          動態取得當前播放時間 ( {{ dynamicCurrentTime }} )
        </p>
        <!-- 取得當前播放時間 -->
        <div class="border-start border-secondary ps-10">
          <button type="button"
                  class="btn btn-secondary"
                  @click="updateStaticCurrentTime">取得當前播放時間
            ( {{ staticCurrentTime }} )
          </button>
        </div>
        <!-- 設定當前播放時間 -->
        <div class="d-flex align-items-center border-start border-secondary ms-10 ps-10">
          <button type="button"
                  class="btn btn-secondary"
                  @click="player.currentTime(setCurrentTime)">
            設定播放時間
          </button>
          <input type="number"
                 class="form-control text-center"
                 placeholder="輸入秒"
                 v-model="setCurrentTime"
                 min="0"
                 style="width:100px;">
        </div>
      </div>

      <!-- 第四排 -->
      <div class="d-flex align-items-center my-5">
        <!-- 取得影片、音樂總時長 -->
        <div>
          <p class="text-secondary text-18 fw-bold-7">
            {{ currentPlayer.type==='mp4'?'影片':'音樂' }}總時長
            {{ totalDuration }}
          </p>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, reactive, watchEffect, onMounted } from 'vue'
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

import { saveAs } from 'file-saver' // 僅取出下載的 API

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
const playbackRate = ref(1)
const currentPlayer = ref({ name: '影片1', type: 'mp4' })
const isLoop = ref(false)
const staticCurrentTime = ref(0)
const dynamicCurrentTime = ref(0)
const setCurrentTime = ref(0)
const totalDuration = ref(0)
const videoOptions = {
  language: 'zh-TW',
  autoplay: true,
  controls: true,
  width: '500',
  height: '200'
}
const playList = reactive({
  video1: {
    name: '影片1',
    type: 'mp4'
  },
  video2: {
    name: '影片2',
    type: 'mp4'
  },
  audio1: {
    name: '音樂1',
    type: 'mp3'
  }
})

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
watchEffect(() => {
  if (playbackRate.value && player.value?.playbackRate) {
    console.log('調整速率', playbackRate.value)
    player.value.playbackRate(playbackRate.value)
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
    // 播放時連續觸發
    this.on('timeupdate', () => {
      dynamicCurrentTime.value = player.value.currentTime()
    })
    // 在這裡取得影片的總時長
    this.on('durationchange', function () {
      totalDuration.value = player.value.duration()
      console.log('影片總時長：', totalDuration.value)
    })
  })
}
async function changeVideo ({ name, type }) {
  const { default: newSource } = await import(`../assets/files/${name}.${type}`)

  player.value.src(newSource)

  currentPlayer.value.name = name
  currentPlayer.value.type = type
  totalDuration.value = player.value.duration()

  // 調整影片速率
  if (playbackRate.value && player.value?.playbackRate) {
    setTimeout(() => {
      player.value?.playbackRate(playbackRate.value)
    }, 100)
  }
  // 改變當前靜態時間
  updateStaticCurrentTime()

  // 重新加載播放器，這樣更換的影片源才會生效
  // player.value.load()
}
async function download () {
  const { default: newSource } = await import(`../assets/files/${currentPlayer.value.name}.${currentPlayer.value.type}`)

  saveAs(newSource, currentPlayer.value.name) // 下載的網址、下載的檔案名稱
}
function loopSetup () {
  isLoop.value = !isLoop.value
  player.value.loop(isLoop.value)
}
function updateStaticCurrentTime () {
  staticCurrentTime.value = player.value.currentTime()
}
</script>

<style lang='scss' scope>
// 顯示當前的播放時間
.video-js .vjs-time-control{display:block;}
.video-js .vjs-remaining-time{display: none;}
</style>
