// 1. 引入 mongoose 模块
const mongoose = require('mongoose');

// 2.创建文档的结构对象
const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number
})
// 3.创建模型对象
const bookModel = mongoose.model('books', bookSchema)

// 4.导出
module.exports = bookModel