export default function ({ $axios, redirect, store, error, router, route }) {
  $axios.defaults.timeout = 10000 // 设置超时时间 默认5000

  $axios.all = function all(promises) {
    return Promise.all(promises)
  }

  $axios.spread = function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr)
    }
  }

  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  $axios.onResponse((res) => {
    console.log(res)
  })
  $axios.onError((error) => {
    console.log(error)
  })
}
