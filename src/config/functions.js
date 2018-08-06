// import Vue from 'vue'
import * as config from './constants'
import api from '../api'
import axios from 'axios'

let base = config.HOST_SITE
axios.interceptors.request.use((config) => {
  return config
}, (err) => {
  alert('请求超时')
  return Promise.resolve(err)
})

axios.interceptors.response.use((data) => {
  // 数据统一校验处理
  return data
}, (err) => {
  // 数据异常统一处理
  if (err.response.cod === 504 || err.response.cod === 404) {
    alert('服务器炸了')
  } else if (err.response.cod === 403) {
    alert('权限不足,请联系管理员')
  } else {
    alert('未知错误')
  }
  return Promise.resolve(err)
})

function post (action, params = {}) {
  return axios({
    method: 'post',
    url: `${base}${api[action].url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}

function get (action) {
  return axios({
    method: 'get',
    url: `${base}${api[action].url}`
  })
}

function formatFileSize (fileSize) {
  let fs = ''
  if (fileSize < 1024) {
    fs = fileSize + 'Byte'
  } else if (fileSize < 1024 * 1024 && fileSize >= 1024) {
    fs = Math.ceil(fileSize / 1024) + 'KB'
  } else {
    fs = Math.ceil(fileSize / (1024 * 1024)) + 'M'
  }
  return fs
}

function ssetItem (obj, aKey = null) {
  let key = new Date().getTime()
  if (aKey) { key = aKey }
  window.sessionStorage.setItem(key, JSON.stringify(obj))
  return key
}

function sgetItem (key) {
  let result = window.sessionStorage.getItem(key)
  if (result !== undefined) {
    return JSON.parse(result)
  }
  return key
}

function lsetItem (obj, aKey = null) {
  let key = new Date().getTime()
  if (aKey) { key = aKey }
  window.localStorage.setItem(key, JSON.stringify(obj))
  return key
}

function lgetItem (key) {
  return JSON.parse(window.localStorage.getItem(key))
}

function srmItem (key) {
  return window.sessionStorage.removeItem(key)
}

function lrmItem (key) {
  return window.localStorage.removeItem(key)
}

function redirect (path) {
  window.location.href = path
}

function redirectHome () {
  window.location.href = '/'
}

function fileType (extension) {
  if (!extension) {
    return 'other'
  }
  let type = 'other'
  switch (extension.toString().toLowerCase()) {
    case 'pdf':
      type = 'pdf'
      break
    case 'doc':
    case 'docx':
      type = 'doc'
      break
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'gif':
    case 'bmp':
      type = 'img'
      break
    case 'mp3':
    case 'wav':
      type = 'audio'
      break
    case 'ppt':
    case 'pptx':
      type = 'ppt'
      break
    case 'mp4':
    case 'rmvb':
    case 'rm':
    case 'avi':
    case 'mpeg4':
    case 'wmv':
    case 'mov':
      type = 'video'
      break
    case 'xls':
    case 'xlsx':
      type = 'xls'
      break
    default:
      break
  }
  return type
}

function formatDate (date) {
  if (!date) { return '' }
  let dateStr = date.toLocaleDateString()
  let reg = new RegExp('/', 'g')
  return dateStr.replace(reg, '-')
}

function getTs (date) {
  if (!date) {
    console.error('date 对象不能为空')
    return ''
  }
  return date.getTime() / 1000
}

// 年月日
function setDate (time) {
  let date = new Date(time * 1000)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  if (month < 10) {
    month = '0' + month.toString()
  }
  if (day < 10) {
    day = '0' + day.toString()
  }
  return year + '-' + month + '-' + day
}

// 年月日小时
function setDetailDate (time) {
  let date = new Date(time * 1000)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let min = date.getMinutes()
  if (month < 10) {
    month = '0' + month.toString()
  }
  if (day < 10) {
    day = '0' + day.toString()
  }
  if (hour < 10) {
    hour = '0' + hour.toString()
  }
  if (min < 10) {
    min = '0' + min.toString()
  }
  return year + '-' + month + '-' + day + ' ' + hour + ':' + min
}

// 获取地区
function getAddress (val, name, filter) {
  if (val.length >= 1) {
    filter.provinceCode = val[0]
    if (val.length >= 2) {
      filter.cityCode = val[1]
      if (val.length >= 3) {
        filter.districtCode = val[2]
      }
    }
  }
  console.log(filter)
}

export {
  post, get, formatDate, formatFileSize, ssetItem, sgetItem, lsetItem, lgetItem, srmItem, lrmItem, redirectHome, fileType, redirect, setDate, setDetailDate, getTs, getAddress
}
