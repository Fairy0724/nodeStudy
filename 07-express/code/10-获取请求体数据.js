/**
 * 按照要求搭建 HTTP 服务
 *
 * GET   /login  显示表单网页
 * POST  /login  获取表单中的『用户名』和『密码』
*/
// 导入express
const express = require('express')
// const bodyParser = require('body-parser')

// 创建应用对象
const app = express()

// 配置中间件-解析请求体数据
// 解析 application/x-www-form-urlencoded 格式 的请求体
app.use(express.urlencoded({ extended: false }))
// 注册为全局中间件，所有请求都会经过它处理
// 解析 application/json 格式 的请求体
app.use(express.json())

// 创建路由规则--请求对应的处理函数
app.get('/login', (req, res) => {
  // 响应文件
  res.sendFile(__dirname + '/10-form.html')
})

app.post('/login', (req, res) => {
  // 获取请求体数据
  const { username, password } = req.body
  // 响应体
  res.send(`<h1>用户名：${username}</h1><h1>密码：${password}</h1>`)
})

// 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})