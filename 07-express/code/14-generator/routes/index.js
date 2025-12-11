var express = require('express');
var router = express.Router();
// 导入path模块
var path = require('path');
// 导入formidable模块
var formidable = require('formidable');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 显示网页（表单）
router.get('/portrait', (req, res) => {
  res.render('portrait');
});

// 处理文件上传
router.post('/portrait', (req, res) => {
  //创建 form 对象
  const form = new formidable.IncomingForm({
    multiples: true,
    // 设置上传文件的保存目录
    uploadDir: __dirname + '/../public/images',
    // 保留上传文件的后缀
    keepExtensions: true
  })
  // 解析请求报文
  // fields 是表单中的普通字段
  // files 是上传的文件
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err)
      return
    }
    // 打印上传的文件
    console.log(files)
    // 服务器保存图片访问url
    // 注意：files.portrait 是一个数组，因为 multiple 属性为 true
    const url = '/images/' + files.portrait[0].newFilename
    res.send('文件上传成功，图片访问url为：' + url)
  })
});

module.exports = router;
