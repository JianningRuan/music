<template>
  <div class="header flex">
    <div class="l-nav">
      <a class="l-nav-btn iconfont icon-nav"></a>
    </div>
    <div class="h-nav-list flex1 flex justify-center">
      <router-link class="h-nav" to="/video">
        <div class="iconfont icon-video" :class="{active: currentTap == 0}" @click="clickTap(0)"></div>
      </router-link>
      <router-link class="h-nav" to="/music">
        <div class="iconfont icon-music" :class="{active: currentTap == 1}" @click="clickTap(1)"></div>
      </router-link>
      <router-link class="h-nav" to="/zone">
        <div class="iconfont icon-zone" :class="{active: currentTap == 2}" @click="clickTap(2)"></div>
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
        currentTap: 1
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
