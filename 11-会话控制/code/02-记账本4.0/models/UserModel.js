// 导入 mongoose 模块
const mongoose = require('mongoose');

// 创建对象结构
// 定义字段
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

// 创建模型对象
// ''users'' 集合名称
const UserModel = mongoose.model('users', UserSchema);

// 导出模型对象
module.exports = UserModel;
