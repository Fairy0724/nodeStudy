var express = require('express');
var router = express.Router();
// 引入dayjs
const dayjs = require('dayjs')
// 引入utc插件
const utc = require('dayjs/plugin/utc')
// 扩展插件
dayjs.extend(utc)
// 引入AccountModel
const AccountModel = require('../../models/AccountModel');

// 记账本列表
router.get('/accounts', (req, res, next) => {
  // 读取集合信息
  AccountModel.find()
    .sort({ time: -1 })
    .exec()
    .then(data => {
      const formatData = data.map(item => {
        const plainItem = item.toObject();
        // 核心：utcOffset(8) 替代 timezone 插件
        plainItem.time = dayjs(plainItem.time)
          .utcOffset(8) // 强制东八区，不受服务器时区影响
          .format('YYYY-MM-DD');
        return plainItem;
      });
      // res.render('list', { accounts: formatData });
      // 响应成功
      res.json({
        // 响应编号
        code: '0000',
        // 响应信息
        msg: '读取成功',
        data: formatData
      })
    })
    .catch(err => {
      // res.status(500).send('读取失败');
      res.json({
        // 响应编号
        code: '1001',
        // 响应信息
        msg: '读取失败',
        data: null
      })
      return
    })
});

// 新增记录
router.post('/accounts', (req, res, next) => {
  // 表单验证
  if (!req.body.title || !req.body.type || !req.body.account || !req.body.time) {
    res.json({
      code: '1004',
      msg: '参数错误',
      data: null
    })
    return
  }
  // 插入数据库
  AccountModel.create({
    ...req.body,
    // 修改time类型
    // 存为2025-12-20格式
    time: new Date(req.body.time)
  }).then(data => {
    res.json({
      code: '0000',
      msg: '添加成功哦~~',
      data: data
    })
  }).catch(err => {
    res.json({
      code: '1002',
      msg: '添加失败~~',
      data: null
    })
    return
  })
});

// 删除记录
router.delete('/accounts/:id', (req, res, next) => {
  // 获取params的id参数
  const id = req.params.id;
  // 删除
  AccountModel.deleteOne({ _id: id })
    .then(data => {
      res.json({
        code: '0000',
        msg: '删除成功哦~~',
        data: {}
      })
    })
    .catch(err => {
      res.json({
        code: '1003',
        msg: '删除失败~~',
        data: null
      })
      return
    }
    );
});

// 获取单个账单
router.get('/accounts/:id', (req, res, next) => {
  // 获取params的id
  const id = req.params.id
  // 查询
  AccountModel.findOne({ _id: id })
    .then(data => {
      res.json({
        code: '0000',
        msg: '读取成功',
        data: data
      })
    })
    .catch(err => {
      res.json({
        code: '1005',
        msg: '读取失败',
        data: null
      })
    })
})

// 更新记录
router.patch('/accounts/:id', (req, res, next) => {
  // 获取id
  const id = req.params.id
  // 更新                 条件id         更新内容
  AccountModel.updateOne({ _id: id }, req.body)
    .then(data => {
      // 查询数据库，获取最新数据
      AccountModel.findById({ _id: id })
        .then(item => {
          res.json({
            code: '0000',
            msg: '更新成功',
            data: item
          })
        })
        .catch(err => {
          res.json({
            code: '1005',
            msg: '读取失败',
            data: null
          })
        })
    })
    .catch(err => {
      res.json({
        code: '1006',
        msg: '更新失败',
        data: null
      })
    })
})
module.exports = router;