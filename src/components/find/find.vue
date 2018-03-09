<template>
  <div class="aa">
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="bannerItem in banner" :key="bannerItem.targetId">
          <img :src="bannerItem.pic" />
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!--<slider :loop="true" :autoPlay="true">
      <div v-for="bannerItem in banner">
        <img :src="bannerItem.pic" />
      </div>
    </slider>-->
    aaa
  </div>
</template>
<script type="text/ecmascript-6">
  import './find.scss'
  // import slider from './../../until/slider/slider'
  //import { Swipe, SwipeItem } from 'mint-ui'
  export default {
    data() {
      return {
        banner: []
      }
    },
    components: {},
    created() {
      this.$fetch(this.$Api.getBanner).then((res)=>{
       console.log('结果', res);
        if (res.code == '200') {
          this.banner = res.banners;
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
