// 1.引入http模块
const http = require('http')

// 2.创建http服务对象
const server = http.createServer((request, response) => {
  // request:请求对象  response:响应对象

  // 获取请求方法
  console.log('请求方法:', request.method)
  // 获取请求url
  // 只包含路径和查询字符串
  console.log('请求url:', request.url)
  // 获取http版本号
  console.log('http版本号:', request.httpVersion)
  // 获取请求头对象
  console.log('请求头对象:', request.headers)
  // 获取请求头host的值
  console.log('请求头host的值:', request.headers.host)
  // 设置响应体
  response.end('http')
})

// 3.绑定端口号，启动服务
server.listen(9000, () => {
  console.log('服务启动成功')
})