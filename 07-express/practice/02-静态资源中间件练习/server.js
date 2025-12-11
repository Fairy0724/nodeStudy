// 导入express
const express = require('express')

// 创建应用对象
const app = express()

// 静态资源中间件
const staticMiddleware = express.static(__dirname + '/尚品汇')
// 使用挂载中间件
app.use(staticMiddleware)

// 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})