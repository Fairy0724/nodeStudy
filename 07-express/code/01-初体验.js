// 1.导入express
const express = require('express')

// 2.创建应用对象
const app = express()

// 3.创建路由规则--请求对应的处理函数
// 如果请求路径是/home，响应Hello Express
app.get('/home', (req, res) => {
  // 响应体
  res.end('<h1>Hello Express</h1>')
})

// 4.监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})