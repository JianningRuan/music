<template>
  <div class="flex1 overflow-auto">

    <div class="sys-box">
      <div class="sys-disc">
        <div class="s-disc-pic"></div>
        <div class="s-disc-cont flex1">本地音乐</div>
      </div>
    </div>

    <div class="my-box">
      <div class="m-tit">我创建的歌单</div>
      <div class="m-cont">

      </div>
    </div>

    <div class="my-box">
      <div class="m-tit">收藏的歌单</div>
      <div class="m-cont">
        <div class="m-disc flex" v-for="disc in collectionDisc" @click="goDetail(disc)">
          <div class="m-disc-pic">
            <img :src="disc.coverImgUrl" />
          </div>
          <div class="m-disc-cont flex1 flex flex-c justify-center">
            <h2>{{disc.name}}</h2>
            <p>共{{disc.playCount}}首</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import './find-my.scss'
  export default {
    data() {
      return {
        collectionDisc: [] // 收藏歌单
      }
    },
    components: {},
    created() {
      let discParams = {
        limit: 10,
        order: 'new'
      };
      this.$fetch(this.$Api.getTopPlaylist, discParams).then((res)=>{
        if (res.code == 200){
          this.collectionDisc = res.playlists;
        }
      })
    },
    mounted() {
    },
    watch: {},
    filters: {},
    methods: {
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
