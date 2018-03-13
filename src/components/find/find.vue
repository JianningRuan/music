<template>
  <div>
    <div class="banner" ref="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="bannerItem in banner" :key="bannerItem.targetId">
          <img ref="bannerImg" :src="bannerItem.pic" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="box">
      <div class="box-tit flex flex-align-center">
        <span class="t-span"></span>
        推荐歌单
        <span class="arrow-icon iconfont"></span>
      </div>
      <div class="box-cont box-list-wrapper disc-wrapper">
        <div class="disc-item" v-for="discItem in disc" v-on:click="goDetail(discItem)">
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
        if (res.code == 200) {
          this.banner = res.banners;
        }
       });

      let getRecommendParams = {
        'offset': 0,
        'limit': 6
      };
      this.$fetch(this.$Api.getPersonalized, getRecommendParams).then((res)=>{
        if (res.code == 200) {
          this.disc = res.result;
        }
      })
    },
    mounted() {
    },
    watch: {},
    filters: {},
    methods: {
      goDetail(item) {
        console.log(item)
      }
    }
  }
</script>
