<template>
  <section class="bg-gainsboro mb-3 p-10">
    <h2 class="text-20 mb-3">2. 事件觸發</h2>

    <p>
      播放器物件建立、準備好時觸發：
      <span  :class="ready?'text-success':'text-danger'">
        {{ ready?'已觸發':'未觸發' }}
      </span>
    </p>
    <p>
      播放時觸發：
      <span  :class="playing?'text-success':'text-danger'">
        {{ playing?'已觸發':'未觸發' }}
      </span>
    </p>
    <p>
      時間軸拖曳更新觸發：
      <span  :class="seeked?'text-success':'text-danger'">
        {{ seeked?'已觸發':'未觸發' }}
      </span>
    </p>
    <p>
      暫停時觸發：
      <span  :class="pause?'text-success':'text-danger'">
        {{ pause?'已觸發':'未觸發' }}
      </span>
    </p>
    <p>
      播放結束觸發：
      <span  :class="ended?'text-success':'text-danger'">
        {{ ended?'已觸發':'未觸發' }}
      </span>
    </p>
    <p>
      錯誤時觸發：
      <span  :class="error?'text-success':'text-danger'">
        {{ error?'已觸發':'未觸發' }}
      </span>
    </p>
    <p>
      進入、退出全螢幕觸發：
      <span  :class="fullscreenchange?'text-success':'text-danger'">
        {{ fullscreenchange?'已觸發':'未觸發' }}
      </span>
    </p>
    <p>
      音量改變時觸發：
      <span  :class="volumechange?'text-success':'text-danger'">
        {{ volumechange?'已觸發':'未觸發' }}
      </span>
    </p>
  </section>
</template>

<script setup>
import { ref, watchEffect, onMounted } from 'vue' // eslint-disable-line
import { storeToRefs } from 'pinia'
import { useVideoStore } from '@/stores/videoStore.js'
// store
const { player } = storeToRefs(useVideoStore())
const ready = ref(false)
const playing = ref(false)
const seeking = ref(false)
const seeked = ref(false)
const pause = ref(false)
const ended = ref(false)
const error = ref(false)
const fullscreenchange = ref(false)
const volumechange = ref(false)

// | ready: 播放器物件建立、準備好時觸發
// | playing: 播放時觸發
// | seeked: 時間軸拖曳更新觸發
// | pause: 暫停時觸發
// | ended: 播放結束觸發
// | error: 錯誤時觸發
// | fullscreenchange: 進入、退出全螢幕觸發
// | volumechange: 音量改變時觸發

watchEffect(() => {
  if (!player.value) return

  player.value?.on('ready', () => {
    console.log('播放器物件建立、準備好時觸發: ready')
    ready.value = true
  })
  player.value?.on('playing', () => {
    console.log('播放時觸發: playing')
    playing.value = true
    pause.value = false
    seeked.value = false
  })
  player.value?.on('seeking', () => {
    console.log('時間軸拖曳更新觸發: seeking')
    seeking.value = true
  })
  player.value?.on('seeked', () => {
    if (seeking.value) {
      console.log('時間軸拖曳更新觸發: seeked')
      seeking.value = false // 重置標誌
      seeked.value = true
    }
  })
  player.value?.on('pause', () => {
    console.log('暫停時觸發: pause')
    pause.value = true
    playing.value = false
  })
  player.value?.on('ended', () => {
    console.log('播放結束觸發: ended')
    ended.value = true
  })
  player.value?.on('error', () => {
    console.log('錯誤時觸發: error')
    error.value = true
  })
  player.value?.on('fullscreenchange', () => {
    console.log('進入、退出全螢幕觸發: fullscreenchange')
    fullscreenchange.value = true
  })
  player.value?.on('volumechange', () => {
    console.log('音量改變時觸發: volumechange')
    volumechange.value = true
  })
})

</script>

<style lang='scss' scope></style>
