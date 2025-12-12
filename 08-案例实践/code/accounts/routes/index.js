var express = require('express');
var router = express.Router();

// 记账本列表
router.get('/accounts', (req, res, next) => {
  res.send('记账本列表')
});

// 添加记录
router.get('/accounts/create', (req, res, next) => {
  res.send('添加记录')
});
module.exports = router;
