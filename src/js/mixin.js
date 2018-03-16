/**
 * Created by Administrator on 2018/3/16.
 */

import { mapGetters, mapMutations } from 'vuex'

export const showHeadMinxin = {
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){
    console.log('qd11');
    this.showHead();
  },
  activated(){},
  watch: {},
  computed:{},
  filters: {},
  methods: {
    showHead(){
      console.log('2');
      this.showHead(false);
    },
    ...mapMutations({
      showHead: 'SET_SHOW_HEAD'
    })
  }
};
