// 1.引入fs模块
const fs = require('fs')

// 相对路径
fs.writeFileSync('./index.html', 'love')
// 绝对路径
fs.writeFileSync('D:/code/study/02-fs/代码/index1.html', 'love')