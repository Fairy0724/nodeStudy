/**
 * 练习：四行三列表格，隔行换色，点击高亮
* */
// 引入http模块
const http = require('http')
// 引入fs模块
const fs = require('fs')
// 创建http服务对象
const server = http.createServer((request, response) => {
  // 读取table文件
  let table = fs.readFileSync(__dirname + '/10-table.html')
  // 设置响应体
  response.end(table)
})

// 绑定端口号，启动服务
server.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})
