<template>
  <template v-for="item in data" :key="item.id">
    <component :is="item.component"></component>
  </template>
</template>

<script setup>
import { defineAsyncComponent, reactive } from 'vue'

const data = reactive([
  {
    id: 1,
    name: 'Demo1基本使用',
    component: ''
  },
  {
    id: 2,
    name: 'Demo2事件觸發',
    component: ''
  },
  {
    id: 3,
    name: 'Demo3外觀更改',
    component: ''
  }
])

getComponents()

function getComponents () {
  data.forEach((item) => {
    item.component = defineAsyncComponent(() => import(`../components/${item.name}.vue`))
  })
}
</script>

<style lang='scss' scope></style>
