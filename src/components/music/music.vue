<template>
  <div class="main flex1 flex flex-c">
    <div class="m-nav flex justify-center">
      <div class="nav-item" :class="{active: currentTap == 0}" @click="clickTap(0)">
        <router-link to="/music/find">发现</router-link>
      </div>
      <div class="nav-item" :class="{active: currentTap == 1}" @click="clickTap(1)">
        <router-link to="/music/findMy">我的</router-link>
      </div>
      <div class="nav-item" :class="{active: currentTap == 2}" @click="clickTap(2)">
        <router-link to="/music/findRadio">电台</router-link>
      </div>
    </div>
    <transition name="slide" mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  import './music.scss'
  import { mapMutations } from 'vuex'
  export default {
    data() {
      return {
        currentTap: 0
      }
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
      clickTap(val){
        this.currentTap = val;
      },
      ...mapMutations({
        showHead: 'SET_SHOW_HEAD'
      })
    }
  }
</script>
