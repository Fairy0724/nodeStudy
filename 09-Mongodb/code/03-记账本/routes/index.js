var express = require('express');
var router = express.Router();
// 引入dayjs
const dayjs = require('dayjs')
// 引入utc插件
const utc = require('dayjs/plugin/utc')
// 扩展插件
dayjs.extend(utc)
// 引入AccountModel
const AccountModel = require('../models/AccountModel');

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
      res.render('list', { accounts: formatData });
    })
    .catch(err => {
      res.status(500).send('读取失败');
      return
    })
});

// 添加记录
router.get('/accounts/create', (req, res, next) => {
  res.render('create');
});

// 新增记录
router.post('/accounts', (req, res, next) => {
  // 插入数据库
  AccountModel.create({
    ...req.body,
    // 修改time类型
    // 存为2025-12-20格式
    time: new Date(req.body.time)
  }).then(data => {
    console.log('插入成功', data);
    res.render('success', { msg: '添加成功哦~~', url: '/accounts' });
  }).catch(err => {
    res.status(500).send('添加失败~~');
    return
  })
});

// 删除记录
router.get('/accounts/:id', (req, res, next) => {
  // 获取params的id参数
  const id = req.params.id;
  // 删除
  AccountModel.deleteOne({ _id: id })
    .then(data => {
      res.render('success', { msg: '删除成功哦~~', url: '/accounts' });
    })
    .catch(err => {
      res.status(500).send('删除失败~~');
      console.log('删除失败', err);
      return
    }
  );
});
module.exports = router;