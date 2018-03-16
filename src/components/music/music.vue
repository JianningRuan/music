<template>
  <div class="main flex1 flex flex-c">
    <div class="m-nav flex justify-center">
      <router-link to="/music/find">
        <div class="nav-item active">发现</div>
      </router-link>
      <router-link to="/music/findMy">
        <div class="nav-item">我的</div>
      </router-link>
      <router-link to="/music/findRadio">
        <div class="nav-item">电台</div>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import './music.scss'
  import { mapMutations } from 'vuex'
  export default {
    data() {
      return {}
    },
    components: {},
    created() {
    },
    mounted() {
      this.showHead(true);
    },
    watch: {},
    filters: {},
    methods: {
      ...mapMutations({
        showHead: 'SET_SHOW_HEAD'
      })
    }
  }
</script>
