// 导入express
const express = require('express')
// 导入path
const path = require('path')

// 创建应用对象
const app = express()
// 1.设置模版引擎
app.set('view engine', 'ejs')
// 2.设置模板文件存放位置-转绝对路径
// 模版文件-具有模版语法内容的文件
app.set('views', path.resolve(__dirname, './views'))


// 创建路由规则--请求对应的处理函数
app.get('/home', (req, res) => {
  // 通过render方法渲染模版文件
  // res.render('模版文件名', '数据对象')
  const team = 'TWS'
  res.render('home', { team })
})

// 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})