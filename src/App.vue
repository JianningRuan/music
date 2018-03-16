<template>
  <div id="app" class="flex flex-c">
    <mHeader v-if="showHead"></mHeader>
    <router-view/>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
  import './app.scss'
  import './assets/libs/icon/iconfont.css'
  import mHeader from './components/header/header'
  import player from './components/player/player'
  import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed:{
    ...mapGetters([
      'showHead'
    ])
  },
  components: {
    mHeader,
    player
  }
}
</script>
