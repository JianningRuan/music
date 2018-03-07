<template>
  <div class="header flex">
    <div class="l-nav">
      <a class="l-nav-btn iconfont icon-nav"></a>
    </div>
    <div class="h-nav-list flex1 flex justify-center">
      <router-link class="h-nav" to="/">
        <a class="iconfont icon-video"></a>
      </router-link>
      <router-link class="h-nav" to="/music">
        <a class="iconfont icon-music active"></a>
      </router-link>
      <router-link class="h-nav" to="/">
        <a class="iconfont icon-zone"></a>
      </router-link>
    </div>
    <div class="search-btn iconfont icon-search"></div>
  </div>
</template>
<script>
  import './header.scss'

  export default {
    data(){
      return {

      }
    },
    components: {},
    created(){},
    mounted(){},
    watch: {},
    filters: {},
    methods: {}
  }
</script>
