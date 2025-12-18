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
// 导入session中间件
const session = require('express-session')
// 导入connect-mongo中间件
// 6.x版本CommonJS导入方式：解构获取MongoStore
const { MongoStore } = require('connect-mongo');

// 创建应用对象
const app = express()

// 挂载设置session中间件
app.use(session({
  // 设置session的名称cookie名称 默认值connect.sid
  name: 'sid',
  // 密钥，参与加密的字符串
  secret: 'lovexy',
  // 是否为每一次请求都设置cookie来储存session id
  saveUninitialized: false,
  // 是否在每次请求时重新保存session
  resave: true,
  // 设置session存储到数据库中
  store: MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/bilibili'
  }),
  // cookie相关的配置
  cookie: {
    // 只能通过http访问 无法通过js脚本访问 提高安全性
    httpOnly: true,
    // 控制session cookie的过期时间
    maxAge: 1000 * 60 * 5
  }
}))

// 创建路由规则--请求对应的处理函数
app.get('/', (req, res) => {
  // 响应体
  res.send('<h1>Hello Express</h1>')
})

// 登录
app.get('/login', (req, res) => { 
  // username=admin&password=admin
  // 接收用户名密码
  // get方式用query post/put/delete方式用body
  const { username, password } = req.query
  // 简单验证
  if (username === 'admin' && password === 'admin') {
    // 存储session
    req.session.username = 'admin'
    // 响应体
    res.send('登录成功！')
  } else {
    res.send('登录失败！')
  }
})

// session读取 购物车
app.get('/cart', (req, res) => {
  // 判断用户是否登录
  if(req.session.username) {
    res.send(`欢迎来到购物车页面！亲爱的${req.session.username}`)
  } else {
    res.send('请先登录！')
  }
})

// session销毁 退出登录
app.get('/logout', (req, res) => {
  // 销毁session
  req.session.destroy(err => {
    if(err) {
      res.send('退出失败！')
    } else {
      res.send('退出成功！')
    }
  })
})

// 监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已启动...端口3000监听中...')
})