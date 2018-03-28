<template>
  <div v-show="oriList.length">
    <div class="player fullPage flex flex-c" v-if="fullPage">
      <div class="p-head">
        <div class="p-return iconfont icon-left" v-on:click="closeFullPage"></div>
      </div>
      <div class="p-main">
        <div class="cd">
          <div class="disc-wrapper">
            <div class="disc" :class="{ rotate: play }">
              <img v-if="currentSong && currentSong.album" :src="currentSong.album.picUrl">
            </div>
          </div>
        </div><!--disc-->
        <div class="lrc"></div><!--lrc-->
      </div>
      <div class="p-opa"></div>
    </div>
    <div class="mini-player" v-else>222</div>
    <audio ref="audio" @canplay="ready" @timeupdate="updateTime" @ended="end">
      <source :src="songUrl"type="audio/mpeg">
    </audio>
  </div>
</template>
<script type="text/ecmascript-6">
  import './player.scss'
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    data() {
      return {
        loadReady: false,
        songUrl: ''
      }
    },
    components: {},
    created() {
      this.$nextTick(()=>{
        this.audio = this.$refs.audio;
      })

    },
    mounted() {
    },
    watch: {
      currentSong(val){
        console.log(val);
        if (val !== {}) {
          this.songUrl = `http://music.163.com/song/media/outer/url?id=${val.id}.mp3`;
          this.$refs.audio.play();

          this.setPlay(true)
        }
      },
      oriList(val) {
        this.setPlayList(val);
      }
    },
    computed: {
      ...mapGetters([
        'play',
        'oriList',
        'playIndex',
        'currentSong',
        'fullPage'
      ])
    },
    filters: {},
    methods: {
      closeFullPage(){
        this.setFullPage(false);
      },
      ready(){

      },
      updateTime(){

      },
      end(){

      },
      ...mapMutations({
        setPlay: 'SET_PLAY',
        setFullPage: 'SET_FULL_PAGE',
        setPlayList: 'SET_PLAY_LIST'
      })
    }
  }
</script>
