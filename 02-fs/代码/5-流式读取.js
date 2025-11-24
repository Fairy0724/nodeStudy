// 1. 引入fs模块
const fs = require('fs')

// 2. 创建一个读取流对象
const rs = fs.createReadStream('../资料/笑看风云.mp4')

// 3. 绑定data事件, 读取文件数据
rs.on('data', chunk => { 
  console.log(chunk.length)
})

// 4. 绑定end事件, 读取完毕
rs.on('end', () => { 
  console.log('文件读取完毕')
})