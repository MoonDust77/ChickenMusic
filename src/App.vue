<template>
  <div id="app" @touchmove.prevent>
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<style lang="stylus"></style>
<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'

export default {
  components: { MHeader, Tab }
}
</script>
