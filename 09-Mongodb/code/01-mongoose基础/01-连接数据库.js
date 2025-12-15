// 1. 引入 mongoose 模块
const mongoose = require('mongoose');

// 2. 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/study')

// 3.设置回调函数
mongoose.connection.on('open', () => {
  console.log('数据库连接成功')
})
// on---持续监听  once---只监听一次
mongoose.connection.once('error', () => {
  console.log('数据库连接失败')
})
mongoose.connection.on('close', () => {
  console.log('数据库连接关闭')
})

// 断开数据库连接
// setTimeout(() => {
//   mongoose.connection.close()
// }, 3000)
