<template>
  <div v-show="oriList.length">
    <div class="player fullPage flex" v-if="fullPage">
      <div></div>
    </div>
    <div class="mini-player" v-else>222</div>
    <audio ref="audio" :src="songUrl"></audio>
  </div>
</template>
<script type="text/ecmascript-6">
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    data() {
      return {
        songUrl: ''
      }
    },
    components: {},
    created() {
    },
    mounted() {
    },
    watch: {
      currentSong(val){
        this.songUrl = `http://music.163.com/song/media/outer/url?id=${val.id}.mp3`
      },
      oriList(val) {
        this.playList(val);
      }
    },
    computed: {
      ...mapGetters([
        'oriList',
        'playIndex',
        'currentSong'
      ])
    },
    filters: {},
    methods: {
      ...mapMutations({
        fullPage: 'SET_FULL_PAGE',
        playList: 'SET_PLAY_LIST'
      })
    }
  }
</script>
