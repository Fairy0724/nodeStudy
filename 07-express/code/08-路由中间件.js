// 路由中间件-检票口
/**
 * 针对/admin /setting 的请求，要求url携带code=521参数，如未携带提示[暗号错误]
 */
// 导入express
const express = require('express')

// 创建应用对象
const app = express()

// 创建路由规则--请求对应的处理函数
// 前台
app.get('/home', (req, res) => {
  // 响应体
  res.send('<h1>前台首页</h1>')
})

// 声明中间件
const checkCodeMiddleware = (req, res, next) => {
  // 校验code参数
  if (req.query.code === '521') {
    // 满足条件->调用后面的路由回调
    next()
  }
  else {
    res.send('<h1>暗号错误</h1>')
  }
}
// 后台
app.get('/admin', checkCodeMiddleware, (req, res) => {
  res.send('<h1>后台首页</h1>')
})

// 设置
app.get('/setting', checkCodeMiddleware, (req, res) => {
  res.send('<h1>设置页面</h1>')
})
// 除了以上路由规则，其他路由都返回404
app.use((req, res) => {
  res.send('<h1>404 Not Found</h1>')
})
// 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})
