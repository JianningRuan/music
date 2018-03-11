<template>
  <div class="aa">
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="bannerItem in banner" :key="bannerItem.targetId">
          <img :src="bannerItem.pic" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="box">
      <div class="box-tit flex flex-align-center">
        <span class="t-span"></span>
        推荐歌单
        <span class="arrow-icon iconfont"></span>
      </div>
      <div class="box-cont disc-wrapper">
        <div class="disc-item fl" v-for="discItem in disc">
          <div class="disc-pic">
            <img :src="discItem.picUrl"/>
            <div class="disc-l-num">{{discItem.playCount}}</div>
          </div>
          <div class="disc-name">{{discItem.name}}</div>
        </div>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import './find.scss'
  // import slider from './../../until/slider/slider'
  //import { Swipe, SwipeItem } from 'mint-ui'
  export default {
    data() {
      return {
        banner: [],
        disc: []
      }
    },
    components: {},
    created() {
      this.$fetch(this.$Api.getBanner).then((res)=>{
       console.log('结果', res);
        if (res.code == 200) {
          this.banner = res.banners;
        }
       })

      this.$fetch(this.$Api.getPersonalized).then((res)=>{
        console.log(res);
        if (res.code == 200) {
          this.disc = res.result;
        }
      })
    },
    mounted() {
    },
    watch: {},
    filters: {},
    methods: {}
  }
</script>
