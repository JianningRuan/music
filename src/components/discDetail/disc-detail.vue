<template>
  <div>
    <pageHead :title="title" :isShowTitBg="isShowTitBg"></pageHead>
    <div class="disc-msg-wrapper">
      <div class="disc-msg flex">
        <div class="disc-pic">
          <img :src="discDetail.coverImgUrl"/>
        </div>
        <div class="disc-msg-cont flex1">
          <div class="disc-name">{{discDetail.name}}</div>
          <div class="disc-creator flex">
            <span class="disc-creator-pic">
              <img v-if="discDetail && discDetail.creator" :src="discDetail.creator.avatarUrl"/>
            </span>
            <span v-if="discDetail && discDetail.creator">{{discDetail.creator.nickname}}</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div v-for="(song, index) in songList" v-on:click="goPlay(song, index)">
        <h3>{{song.name}}</h3>
        <p>
          <span v-for="artist in song.artists">{{artist.name}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import './disc-detail.scss'
  import pageHead from './../../until/head/head'
  import { mapMutations } from 'vuex'
  export default {
    data(){
      return {
        id: '',
        title: '歌单',
        isShowTitBg: false,
        discDetail: {},
        songList: []
      }
    },
    components: {
      pageHead
    },
    created(){
      this.id = this.$route.query.id;
      let discParams = {
        id: this.id
      };
      this.$fetch(this.$Api.getPlaylistDetail, discParams).then((res)=>{
        if (res.code == 200) {
          this.discDetail = res.result;
          this.songList = res.result.tracks;
        }
      })
    },
    mounted(){},
    activated(){},
    watch: {},
    computed:{},
    filters: {},
    methods: {
      goPlay(item, index) {
        console.log(item, index);
        this.oriList(this.songList);
        this.playIndex(index);
      },
      ...mapMutations({
        oriList: 'SET_ORI_LIST',
        playList: 'SET_PLAY_LIST',
        playIndex: 'SET_PLAY_INDEX'
      })
    }
  }
</script>
<!--
    data(){
      return {}
    },
    components: {},
    created(){},
    mounted(){},
    activated(){},
    watch: {},
    computed:{},
    filters: {},
    methods: {}
-->
