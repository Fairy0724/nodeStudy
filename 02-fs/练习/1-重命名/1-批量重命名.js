// 1.引入fs模块
const { log } = require('console')
const fs = require('fs')

// 2.读取code目录下的文件列表
const files = fs.readdirSync('./code')

// 3.遍历数组，依次重命名
files.forEach(item => { 
  // 拆分文件名和扩展名
  const data = item.split('-')
  // 解构赋值
  let [num, name] = data
  // 判断第一位是否小于10
  if (Number(num) < 10) {
    num = '0' + num
  }
  // 创建新名字
  const newName = num + '-' + name
  // 重命名
  fs.renameSync(`./code/${item}`, `./code/${newName}`)
})
