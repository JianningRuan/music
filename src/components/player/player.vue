<template>
  <div>
    <div class="player"></div>
    <div class="mini-player"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
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
    computed: {
      ...mapGetters([
        'oriList',
        'playIndex'
      ])
    },
    filters: {},
    methods: {}
  }
</script>
