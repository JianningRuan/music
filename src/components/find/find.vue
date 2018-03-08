<template>
  <div class="">
    <slider>
      <div v-for="bannerItem in banner">
        <img :src="bannerItem.pic" />
      </div>
    </slider>
    aaa
  </div>
</template>
<script type="text/ecmascript-6">
  import './find.scss'
  import slider from './../../until/slider/slider'
  export default {
    data() {
      return {
        banner: []
      }
    },
    components: {
      slider
    },
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
