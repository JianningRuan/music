<template>
  <div>
    <pageHead :title="title" :isShowTitBg="isShowTitBg"></pageHead>
    <div></div>
    <div></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import './disc-detail.scss'
  import pageHead from './../../until/head/head'
  export default {
    data(){
      return {
        id: '',
        title: '',
        isShowTitBg: false
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
        console.log(res)
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
