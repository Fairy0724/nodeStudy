// 导入express
const express = require('express')

// 创建应用对象
const app = express()

// 声明中间件
app.use((req, res, next) => {
  // 检测请求头中的referers是否包含当前域名
  const { referer } = req.headers
  // 判断
  if (referer) {
    // 实例化
    const refererUrl = new URL(referer)
    // 获取hostname
    const hostname = refererUrl.hostname
    // 判断不是当前域名
    if(hostname !== 'localhost'){
      // 响应404
      res.status(404).send('<h1>404 Not Found</h1>')
      return
    }
  }
  // 包含当前域名，放行
  next()
})
app.use(express.static(__dirname + '/public'))
// 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})
