/**
 * Created by Administrator on 2018/3/13.
 */
import * as types from './mutations-type'

const mutations = {
  [types.SET_PLAY_TYPE](state, playType){
    state.playType = playType
  },
  [types.SET_ORI_LIST](state, oriList){
    state.oriList = oriList
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
  }
};

export default mutations
