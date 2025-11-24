// 1.引入fs模块
const fs = require('fs')

// 2.读取文件名
const files = fs.readdirSync('./code')

// 3.遍历数组
files.forEach((item, index) => {
  // 拆分文件名和扩展名,解构赋值
  let [num, name] = item.split('-')

  // index自增
  index++
  // 将index写入num
  index = index < 10 ? '0' + index : index
  // 创建新名字
  const newName = index + '-' + name
  // 重命名
  fs.renameSync(`./code/${item}`, `./code/${newName}`)
})