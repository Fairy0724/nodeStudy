/**
 * 创建一个 HTTP 服务，端口为 9000，满足如下需求
 * GET  /index.html        响应  page/index.html 的文件内容
 * GET  /css/app.css       响应  page/css/app.css 的文件内容
 * GET  /images/logo.png   响应  page/images/logo.png 的文件内容
 */
// 引入http模块
const http = require('http')
// 引入fs模块
const fs = require('fs')
// 引入path模块
const path = require('path')
// 声明变量
let mimes = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  png: 'image/png',
  jpg: 'image/jpeg',
  gif: 'image/gif',
  mp4: 'video/mp4',
  mp3: 'audio/mpeg',
  json: 'application/json'
}

// 创建http服务对象
const server = http.createServer((request, response) => {
  if(request.method !== 'GET') {
    response.statusCode = 405
    response.end('<h1>405 Method Not Allowed</h1>')
    return
  }
  // 获取url路径
  const { pathname } = new URL(request.url, 'http://localhost')
  // 根目录
  let root = __dirname + '/page'
  // 拼接文件路径
  let filePath = root + pathname
  // 读取文件 异步
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // 设置字符集
      response.setHeader('Content-Type', 'text/html; charset=utf-8')
      switch (err.code) {
        case 'ENOENT':
          response.statusCode = 404
          response.end('<h1>404 Not Found</h1>')
          return
        case 'EISDIR':
          response.statusCode = 403
          response.end('<h1>403 Forbidden</h1>')
          return
        default:
          response.statusCode = 500
          response.end('<h1>500 Internal Server Error</h1>')
          return
      }
    }
    // 设置响应头类型
    // 1.获取后缀名
    let extname = path.extname(filePath).slice(1)
    // 2.获取类型
    // application/octet-stream 二进制流文件（下载）
    let mimetype = mimes[extname] || 'application/octet-stream'
    // 3.设置响应头类型--优先级高于meta标签
    if (extname === 'html')
      response.setHeader('Content-Type', mimetype + '; charset=utf-8')
    else
      response.setHeader('Content-Type', mimetype)

    // 响应文件内容
    response.end(data)

  })
})

// 绑定端口号，启动服务
server.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})