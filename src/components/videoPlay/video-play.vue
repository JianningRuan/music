<template>
  <div class="flex1 overflow-auto flex flex-c">
    <pageHead class="top-header" :title="title"></pageHead>
    <div class="video">
      <video controls="controls" autoplay="autoplay" name="media" width="100%" :src="mvUrl"></video>
    </div>
    <div class="flex1 overflow-auto">
      <div class="mv-introduce">
        <h2 class="mv-name">{{mv.name}}</h2>
        <p class="mv-num">发布：{{mv.publishTime}} | 播放：{{mv.playCount}}</p>
        <div class="mv-desc">{{mv.briefDesc}}</div>
      </div>
      <div class="my-box">
        <div class="m-tit">相关推荐</div>
        <div class="m-cont">
          <div class="r-mv-item flex" v-for="rMv in recommendMVList" @click="goMv(rMv)">
            <div class="r-mv-pic">
              <img :src="rMv.picUrl"/>
              <div class="r-mv-play">{{rMv.playCount}}</div>
            </div>
            <div class="r-mv-cont flex1 flex flex-c justify-center">
              <h2 class="r-mv-name">{{rMv.name}}</h2>
              <p class="r-mv-artist"><span v-for="rArtists in rMv.artists">{{rArtists.name}}</span></p>
            </div>
          </div>
        </div>
      </div>
      <div class="my-box">
        <div class="m-tit">精彩评论</div>
        <div class="m-cont">
          <div class="comment-item flex flex-align-start" v-for="comment in commentList">
            <div class="c-user-pic">
              <img :src="comment.user.avatarUrl"/>
            </div>
            <div class="c-cont flex1">
              <div class="c-user flex flex-align-center">
                <div class="c-user-name flex1 flex flex-c justify-center">
                  <h3>{{comment.user.nickname}}</h3>
                  <p>{{comment.time}}</p>
                </div>
                <div class="c-user-like">
                  {{comment.likedCount}}
                  <span class="like-icon iconfont icon-like"></span>
                </div>
              </div>
              <div class="c-box">
                <div v-html="comment.content"></div>
                <div class="c-comment" v-if="comment.beReplied.length > 0">
                  {{comment.beReplied[0].content}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import './video-play.scss'
  import pageHead from './../../until/head/head'
  export default {
    data(){
      return {
        title: '',
        mvId: '',
        mv: {},
        mvUrl: '',
        recommendMVList: [], // 推荐视频
        commentList: []
      }
    },
    components: {
      pageHead
    },
    created(){
      this.mvId = this.$route.query.id;
      console.log(this.mvId);
      this.getMv();
    },
    mounted(){},
    activated(){},
    watch: {},
    computed:{},
    filters: {},
    methods: {
      getMv(){
        let mvParams = {
          mvid: this.mvId
        };
        this.$fetch(this.$Api.getMV, mvParams).then((res)=>{
          if (res.code === 200) {
            this.mv = res.data;
            this.mvUrl = `http://localhost:3000/mv/url?url=${this.mv.brs[480]}`;
            this.title = this.mv.name;
            let mvUrlParams = {
              url: this.mv.brs[480]
            };
            this.$fetch(this.$Api.getMVUrl, mvUrlParams).then((res)=>{
              console.log(res)
            })
          }
        })

        // 获取评论
        let mvIdParams = {
          id: this.mvId
        };
        this.$fetch(this.$Api.getCommentMv, mvIdParams).then((res)=>{
          if (res.code === 200) {
            this.commentList = res.comments;
          }
        });

        // 获取推荐mv
        this.$fetch(this.$Api.getPersonalizedMv).then((res)=>{
          if (res.code === 200){
            this.recommendMVList = res.result;
          }
        })
      },
      goMv(mv) {
        this.mvId = mv.id;
        this.getMv();
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
