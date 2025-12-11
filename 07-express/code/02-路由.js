//导入express
const express = require('express')

//创建应用对象
const app = express()

//创建路由规则--请求对应的处理函数
app.get('/home', (req, res) => {
  // 响应体
  res.end('<h1>Hello Home</h1>')
})

app.get('/', (req, res) => { 
  res.end('<h1>Hello Router</h1>')
})

app.post('/login',(req, res) => {
  res.end('<h1>Hello Login</h1>')
})

// 所有请求都可以处理,只要是/test路径,都可以处理
app.all('/test',(req, res) => {
  res.end('<h1>Hello Test</h1>')
})

// 以上路由都没有匹配到,则执行该路由
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>');
});
//监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})