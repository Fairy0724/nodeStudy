// 导入express
const express = require('express')

// 创建应用对象
const app = express()

// 创建路由规则--请求对应的处理函数
app.get('/response', (req, res) => {
  // 1.原生响应
  // res.statusCode = 404
  // res.statusMessage = 'Not Found'
  // res.setHeader('xxx', 'yyy')
  // // write方法可以多次调用,但是end方法只能调用一次
  // res.write('<h1>Hello response</h1>')
  // // 响应体
  // res.end('<h1>response</h1>')


  // 2.express响应
  // send默认带utf-8编码
  res.status(200).set('aaa', 'bbb').send('<h1>OK</h1>')
})

// 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})
