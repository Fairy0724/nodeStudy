// 导入express
const express = require('express')

// 创建应用对象
const app = express()

// 创建路由规则--请求对应的处理函数
app.get('/other', (req, res) => {
  // 1.跳转响应-重定向
  // 状态码默认302
  // res.redirect('https://www.bilibili.com')

  // 2.下载响应
  // 状态码默认200
  // res.download(__dirname + '/package.json')

  // 3.JSON响应
  // 状态码默认200
  // res.json({ 
  //   name: 'liz',
  //   age: 21
  // })

  // 4.响应文件内容
  res.sendFile(__dirname + '/test.html')
})

// 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})
