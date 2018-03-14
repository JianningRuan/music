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
              <img :src="discDetail.creator.avatarUrl"/>
            </span>
            {{discDetail.creator.nickname}}
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
      console.log(this.id);
      let discParams = {
        id: this.id
      };
      this.$fetch(this.$Api.getPlaylistDetail, discParams).then((res)=>{
        console.log(res);
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
        console.log(item, index)
      }
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
