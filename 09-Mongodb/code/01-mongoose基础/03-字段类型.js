// 1. 引入 mongoose 模块
const mongoose = require('mongoose');

// 2. 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/study')

// 3.设置回调函数
mongoose.connection.on('open', () => {
  // 4.创建文档的结构对象
  const bookSchema = new mongoose.Schema({
    // Mixed 类型：混合类型，任意类型都可以存储
    // ObjectId 类型：对象ID类型，用于存储文档的唯一标识符
    name: String,
    author: String,
    price: Number,
    isHot:Boolean,
    tags: Array,
    pubTime:Date
  })
  // 5.创建模型对象 
  const bookModel = mongoose.model('books', bookSchema)

  // 6.创建新文档（核心修改：去掉回调，改用 Promise）
  bookModel.create({
    name: '西游记',
    author: '吴承恩',
    price: 100,
    isHot: true,
    tags: ['经典', '神话', '小说'],
    pubTime: new Date()
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

// 错误/关闭监听不变
mongoose.connection.once('error', () => {
  console.log('数据库连接失败')
})
mongoose.connection.on('close', () => {
  console.log('数据库连接关闭')
})