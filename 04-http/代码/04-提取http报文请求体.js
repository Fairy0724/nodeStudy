// 1.引入http模块
const http = require('http')

// 2.创建http服务对象
const server = http.createServer((request, response) => {
  // request:请求对象  response:响应对象
  // 1.声明变量
  let body = ''
  // 2.绑定data事件，接收请求体数据
  request.on('data', chunk => {
    // 3.将每次接收的数据拼接到body变量中
    body += chunk
  })
  // 4.end事件，表示请求体数据接收完毕
  request.on('end', () => {
    // 5.打印请求体数据
    console.log(body)
    // 6.响应
    response.end('ok')
  })
  // 设置响应体
  response.end('http')
})

// 3.绑定端口号，启动服务
server.listen(9000, () => {
  console.log('服务启动成功')
})