import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

import { fetch, post} from './api/http'
import Api from './api/Api'

// 快速点击
import fastClick from 'fastclick'
fastClick.attach(document.body);

// 图片懒加载
import VueLazyLoad from 'vue-lazyload'
/*Vue.use(VueLazyLoad, {
  error: require( './assets/images/error.jpg'),//这个是请求失败后显示的图片
  loading: require('./assets/images/load.jpg')//这个是加载的loading过渡效果
})*/

Vue.config.productionTip = false;

//Vue.prototype.$ajax = axios
Vue.prototype.$fetch = fetch;
Vue.prototype.$post = post;
Vue.prototype.$Api = Api;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
