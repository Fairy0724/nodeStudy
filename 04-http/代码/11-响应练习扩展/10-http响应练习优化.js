/**
 * 练习：四行三列表格，隔行换色，点击高亮
* */
// 引入http模块
const http = require('http')
// 引入fs模块
const fs = require('fs')
// 创建http服务对象
const server = http.createServer((request, response) => {
  // 获取url路径
  const { pathname } = new URL(request.url, 'http://localhost')
  // 是根路径时，返回table.html文件
  if (pathname === '/') {
    // 读取table文件
    let table = fs.readFileSync(__dirname + '/10-table.html')
    // 设置响应头和响应体
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.end(table)
  }
  // 是css路径时，返回css样式文件
  else if (pathname === '/index.css') {
    // 读取css文件
    let css = fs.readFileSync(__dirname + '/index.css')
    // 设置响应头和响应体
    response.setHeader('Content-Type', 'text/css; charset=utf-8')
    response.end(css)
  }
  else if (pathname === '/index.js') {
    // 读取js文件
    let js = fs.readFileSync(__dirname + '/index.js')
    // 设置响应头和响应体
    response.setHeader('Content-Type', 'application/javascript; charset=utf-8')
    response.end(js)
  } else {
    response.statusCode = 404
    response.end('404 Not Found')
  }

})

// 绑定端口号，启动服务
server.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})
