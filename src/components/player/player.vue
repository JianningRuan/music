<template>
  <div v-show="oriList.length">
    <div class="player fullPage flex" v-if="fullPage">

    </div>
    <div class="mini-player" v-else>222</div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    data() {
      return {

      }
    },
    components: {},
    created() {
    },
    mounted() {
    },
    watch: {
      oriList(val) {

      }
    },
    computed: {
      ...mapGetters([
        'oriList',
        'playIndex'
      ])
    },
    filters: {},
    methods: {
      ...mapMutations({
        fullPage: 'SET_FULL_PAGE'
      })
    }
  }
</script>
