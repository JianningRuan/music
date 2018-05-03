<template>
  <div class="flex1 overflow-auto flex flex-c">
    <pageHead :title="title"></pageHead>
    <div class="flex1 overflow-auto" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <listToDisc :list="discList" @clickDisc="goDetail"></listToDisc>
      <div class="bottom-loading-msg" v-show="loading">正在加载ing...</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import './disc-list.scss'
  import pageHead from './../../until/head/head'
  import listToDisc from './../../until/listToDisc/list-to-disc'
  import { showHeadMinxin } from './../../js/mixin'
  export default {
    data(){
      return {
        title: '推荐歌单',
        loading: false,
        discList: [],
        offset: 0, // 页码
        type: 'hot', // 加载类型
        total: 0
      }
    },
    mixins: [ showHeadMinxin ],
    components: {
      pageHead,
      listToDisc
    },
    created(){
      this.type = this.$route.query.type;
      if (this.type === 'hot') {
        this.title = '推荐歌单'
      }else {
        this.title = '新碟上架';
      }
      //this.getDiscList();
    },
    mounted(){},
    activated(){},
    watch: {},
    computed:{},
    filters: {},
    methods: {
      //加载
      getDiscList(){
        let getRecommendParams = {
          offset: this.offset,
          limit: 30
        };
        this.$fetch(this.$Api.getPersonalized, getRecommendParams).then((res)=>{
          if (res.code === 200) {
            this.discList = this.discList.concat(res.result);
            this.total = res.total;
            this.offset++;
          }
          this.loading = false;
        });
      },
      // 加载新
      getNewDiscList(){
        let newDiscParams = {
          offset: this.offset,
          limit: 30
        };
        this.$fetch(this.$Api.getTopAlbum, newDiscParams).then((res)=>{
          if (res.code === 200) {
            this.discList = this.discList.concat(res.albums);
            this.total = res.total;
            this.offset++;
          }
          this.loading = false;
        })
      },
      loadMore(){
        console.log('到底');
        this.loading = true;
        if (this.total !== 0 && this.offset * 30 >= this.total) {
          return
        }
        if (this.type === 'hot') {
          this.getDiscList();
        }else {
          this.getNewDiscList();
        }
      },
      goDetail(item) {
        let discParams = {
          id: item.id
        };
        this.$router.push({
          path: `/discDetail`,
          query: discParams
        })
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
