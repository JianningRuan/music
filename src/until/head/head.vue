<template>
  <div class="head" :class="{titBg: isShowTitBg}">
    <a class="return iconfont icon-left" v-on:click="goBack"></a>
    <h1>{{title}}</h1>
  </div>
</template>
<script type="text/ecmascript-6">
  import './head.scss'
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      isDefaultReturn: {
        type: Boolean,
        default: true
      },
      isShowTitBg: {
        type: Boolean,
        default: true
      }
    },
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
    methods: {
      goBack(){
        if (this.isDefaultReturn) {
          this.$emit('readyReturn');
          this.$router.go(-1);
        }else {
          this.$emit('readyReturn');
        }
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
