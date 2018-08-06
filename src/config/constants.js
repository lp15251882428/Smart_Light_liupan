// import * as functions from './functions'

// const HOST_SITE = 'http://101.132.112.159:5060/top/api/v1'
// 正式服
// const HOST_SITE = 'http://th.watersg.cn/'
// 测试服
const HOST_SITE = 'http://www.yanjin.pro/ld/svr/'

// 主页地址
// const HOME_PAGE = ''

// 定义状态码
const SUCCESS = 1000
const STATUS = 200
const EXPIRED = 1001

// 定义每一页数据
const PAGE_ROWS = 20

// 权限分类
const ROLE_AGENT = '5a1fa67fc3234e16ab41b563' // 代理商
const ROLE_ROOT = '5a1fa6c7c3234e16ab41b564' // 超级管理员

// 文件上传路径
// const FILE_UPLOAD_PATH = HOST_SITE + '/file/upload'
// 富文本上传路径
// const EDITOR_UPLOAD_PATH = FILE_UPLOAD_PATH
// const FILE_UPLOAD_PATH_EX = HOST_SITE + '/file/upload-file'
// const UPLOAD_HEADER = { token: TOKEN }

export {
  HOST_SITE, SUCCESS, STATUS, EXPIRED, PAGE_ROWS, ROLE_AGENT, ROLE_ROOT
}
