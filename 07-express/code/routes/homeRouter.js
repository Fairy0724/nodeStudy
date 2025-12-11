// 1.导入express
const express = require('express')

// 2.创建路由对象
const router = express.Router()

// 3.创建路由规则--请求对应的处理函数
// 前台
router.get('/home', (req, res) => {
  // 响应体
  res.send('<h1>前台首页</h1>')
})
// 搜索
router.get('/search', (req, res) => {
  res.send('<h1>内容搜索</h1>')
})

// 4.导出路由对象
module.exports = router