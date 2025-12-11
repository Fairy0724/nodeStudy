// 1.导入express
const express = require('express')

// 2.创建路由对象
const router = express.Router()

// 3.创建路由规则--请求对应的处理函数
// 后台
router.get('/admin', (req, res) => {
  res.send('<h1>后台首页</h1>')
})

// 设置
router.get('/setting', (req, res) => {
  res.send('<h1>设置页面</h1>')
})
// 4.导出路由对象
module.exports = router