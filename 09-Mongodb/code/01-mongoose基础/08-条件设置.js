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

  // 7.价格小于20
  /** $lt 表示小于
   * $gt 表示大于
   * $lte 表示小于等于
   * $gte 表示大于等于
   * $ne 表示不等于
   */

  BookModel.find({price:{$lt:20}}).then(data => {
    console.log(data);
    return
  }).catch(err => {
    console.log(err);
    return
  });
  // 8.曹雪芹或者余华，且出名
  /**
   * $or 表示或者
   * $and 表示并且
   * $in 表示在指定数组中
   * $nin 表示不在指定数组中
   */
  BookModel.find({$and:[{$or:[{author:'曹雪芹'},{author:'余华'}]},{'is_hot':true}]}).then(data => {
    console.log(data);
    return
  }).catch(err => {
    console.log(err);
    return
  });
  // 9.正则表达式
  /**
   * $regex 表示正则表达式
   */
  BookModel.find({name:{$regex:/三/}}).then(data => {
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

