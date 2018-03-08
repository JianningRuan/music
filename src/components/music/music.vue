<template>
  <div class="main flex1">
    <div class="m-nav flex justify-center">
      <router-link to="/music/find">
        <div class="nav-item active">发现</div>
      </router-link>
      <router-link to="/music/find">
        <div class="nav-item">我的</div>
      </router-link>
      <router-link to="/music/find">
        <div class="nav-item">电台</div>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import './music.scss'
  export default {
    data() {
      return {}
    },
    components: {},
    created() {
    },
    mounted() {
    },
    watch: {},
    filters: {},
    methods: {}
  }
</script>
