//导入express
const express = require('express')

//创建应用对象
const app = express()

//创建路由规则--请求对应的处
app.get('/request', (req, res) => {
  // 1.原生操作
  console.log(req.method)
  console.log(req.url)
  console.log(req.httpVersion)
  console.log(req.headers)

  // 2.express操作
  console.log(req.path)
  // 获取查询参数
  console.log(req.query)
  console.log(req.ip)
  // 获取请求头
  console.log(req.get('host'))
  // 响应体
  res.end('<h1>Hello Express</h1>')
})

//监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})