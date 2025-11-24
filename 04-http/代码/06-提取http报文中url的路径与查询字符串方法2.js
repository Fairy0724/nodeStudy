// 引入http模块
const http = require('http')
// 1.引入url模块
const url = require('url')

// 创建http服务对象
const server = http.createServer((request, response) => {
  // request:请求对象  response:响应对象
  // 1.实例化URL对象
  let url = new URL(request.url, 'http://localhost')
  // 输出路径
  console.log(url.pathname)
  // 输出查询kw字符串
  console.log(url.searchParams.get('kw'))
  // 设置响应体
  response.end('url new way')
})

// 绑定端口号，启动服务
server.listen(9000, () => {
  console.log('服务启动成功')
})