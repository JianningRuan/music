/**
 * Created by Administrator on 2018/3/15.
 */

/*export const singer = function (state){
 return state.singer
 }*/

export const showHead = state => state.showHead;

export const playType = state => state.playType;

export const playList = state => state.playList;

export const play = state => state.play;

export const playIndex = state => state.playIndex;

export const currentSong = (state)=>{
  return state.playList[state.playIndex] || {}
};

export const fullPage = state => state.fullPage;
