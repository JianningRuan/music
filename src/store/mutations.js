/**
 * Created by Administrator on 2018/3/13.
 */
import * as types from './mutations-type'

const mutations = {
  [types.SET_SHOW_HEAD](state, showHead) {
    state.showHead = showHead
  },
  [types.SET_PLAY_TYPE](state, playType){
    state.playType = playType
  },
  [types.SET_PLAY_LIST](state, playList){
    state.playList = playList
  },
  [types.SET_PLAY](state, play){
    state.play = play
  },
  [types.SET_PLAY_INDEX](state, playIndex){
    state.playIndex = playIndex
  },
  [types.SET_CURRENT_SONG](state, currentSong){
    state.currentSong = currentSong
  },
  [types.SET_FULL_PAGE](state, fullPage){
    state.fullPage = fullPage
  }
};

export default mutations
