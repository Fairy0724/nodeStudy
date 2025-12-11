//导入express
const express = require('express')

//创建应用对象
const app = express()

//创建路由规则--请求对应的处理函数
// 通配符路由参数
app.get('/:id.html', (req, res) => {
  // 获取路由参数id
  console.log(req.params.id)
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // 响应体
  res.end('<h1>商品详情</h1>')
})

//监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})