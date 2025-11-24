// 引入http模块
const http = require('http')
// 1.引入url模块
const url = require('url')

// 创建http服务对象
const server = http.createServer((request, response) => {
  // request:请求对象  response:响应对象
  // 解析请求url--true表示将查询字符串转换为对象
  let res = url.parse(request.url, true)
  // 打印解析结果
  console.log(res)
  // 获取路径名
  console.log('路径名:', res.pathname)
  // 获取查询字符串
  console.log('查询字符串:', res.query)
  // 获取查询字符串中的kw值
  console.log('查询字符串中的kw值:', res.query.kw)
  // 设置响应体
  response.end('url')
})

// 绑定端口号，启动服务
server.listen(9000, () => {
  console.log('服务启动成功')
})