/** 
 * ==================== Cookie 核心备注 ====================
 * 1. 定义：存储在客户端浏览器的小型文本数据，用于标识用户/保存状态
 * 2. 核心操作（Express）：
   *  - 设置：res.cookie(键, 值, {maxAge: 有效期(毫秒)})
   *  - 获取：req.cookies.键（需cookie-parser中间件）
   *  - 删除：res.clearCookie(键)
 * 3. 特点：客户端可读取，默认浏览器关闭失效（设置maxAge则按时间失效）
========================================================
*/

// 导入express
const express = require('express')
// 导入cookie-parser中间件
const cookieParser = require('cookie-parser')

// 创建应用对象
const app = express()
// 挂载cookie-parser中间件
app.use(cookieParser())

// 创建路由规则--请求对应的处理函数
app.get('/set-cookie', (req, res) => {
  // cookie设置-浏览器关闭后销毁
  // res.cookie('username', 'xiaoyi')

  res.cookie('name', 'lsm')

  // cookie设置-指定过期（最大生命周期）时间
  // 60是秒数  1000毫秒=1秒
  res.cookie('theme', 'purple', { maxAge: 60 * 1000 })
  // 响应体
  res.send('<h1>Hello Express</h1>')
})

// 删除cookie
app.get('/remove-cookie', (req, res) => {
  // 删除cookie
  res.clearCookie('name')
  res.send('删除成功！')
})

// 获取cookie
app.get('/get-cookie', (req, res) => {
  const { name } = req.cookies
  console.log(req.cookies)
  res.send(`欢迎您${name}`)
})
// 监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已启动...端口3000监听中...')
})