<template>
  <div class="flex1 overflow-auto">
    <pageHead class="top-header" :title="title" :isShowTitBg="isShowTitBg"></pageHead>
    <div class="top-header-mask" :style="{opacity: opacity}"></div>
    <scroll class="height" ref="scroll" :probeType="probeType" :listenScroll="listenScroll" @scroll="toScroll">
      <div>
        <div class="disc-msg-wrapper" ref="discMsgWrapper">
          <div class="disc-bg" :style="{ backgroundImage: 'url(' + discDetail.coverImgUrl + ')'}"></div>
          <div class="disc-msg flex">
            <div class="disc-pic">
              <img :src="discDetail.coverImgUrl"/>
            </div>
            <div class="disc-msg-cont flex1">
              <div class="disc-name">{{discDetail.name}}</div>
              <div class="disc-creator flex flex-align-center">
            <span class="disc-creator-pic">
              <img v-if="discDetail && discDetail.creator" :src="discDetail.creator.avatarUrl"/>
            </span>
                <span v-if="discDetail && discDetail.creator">{{discDetail.creator.nickname}}</span>
              </div>
            </div>
          </div>
        </div>
        <list :songList="songList" @clickIt="clickIt"/>
      </div>
    </scroll>
  </div>
</template>
<script type="text/ecmascript-6">
  import './disc-detail.scss'
  import pageHead from './../../until/head/head'
  import scroll from './../../until/scroll/scroll'
  import list from './../../until/list/list'
  import { mapMutations } from 'vuex'
  import { showHeadMinxin } from './../../js/mixin'
  import { getSongMsg } from './../../js/common'
  export default {
    data(){
      return {
        id: '',
        title: '歌单',
        isShowTitBg: false,
        discDetail: {},
        songList: [],
        probeType: 3,
        listenScroll: true,
        opacity: 0,
        titHeight: 0
      }
    },
    mixins: [ showHeadMinxin ],
    components: {
      pageHead,
      list,
      scroll
    },
    created(){
      this.id = this.$route.query.id;
      let discParams = {
        id: this.id
      };
      this.$fetch(this.$Api.getPlaylistDetail, discParams).then((res)=>{
        if (res.code == 200) {
          this.discDetail = res.result;
          let songList = [];
          res.result.tracks.map((item)=>{
            let song = getSongMsg(item);
            songList.push(song);
          });
          this.songList = songList;
          this.$nextTick(()=>{
            this.$refs.scroll.refresh();
            this.titHeight = this.$refs.discMsgWrapper.offsetHeight;
          });

        }
      })
    },
    mounted(){},
    activated(){},
    watch: {},
    computed:{},
    filters: {},
    methods: {
      clickIt(index) {
        let song = this.songList[index];
        this.setOriList(this.songList);
        this.setPlayIndex(index);
        this.setFullPage(true);
      },
      toScroll(state){
        let y = state.y;
        let opacity = y/(-140);
        opacity = opacity < 0 ? 0 : opacity;
        opacity = opacity> 1 ? 1 : opacity;
        this.opacity = opacity;
      },
      ...mapMutations({
        setOriList: 'SET_ORI_LIST',
        setPlayList: 'SET_PLAY_LIST',
        setPlayIndex: 'SET_PLAY_INDEX',
        setFullPage: 'SET_FULL_PAGE'
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
