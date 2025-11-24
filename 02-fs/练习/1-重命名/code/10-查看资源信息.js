// 1.引入fs模块
const fs = require('fs')

// 2.stats方法获取文件或目录的信息
fs.stat('../资料/笑看风云.mp4', (err, data) => { 
  if (err) {
    console.log('获取信息失败')
    return
  } else {
    console.log(data)
  }
  // 检测是否为文件 isFile()
  // 检测是否为文件夹 isDirectory()
})