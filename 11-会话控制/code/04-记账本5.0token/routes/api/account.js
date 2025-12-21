var express = require('express');
var router = express.Router();
// 引入dayjs
const dayjs = require('dayjs')
// 引入utc插件
const utc = require('dayjs/plugin/utc')
// 引入jwt模块
const jwt = require('jsonwebtoken')
// 引入checkTokenMiddleware中间件
const checkTokenMiddleware = require('../../middlewares/checkTokenMiddleware');
// 扩展插件
dayjs.extend(utc)
// 引入AccountModel
const AccountModel = require('../../models/AccountModel');


// 记账本列表
// 1. 加async
router.get('/accounts', checkTokenMiddleware, async (req, res) => {
  try {
    // 2. await 替代 .then
    const data = await AccountModel.find().sort({ time: -1 }).exec();
    const formatData = data.map(item => {
      const plainItem = item.toObject();
      // 核心：utcOffset(8) 替代 timezone 插件
      plainItem.time = dayjs(plainItem.time)
        .utcOffset(8) // 强制东八区，不受服务器时区影响
        .format('YYYY-MM-DD');
      return plainItem;
    });
    // 响应成功
    res.json({
      // 响应编号
      code: '0000',
      // 响应信息
      msg: '读取成功',
      data: formatData
    })
  }
  // 3. try/catch 替代 .catch
  catch (err) {
    res.json({
      // 响应编号
      code: '1001',
      // 响应信息
      msg: '读取失败',
      data: null
    })
  }
});
// 新增记录
router.post('/accounts', checkTokenMiddleware, async (req, res) => {
  // 表单验证
  if (!req.body.title || !req.body.type || !req.body.account || !req.body.time) {
    res.json({
      code: '1004',
      msg: '参数错误',
      data: null
    })
    return
  }
  /**
   * 不放表单验证在try/catch中原因是：
   1. 表单验证是同步操作，不会阻塞后续代码执行
   2. 表单验证失败后，后续代码就没有必要执行了
    */
  try {
    // 插入数据库
    const data = await AccountModel.create({
      ...req.body,
      // 修改time类型
      // 存为2025-12-20格式
      time: new Date(req.body.time)
    })
    res.json({
      code: '0000',
      msg: '添加成功哦~~',
      data: data
    })
  }
  catch (err) {
    res.json({
      code: '1002',
      msg: '添加失败~~',
      data: null
    })
  }
})

// 删除记录
router.delete('/accounts/:id', checkTokenMiddleware, async (req, res) => {
  // 获取params的id参数
  const id = req.params.id;
  try {
    // 删除
    const data = await AccountModel.deleteOne({ _id: id });
    res.json({
      code: '0000',
      msg: '删除成功哦~~',
      data: {}
    })
  } catch (err) {
    res.json({
      code: '1003',
      msg: '删除失败~~',
      data: null
    })
  }
});

// 获取单个账单
router.get('/accounts/:id', checkTokenMiddleware, async (req, res, next) => {
  // 获取params的id
  const id = req.params.id
  try {
    // 查询
    const data = await AccountModel.findOne({ _id: id })
    res.json({
      code: '0000',
      msg: '读取成功',
      data: data
    })
  } catch (err) {
    res.json({
      code: '1005',
      msg: '读取失败',
      data: null
    })
  }
})


// 更新记录
router.patch('/accounts/:id', checkTokenMiddleware, async (req, res) => {
  // 获取id
  const id = req.params.id
  try {
    // 第一步：执行更新
    // 更新                       条件id         更新内容
    await AccountModel.updateOne({ _id: id }, { $set: req.body })
    try {
      // 第二步：查询最新数据
      const item = await AccountModel.findById({ _id: id })
      res.json({
        code: '0000',
        msg: '更新成功',
        data: item
      })
    } catch (err) {
      res.json({
        code: '1005',
        msg: '读取失败',
        data: null
      })
    }
  } catch (err) {
    res.json({
      code: '1006',
      msg: '更新失败',
      data: null
    })
  }
})
module.exports = router;