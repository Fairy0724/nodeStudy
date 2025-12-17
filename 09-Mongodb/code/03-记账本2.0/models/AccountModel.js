// 导入 mongoose 模块
const mongoose = require('mongoose');

// 创建对象结构
// 定义字段
const AccountSchema = new mongoose.Schema({
  // id自动生成
  title: {
    type: String,
    required: true
  },
  time: Date,
  type: {
    type: Number,
    default: -1
  },
  account: {
    type: Number,
    default: 0,
    required: true
  },
  remarks: String
})

// 创建模型对象
// ''accounts'' 集合名称
const AccountModel = mongoose.model('accounts', AccountSchema);

// 导出模型对象
module.exports = AccountModel;