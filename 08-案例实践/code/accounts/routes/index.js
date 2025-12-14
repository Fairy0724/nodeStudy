var express = require('express');
var router = express.Router();
const path = require('path');

//  lowdb 数据库
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

// 路径拼接（确保code/accounts下有data文件夹！）
const adapter = new FileSync(__dirname + '/../data/db.json');
const db = low(adapter);
// 导入 shortid 模块
const shortid = require('shortid');

// 记账本列表
router.get('/accounts', (req, res, next) => {
  // 获取所有记账本数据
  const accounts = db.get('accounts').value();
  // 渲染列表页面，并传递数据
  res.render('list', {accounts});
});

// 添加记录
router.get('/accounts/create', (req, res, next) => {
  res.render('create');
});

// 新增记录
router.post('/accounts', (req, res, next) => {
  // 新增记录时，自动添加 id 字段
  const id = shortid.generate();
  // unshift 方法：在数组头部添加元素
  db.get('accounts').unshift({id: id, ...req.body}).write();
  res.render('success', {msg: '添加成功哦~~', url: '/accounts'});
});

// 删除记录
router.get('/accounts/:id', (req, res, next) => {
  // 获取params的id参数
  const id = req.params.id;
  // 删除
  db.get('accounts').remove({id: id}).write();
  // 返回列表页面
  res.render('success', { msg: '删除成功哦~~', url: '/accounts' });
});
module.exports = router;