import axios from 'axios'
// import qs from 'qs-component'
import router from '../router'

/*export function detch(config) {
  return new Promise((resolve, reject)=>{

  })
}*/
// 配置axios
const Axios = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});

if (process.env.NODE_ENV == 'development') {
  Axios.defaults.baseURL = 'http://localhost:3000';
} else if (process.env.NODE_ENV == 'debug') {
  Axios.defaults.baseURL = 'http://localhost:3000';
} else if (process.env.NODE_ENV == 'production') {
  Axios.defaults.baseURL = 'http://localhost:3000';
}

//POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use((config)=>{
  // 可以加载loading
  /*console.log(config);
  if (config.method === "post" || config.method === "put" || config.method === "delete" ){
    // 序列化
    config.data = qs.stringify(config.data);
  }*/
  return config
});

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use((res)=>{
  // 可在此去掉loading
  console.log(res);
  //对响应数据做些事
  //可弹窗提示错误信息
  return res
}, (error)=>{
  // 用户登录的时候会拿到一个基础信息,比如用户名,token,过期时间戳
  // 直接丢localStorage或者sessionStorage
  /*if (!window.localStorage.getItem('userInfo')){
    router.push({
      path: '/login'
    })
  }else {
  // 若是有基础信息的情况下,判断时间戳和当前的时间,若是当前的时间大于服务器过期的时间
  // 乖乖的返回去登录页重新登录

  return Promise.reject(error);
  }*/
  return Promise.reject(error);
});

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function fetch(url, params) {
  return new Promise((resolve,reject)=>{
    Axios.get(url, {params: params}).then((response)=>{
      resolve(response.data);
    }).catch((err)=>{
      reject(err)
    })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.post(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

