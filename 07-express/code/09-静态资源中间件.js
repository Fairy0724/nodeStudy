// 导入express
const express = require('express')

// 创建应用对象
const app = express()

// 静态资源中间件
// public目录下的资源可以直接访问
/** 
 * 1.默认访问public目录下的index.html文件
 * 2.静态资源与路由规则冲突时，谁先匹配上就先响应谁
 * 3.路由规则响应动态资源，静态资源中间件响应静态资源
 * */
app.use(express.static(__dirname + '/public'))

// 创建路由规则--请求对应的处理函数
app.get('/home', (req, res) => {
  // 响应体
  res.send('<h1>Hello Express</h1>')
})

// 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})
