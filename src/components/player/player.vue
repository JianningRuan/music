<template>
  <div v-show="playList.length">
    <div class="player fullPage flex flex-c" v-if="fullPage">
      <div class="p-head flex">
        <div class="p-return iconfont icon-left" v-on:click="closeFullPage"></div>
        <div class="p-tit flex1"></div>
      </div>
      <div class="p-main flex1">
        <div class="cd">
          <div class="disc-box" ref="discBox" @click="playOrStop" :style="{height: discHeight + 'px'}">
            <div class="disc" :class="{ rotate: play }">
              <img v-if="currentSong && currentSong.album" :src="currentSong.album.picUrl">
            </div>
          </div>
        </div><!--disc-->
        <div class="lrc"></div><!--lrc-->
      </div>
      <!--操作区-->
      <div class="p-opa-wrapper">
        <div class="p-progress flex flex-align-center">
          <div class="p-time p-start-time">{{formatTime(currentTime)}}</div>
          <div class="flex1 p-progress-box">
            <div class="p-progress-line" :style="{width: percent + '%'}"></div>
            <div class="p-progress-point" :style="{left: percent + '%'}"></div>
          </div>
          <div class="p-time p-end-time">{{formatTime(currentSong.duration/1000)}}</div>
        </div>
        <div class="p-opa flex flex-align-center">
          <div class="p-btn play-type iconfont icon-icon-4"></div>
          <div class="p-opa-box flex1 flex flex-align-center justify-around">
            <div class="p-btn iconfont icon-prev" @click="prevSong"></div>
            <div class="play-btn iconfont" :class="isPlaying" @click="playOrStop"></div>
            <div class="p-btn iconfont icon-next" @click="nextSong"></div>
          </div>
          <div class="p-btn play-list iconfont icon-icon-1"></div>
        </div>
      </div>
      <!--操作区-end-->
    </div>
    <div class="mini-player flex flex-align-center" v-else @click="openFullPage">
      <div class="mini-pic">
        <img v-if="currentSong && currentSong.album" :src="currentSong.album.picUrl">
      </div>
      <div class="flex1 mini-cont">
        <div class="m-name">{{currentSong.name}}</div>
        <div class="m-artists" v-if="currentSong.album && currentSong.album.artists">{{currentSong.album.artists[0].name}}</div>
      </div>
      <div class="mini-opa-btn play-icon iconfont icon-play" @click="playOrStop"></div>
      <div class="mini-opa-btn next-icon iconfont icon-next" @click="nextSong"></div>
    </div>
    <audio ref="audio" :src="songUrl" @canplay="ready" @timeupdate="updateTime" @ended="end"></audio>
  </div>
</template>
<script type="text/ecmascript-6">
  import './player.scss'
  import { mapGetters, mapMutations } from 'vuex'
  import { format } from './../../js/common'
  export default {
    data() {
      return {
        loadReady: false,
        songUrl: '',
        currentTime: 0,
        discHeight: 0,
        percent: 0
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
        console.log('surrent:', val);
        if (val !== {}) {
          this.songUrl = `http://music.163.com/song/media/outer/url?id=${val.id}.mp3`;
          this.$nextTick(()=>{
            this.setPlay(true);
            // this.audio.play();
          })

        }
      },
      playList(val) {
        this.$nextTick(()=>{
          this.discHeight = this.$refs.discBox.offsetWidth;
        });

        console.log('list:', val);
        // this.setPlayList(val);
      },
      play(val) {
        if (val) {
          this.playMusic();
        }else {
          this.stopMusic();
        }
      },
      playIndex(val) {
        console.log('index:', val)
      }
    },
    computed: {
      isPlaying(){
        let isPlay = '';
        return isPlay = this.play ? 'icon-pause' : 'icon-play'
      },
      ...mapGetters([
        'play',
        'playList',
        'playIndex',
        'currentSong',
        'fullPage'
      ])
    },
    filters: {},
    methods: {
      formatTime(thisTime){
        return format(thisTime);
      },
      closeFullPage(){
        this.setFullPage(false);
      },
      openFullPage(){
        this.setFullPage(true);
      },
      ready(){
        this.loadReady = true;
      },
      updateTime(e){
        this.currentTime = e.target.currentTime;
        this.percent = this.currentTime * 1000 / this.currentSong.duration * 100;
      },
      end(){
        this.nextSong();
      },
      playOrStop(){
        let play = !this.play;
        this.setPlay(play);
      },
      prevSong(){
        if (!this.loadReady){
          return
        }
        let playIndex = this.playIndex;
        if (playIndex === 0) {
          return
        }
        playIndex--;
        this.setPlayIndex(playIndex);
        this.loadReady = false;
      },
      nextSong(){
        if (!this.loadReady) {
          return
        }
        let playIndex = this.playIndex;
        if (playIndex === this.playList.length -1) {
          this.setPlayIndex(0)
        }else {
          playIndex++;
          this.setPlayIndex(playIndex)
        }
        this.loadReady = false;
      },
      playMusic(){
        this.$refs.audio.play();
      },
      stopMusic(){
        this.$refs.audio.pause();
      },
      ...mapMutations({
        setPlay: 'SET_PLAY',
        setFullPage: 'SET_FULL_PAGE',
        setPlayList: 'SET_PLAY_LIST',
        setPlayIndex: 'SET_PLAY_INDEX'
      })
    }
  }
</script>
