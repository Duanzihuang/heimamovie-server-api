import axios from 'axios'

const request = axios.create({
  baseURL: 'http://api.douban.com/v2/movie'
})

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    if (!config.params) {
      config.params = {}
    }
    config.params.apikey = '0df993c66c0c636e29ecbb5344252a4a'
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

export default request
