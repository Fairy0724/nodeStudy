// 1.引入http模块
const http = require('http')

// 2.创建http服务对象
const server = http.createServer((request, response) => { 
  // request:请求对象  response:响应对象
  // 设置响应头utf-8编码
  response.setHeader('Content-Type', 'text/html; charset=utf-8')
  // 设置响应体
  response.end('你好，http服务')
})

// 3.绑定端口号，启动服务
server.listen(9000, () => {
  console.log('服务启动成功')
})

// http默认端口号 80 可以省略不写
// https默认端口号 443 可以省略不写