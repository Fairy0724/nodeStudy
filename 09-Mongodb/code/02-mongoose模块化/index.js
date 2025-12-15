// 1.导入db、mongoose模块、BookModel模型
const mongoose = require('mongoose')
const db = require('./db/db')
const bookModel = require('./models/BookModel')
// 2.调用连接数据库
db(() => {
  // 连接成功
  // 设置回调函数

  // 6.创建新文档（核心修改：去掉回调，改用 Promise）
  bookModel.create({
    name: '西游记',
    author: '吴承恩',
    price: 100
  })
    .then(data => { // 成功回调
      console.log('创建文档成功：', data);
      // 关闭数据库连接
      mongoose.disconnect();
    })
    .catch(err => { // 失败回调
      console.log('创建文档失败：', err);
      mongoose.disconnect();
    });
})

