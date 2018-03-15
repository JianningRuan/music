/**
 * Created by Administrator on 2018/3/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import * as getters from './getter'

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  state,
  mutations
})
