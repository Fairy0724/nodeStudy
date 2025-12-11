// 导入express
const express = require('express')

// 创建应用对象
const app = express()

// 创建路由规则--请求对应的处理函数
app.get('/home', (req, res) => {
  // 响应体
  res.send('<h1>Hello Express</h1>')
})

// 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})