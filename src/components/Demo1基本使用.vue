<template>
  <section class="bg-gainsboro mb-3 p-10">
    <h2 class="text-20 mb-3">1. 基本使用</h2>

    <video id="video1"
           class="video-js">
      <source src="@/assets/files/mp4.mp4" type="video/mp4">
      <source src="@/assets/files/mp4.webm" type="video/webm">
    </video>

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
  autoplay: true,
  controls: true,
  width: '300',
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
  })
})

// 銷毀實體
onUnmounted(() => {
  if (player.value) player.value.dispose()
})
</script>

<style lang='scss' scope></style>
