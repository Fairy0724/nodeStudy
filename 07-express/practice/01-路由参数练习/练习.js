// 导入express
const express = require('express')
// 导入歌手数据
const { singers } = require('./singers.json')

// 创建应用对象
const app = express()
// 创建路由规则--请求对应的处理函数
app.get('/singer/:id.html', (req, res) => {
  // 获取路由参数
  const id = req.params.id
  // 在数组中找对应的歌手
  const result = singers.find(item => {
    if (item.id === Number(id)) {
      return true
    }
  })
  if(result) {
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <h2>${result.singer_name}</h2>
        <img src="${result.singer_pic}" alt="">
      </body>
      </html>
      `)
  } else {
    res.statusCode = 404
    res.end('<h1>404 Not Found</h1>')
  }
})

// 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})