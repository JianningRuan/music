<template>
  <div id="app" class="flex flex-c">
    <mHeader></mHeader>
    <router-view/>
    <player></player>
  </div>
</template>

<script>
  import './app.scss'
  import './assets/libs/icon/iconfont.css'
  import mHeader from './components/header/header'
  import player from './components/player/player'
export default {
  name: 'App',
  components: {
    mHeader,
    player
  }
}
</script>
