import axios from 'axios'
import qs from 'qs'

const http = axios
// http.defaults.timeout = 10000;
http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export { http, qs }
