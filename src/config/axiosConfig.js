// import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'
import {
  Message,
  Loading
} from 'element-ui'
import ApiConfig from './api'
// 响应时间
axios.defaults.timeout = 5 * 1000

// 配置cookie
// axios.defaults.withCredentials = true

const defaultHost = ApiConfig.defaultHost
const apis = ApiConfig.apis
const ENV = process.env.ENV_CONFIG
// 本地环境
axios.defaults.baseURL = process.env.API_ROOT
// 测试环境
// axios.defaults.baseURL = 'http://47.93.230.5:9000'

let loadingInstance
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    // 统一封装每次进行请求数据时，执行element-ui的loading组件
    loadingInstance = Loading.service({
      lock: true,
      text: '加载中...',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    return config
  },
  err => {
    loadingInstance.close()
    Message.error('异常错误')
    return Promise.reject(err)
  }
)
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    if (res.data.error.returnCode * 1 === 0) {
      // 如果returnCode码为0，代表成功，loading组件关闭
      loadingInstance.close()
      return res.data || {}
    } else {
      loadingInstance.close()
      Message.error(res.data.error.returnUserMessage)
    }
  },
  err => {
    loadingInstance.close()
    Message.error('异常错误')
    return Promise.reject(err)
  }
)

// 处理不同环境的Url，在原来的基础上做了优化
function getUrl (apiName) {
  console.log(apis)
  console.log(defaultHost)
  console.log(ENV)
  const api = apis[apiName]
  if (ENV === 'dev' && api.serve) {
    return api.serve
  }
  if (api.host && api.host[ENV]) {
    axios.defaults.baseURL = api.host[ENV]
    return api.path
  }
  axios.defaults.baseURL = defaultHost[ENV]
  return api.path
}

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 * 调用: this.$fetchGet('static/mock/welcome.json', param
 */

export function fetchGet (apiName, params = {}) {
  const reqUrl = getUrl(apiName)
  return new Promise((resolve, reject) => {
    axios.get(reqUrl, {
      params: params
    })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
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

export function fetchPost (apiName, data = {}) {
  const reqUrl = getUrl(apiName)
  return new Promise((resolve, reject) => {
    axios.post(reqUrl, Qs.stringify(data), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        resolve(res)
      }, err => {
        reject(err)
      })
  })
}
