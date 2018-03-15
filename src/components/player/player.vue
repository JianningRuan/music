<template>
  <div>播放器{{playIndex}}</div>
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
