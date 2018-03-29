/**
 * Created by Administrator on 2018/3/8.
 */

let baseUrl = '';
let Api = {
  getBanner: `/banner`,
  getPersonalized: `/personalized`,
  getRecommend: `/dj/recommend`,
  getTopArtists: `/top/artists`,
  getPlaylistDetail: `/playlist/detail`, // 歌单详情
  getNewSong: `/personalized/newsong`,
  getTopAlbum: `/top/album`, // 新碟上架
  getTopPlaylist: `/top/playlist`, // 歌单 ( 网友精选碟 )
  getMVList: `/mv/first` // mv列表
};
export default Api;
