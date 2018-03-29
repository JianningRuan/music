<template>
  <div class="disc-list-wrapper flex flex-wrap-w">
    <div class="disc-item" v-for="listItem in list" @click="getDetail(listItem)">
      <div class="disc-pic">
        <img :src="listItem.picUrl" />
      </div>
      <div class="disc-name">{{listItem.name}}</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import './list-to-disc.scss'
  export default {
    props: {
      list: {
        type: Array,
        default: []
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
      getDetail(item) {
        this.$emit('clickDisc', item);
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
