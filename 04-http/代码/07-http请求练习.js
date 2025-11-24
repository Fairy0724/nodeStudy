/**
 * 练习：请求方法get跳转登录注册页面
* */
// 引入http模块
const http = require('http')
// 引入url模块
const url = require('url')
// 创建http服务对象
const server = http.createServer((request, response) => { 
  response.setHeader('Content-Type', 'text/html; charset=utf-8')
  // 1.获取请求方法--解构赋值
  let { method } = request
  // 2.获取url路径
  let { pathname } = new URL(request.url, 'http://localhost')
  // 3.判断请求方法与路径
  if (method === 'GET') {
    if (pathname === '/login') {
      // 响应登录页面
      response.end('这是登录页面')
    }
    else if (pathname === '/reg') { 
      // 响应注册页面
      response.end('这是注册页面')
    }
  }
  else {
    response.end('请使用GET方法请求')
  }
})

// 绑定端口号，启动服务
server.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})
