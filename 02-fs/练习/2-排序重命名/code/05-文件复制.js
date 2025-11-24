// 导入fs模块
const fs = require('fs')

// 方式一 readFile
// 读取文件内容
const data = fs.readFileSync('../资料/笑看风云.mp4')
// 写入文件内容
fs.writeFileSync('../资料/笑看风云-2.mp4', data)

// 方式二 流式读取和写入-----读取效率更高
// 创建读取流
const rs1 = fs.createReadStream('../资料/笑看风云.mp4')
// 创建写入流
const ws = fs.createWriteStream('../资料/笑看风云-3.mp4')
// 绑定dat事件
rs1.on('data', chunk => { 
  ws.write(chunk)
})
// 绑定end事件
rs1.on('end', () => { 
  ws.end()
  console.log('文件复制完毕')
})