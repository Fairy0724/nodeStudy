// 1.引入fs模块
const fs = require('fs')

// 2.调用writeFileSync方法写入内容
// fs.writeFileSync('./index.html', 'love')

// 相对路径工作目录——————命令行工作目录


// 绝对路径
console.log(__dirname) // 当前文件所在目录
fs.writeFileSync(__dirname + '/index1.html', 'love')