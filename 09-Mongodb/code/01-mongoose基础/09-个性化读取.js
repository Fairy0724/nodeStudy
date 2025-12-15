//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require('mongoose');

//设置 strictQuery 为 true
mongoose.set('strictQuery', true);

//3. 连接 mongodb 服务                        数据库的名称
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

//4. 设置回调
// 设置连接成功的回调  once 一次   事件回调函数只执行一次
mongoose.connection.once('open', () => {
  //5. 创建文档的结构对象
  //设置集合中文档的属性以及属性值的类型
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean
  });

  //6. 创建模型对象  对文档操作的封装对象  mongoose会使用 复数形式 作为 集合名称
  let BookModel = mongoose.model('novel', BookSchema);

  // 7.设置字段过滤
  // 只获取 name 和 author 字段
  // exec()  执行查询，返回一个 Promise 对象
  // BookModel.find().select({name:1,author:1}).exec().then(data => {
  //   console.log(data);
  //   return
  // }).catch(err => {
  //   console.log(err);
  //   return
  // });

  // 8.排序
  // 按 price 字段 升序排序 是1，降序排序 是-1
  // BookModel.find().sort({price:1}).select({name:1,price:1,_id:0}).exec().then(data => {
  //   console.log(data);
  //   return
  // }).catch(err => {
  //   console.log(err);
  //   return
  // });

  // 9.数据截取
  BookModel.find()
    .sort({ price: 1 })
    .select({ name: 1, price: 1, _id: 0 })
    .skip(1) //跳过前几条
    .limit(2) //限制获取多少条
    .exec()
    .then(data => {
    console.log(data);
    return
  }).catch(err => {
    console.log(err);
    return
  });

})
// 设置连接错误的回调
mongoose.connection.on('error', () => {
  console.log('连接失败');
});

//设置连接关闭的回调
mongoose.connection.on('close', () => {
  console.log('连接关闭');
});

