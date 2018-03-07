<template>
  <div class="main">
    <div class="m-nav">
      <router-link to="/music/find">发现</router-link>
      <router-link to="/music/find">我的</router-link>
      <router-link to="/music/find">电台</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
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
