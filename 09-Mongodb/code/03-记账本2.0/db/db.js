/**
 * 数据库连接模块
 * @param {*} success 连接成功回调函数
 * @param {*} error 连接失败回调函数
  */

module.exports = function (success, error) {
  // 判断
  if (typeof error !== 'function') {
    error = () => {
      console.log('数据库连接失败')
    }
  }
  // 1. 引入 mongoose 模块和配置文件
  const mongoose = require('mongoose');
  const {dbHost, dbPort, dbName} = require('../config/config');

  // 2. 连接数据库
  mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`)

  // 3.设置回调函数
  mongoose.connection.once('open', () => {
    success()
  })
  // 错误/关闭监听不变
  mongoose.connection.once('error', () => {
    error()
  })
  mongoose.connection.on('close', () => {
    console.log('数据库连接关闭')
  })
}
