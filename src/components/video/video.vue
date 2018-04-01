<template>
  <div class="main flex1 flex flex-c">
    <div class="mv-nav-list"></div>
    <div class="flex1 overflow-auto">
      <div class="mv-item" v-for="mv in videoList" @click="goDetail(mv)">
        <div class="mv-pic">
          <img :src="mv.cover" />
          <div class="play-icon iconfont icon-play"></div>
        </div>
        <div class="mv-cont flex">
          <div class="mv-name flex1 flex flex-align-center">
            <h2>{{mv.name}}</h2>
          </div>
          <div class="mv-opa flex flex-c justify-center flex-align-center">
            <span class="like-icon iconfont icon-like"></span>
            <span class="like-num">{{mv.playCount}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import './video.scss'
  export default {
    data(){
      return {
        videoList: []
      }
    },
    components: {},
    created(){
      this.$fetch(this.$Api.getMVList).then((res)=>{
        if (res.code == 200) {
          this.videoList = res.data;
        }
      })
    },
    mounted(){},
    activated(){},
    watch: {},
    computed:{},
    filters: {},
    methods: {
      goDetail(mv){
        console.log(mv);
        let mvParams = {
          id: mv.id
        };
        this.$router.push({
          path: '/videoPlay',
          query: mvParams
        })
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
