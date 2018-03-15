/**
 * Created by Administrator on 2018/3/15.
 */

/*export const singer = function (state){
 return state.singer
 }*/

export const playType = state => state.playType;

export const oriList = state => state.oriList;

export const playList = state => state.playList;

export const play = state => state.play;

export const playIndex = state => state.playIndex;

export const currentSong = (state)=>{
  return state.playList[state.playIndex] || {}
};
