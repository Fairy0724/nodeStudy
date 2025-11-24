// 引入http模块
const http = require('http')
// 创建http服务对象
const server = http.createServer((request, response) => { 
  // 1.设置响应状态码
  response.statusCode = 200
  // 2.设置响应描述信息
  response.statusMessage = 'OK'
  // 3.设置响应头
  response.setHeader('Content-Type', 'text/html; charset=utf-8')
  // response.setHeader('Author', '荔枝烧蓝莓')
  // 4.设置响应体
  // write()方法可以多次调用，但是end()方法只能调用一次
  response.write('这是响应体')
  response.end('，响应结束了')
})

// 绑定端口号，启动服务
server.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})
