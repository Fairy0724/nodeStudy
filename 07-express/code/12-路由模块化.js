// 路由中间件-检票口
/**
 * 针对/admin /setting 的请求，要求url携带code=521参数，如未携带提示[暗号错误]
 */
// 导入express
const express = require('express')
const homeRouter = require('./routes/homeRouter')
const adminRouter = require('./routes/adminRouter')

// 创建应用对象
const app = express()

// 1.使用路由中间件
app.use(homeRouter)
app.use(adminRouter)

// 除了以上路由规则，其他路由都返回404
app.use((req, res) => {
  res.send('<h1>404 Not Found</h1>')
})
// 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})
