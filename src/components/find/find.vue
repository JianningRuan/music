<template>
  <div class="flex1 overflow-auto">
    <div class="banner" ref="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="bannerItem in banner" :key="bannerItem.picUrl">
          <img ref="bannerImg" :src="bannerItem.picUrl" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="box">
      <div class="box-tit flex flex-align-center" @click="goList('hot')">
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
    <div class="box">
      <div class="box-tit flex flex-align-center" @click="goList('new')">
        <span class="t-span"></span>
        新碟上架
        <span class="arrow-icon iconfont"></span>
      </div>
      <div class="box-cont box-list-wrapper disc-wrapper">
        <div class="disc-item" v-for="discItem in newDisc" v-on:click="goDetail(discItem)">
          <div class="disc-pic">
            <img :src="discItem.blurPicUrl" />
          </div>
          <div class="disc-name">{{discItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import './find.scss'
  export default {
    data() {
      return {
        banner: [],
        disc: [],
        newDisc: []
      }
    },
    components: {},
    created() {
      this.$fetch(this.$Api.getBanner).then((res)=>{
        if (res.code === 200) {
          this.banner = res.banners;
        }
      });

      let getRecommendParams = {
        offset: 0,
        limit: 6
      };
      this.$fetch(this.$Api.getPersonalized, getRecommendParams).then((res)=>{
        if (res.code === 200) {
          this.disc = res.result;
        }
      });

      let newDiscParams = {
        offset: 0,
        limit: 6
      };
      this.$fetch(this.$Api.getTopAlbum, newDiscParams).then((res)=>{
        if (res.code === 200) {
          this.newDisc = res.albums;
        }
      })
    },
    mounted() {},
    watch: {},
    filters: {},
    methods: {
      goDetail(item) {
        let discParams = {
          id: item.id
        };
        this.$router.push({
          path: `/discDetail`,
          query: discParams
        })
      },
      goList(val){
        let typeParams = {
          type: val
        };
        this.$router.push({
          path: `/discList`,
          query: typeParams
        })
      }
    }
  }
</script>
