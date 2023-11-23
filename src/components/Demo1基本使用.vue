<template>
  <section class="bg-gainsboro mb-3 p-10">
    <h2 class="text-20 mb-3">1. 基本使用</h2>

    <div class="text-center">
      <video id="video1"
             class="video-js">
        <source src="@/assets/files/影片1.mp4" type="video/mp4">
        <track src="/videojs/字幕.vtt" kind="subtitles" label="中文字幕" srclang="zh" default>
      </video>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue' // eslint-disable-line
import { storeToRefs } from 'pinia'
import { useVideoStore } from '@/stores/videoStore.js'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

// store
const { player } = storeToRefs(useVideoStore())

const videoOptions = {
  language: 'zh-TW',
  autoplay: true,
  controls: true,
  width: '500',
  height: '200'
  // sources: [
  //   {
  //     src: '@/assets/files/mp4.mp4',
  //     type: 'video/mp4'
  //   }
  // ]
}

onMounted(() => {
  player.value = videojs('#video1', videoOptions, function () {
    console.log('影片準備完畢!', player.value)

    // 事件註冊
    // this.on('suspend', function () { // 延遲下載
    //   console.log('延遲下載')
    // })
    // this.on('loadstart', function () { // 客戶端開始請求數據
    //   console.log('客戶端開始請求數據')
    // })
    // this.on('progress', function () { // 客戶端正在請求數據
    //   console.log('客戶端正在請求數據')
    // })
    // this.on('abort', function () { // 客戶端主動終止下載（不是因爲錯誤引起）
    //   console.log('客戶端主動終止下載')
    // })
    // this.on('error', function () { // 請求數據時遇到錯誤
    //   console.log('請求數據時遇到錯誤')
    // })
    // this.on('stalled', function () { // 網速失速
    //   console.log('網速失速')
    // })
    // this.on('play', function () { // 開始播放
    //   console.log('開始播放')
    // })
    // this.on('pause', function () { // 暫停
    //   console.log('暫停')
    // })
    // this.on('loadedmetadata', function () { // 成功獲取資源長度
    //   console.log('成功獲取資源長度')
    // })
    // this.on('loadeddata', function () { // 渲染播放畫面
    //   console.log('渲染播放畫面')
    // })
    // this.on('waiting', function () { // 等待數據，並非錯誤
    //   console.log('等待數據')
    // })
    // this.on('playing', function () { // 開始回放
    //   console.log('開始回放')
    // })
    // this.on('canplay', function () { // 可以播放，但中途可能因爲加載而暫停
    //   console.log('可以播放，但中途可能因爲加載而暫停')
    // })
    // this.on('canplaythrough', function () { // 可以播放，歌曲全部加載完畢
    //   console.log('可以播放，歌曲全部加載完畢')
    // })
    // this.on('seeking', function () { // 尋找中
    //   console.log('尋找中')
    // })
    // this.on('seeked', function () { // 尋找完畢
    //   console.log('尋找完畢')
    // })
    // this.on('timeupdate', function () { // 播放時間改變
    //   console.log('播放時間改變')
    // })
    // this.on('ended', function () { // 播放結束
    //   console.log('播放結束')
    // })
    // this.on('ratechange', function () { // 播放速率改變
    //   console.log('播放速率改變')
    // })
    // this.on('durationchange', function () { // 資源長度改變
    //   console.log('資源長度改變')
    // })
    // this.on('volumechange', function () { // 音量改變
    //   console.log('音量改變')
    // })
  })
})

// 銷毀實體
onUnmounted(() => {
  if (player.value) player.value.dispose()
})
</script>

<style lang='scss' scope></style>
