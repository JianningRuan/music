<template>
  <div class="list">
    <div class="list-item flex" v-for="(song, index) in songList" v-on:click="clickItem(index)">
      <div class="list-index">{{index + 1}}</div>
      <div class="list-cont flex1 flex flex-c justify-center">
        <h2 class="list-name">{{song.name}}</h2>
        <p class="list-artist"><span v-for="artist in song.artists">{{artist.name}}</span></p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import './list.scss'
  export default {
    props: {
      songList: {
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
      clickItem(index){
        this.$emit('clickIt', index);
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
