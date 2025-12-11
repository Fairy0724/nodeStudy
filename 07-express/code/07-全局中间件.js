// 全局中间件-检票口
/* 
  记录每个请求的url和ip地址
 */

// 导入express
const express = require('express')
const fs = require('fs')
const path = require('path')

// 创建应用对象
const app = express()

// 声明中间件函数
// req-请求报文对象
// res-响应报文对象
// next-下一个中间件函数
function recordMiddleware(req, res, next) {
  // 获取url和ip地址
  const { url, ip } = req
  // 将信息保存到文件中access.log
  // 绝对路径resolve(__dirname, './access.log')
  fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\n`)
  // 调用下一个中间件函数
  next()
}
// 使用挂载中间件函数
app.use(recordMiddleware)

// 创建路由规则--请求对应的处理函数
app.get('/home', (req, res) => {
  // 响应体
  res.send('<h1>前台首页</h1>')
})

app.get('/admin', (req, res) => {
  res.send('<h1>后台首页</h1>')
})
// 除了以上路由规则，其他路由都返回404
app.use((req, res) => {
  res.send('<h1>404 Not Found</h1>')
})
// 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})
