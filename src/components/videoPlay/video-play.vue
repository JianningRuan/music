<template>
  <div class="flex1 flex flex-c">
    <div class="video">
      <video controls="controls" autoplay="autoplay" name="media" width="100%" :src="mvUrl"></video>
    </div>
    <div class="flex1 overflow-auto">

    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import './video-play.scss'
  export default {
    data(){
      return {
        mvId: '',
        mv: {},
        mvUrl: ''
      }
    },
    components: {},
    created(){
      this.mvId = this.$route.query.id;
      console.log(this.mvId);
      let mvParams = {
        mvid: this.mvId
      };
      this.$fetch(this.$Api.getMV, mvParams).then((res)=>{
        console.log(res);
        if (res.code === 200) {
          this.mv = res.data;
          this.mvUrl = this.mv.brs[480];
          let mvUrlParams = {
            url: this.mv.brs[480]
          };
          console.log(mvUrlParams);
          this.$fetch(this.$Api.getMVUrl, mvUrlParams).then((res)=>{
            console.log(res)
          })
        }
      })

      // 获取评论
      let mvIdParams = {
        id: this.id
      };
      this.$fetch(this.$Api.getCommentMv, mvIdParams).then((res)=>{

      });

      // 获取推荐mv
      this.$fetch(this.$Api.getPersonalizedMv).then((res)=>{

      })
    },
    mounted(){},
    activated(){},
    watch: {},
    computed:{},
    filters: {},
    methods: {}
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
