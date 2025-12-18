const express = require('express');
const router = express.Router();
// 引入bcryptjs模块，用于密码加密
const bcrypt = require('bcryptjs');
// 引入UserModel模型对象
const UserModel = require('../../models/UserModel')

//  注册页面
router.get('/reg', (req, res) => {
  // 响应html
  res.render('auth/reg');
})

// 注册提交
// 使用async/await优化异步逻辑，统一错误捕获
router.post('/reg', async (req, res) => {
  try {
    // 获取请求体内容
    const { username, password } = req.body

    // 表单验证
    if (!username || !password) {
      return res.render('auth/reg', { msg: '用户名或密码不能为空' })
    }
    // 检查用户名是否已存在
    const existingUser = await UserModel.findOne({ username })
    if (existingUser) {
      return res.render('auth/reg', { msg: '用户名已存在' })
    }
    // 密码加密（核心安全优化，替代明文存储）
    // 生成加密盐值（提升加密安全性）
    // 10轮加密，增加密码复杂度
    const salt = await bcrypt.genSalt(10);
    // 对密码进行加密-
    const hashedPassword = await bcrypt.hash(password, salt);

    // 写入数据库
    await UserModel.create({
      username,
      // 存储加密后的密码
      password: hashedPassword
    })
    // 注册成功，跳转到登录页
    res.render('success', { msg: '注册成功哦~~', url: '/login' });
  } catch (error) {
    res.render('auth/reg', { msg: '注册失败，请稍后重试' })
  }
})

// 登录页面
router.get('/login', (req, res) => {
  // 响应html
  res.render('auth/login');
})

// 登录提交
router.post('/login', async (req, res) => {
  try {
    // 获取请求体内容
    const { username, password } = req.body
    // 表单验证
    if (!username || !password) {
      return res.render('auth/login', { msg: '用户名或密码不能为空' })
    }
    //  查询数据库：根据用户名找用户
    const user = await UserModel.findOne({ username });
    // 如果用户不存在，返回登录页并提示
    if (!user) {
      return res.render('auth/login', { msg: '用户名不存在，请先注册' });
    }
    // 密码验证：对比明文密码和数据库中的加密密码
    // bcrypt.compare(明文密码, 加密密码) → 返回布尔值（是否匹配）
    const isMatch = await bcrypt.compare(password, user.password)
    // 如果密码不匹配，返回登录页并提示
    if (!isMatch) {
      return res.render('auth/login', { msg: '密码错误，请重新输入' })
    }
    // 密码正确 登录成功 写入session
    req.session.user = {
      id: user._id,
      username: user.username
    }
    // 响应登录成功页面
    res.render('success', { msg: '登录成功哦~~', url: '/accounts' });

  } catch (error) {
    // 异常捕获：数据库错误等
    console.error('登录失败：', error); // 打印错误日志
    res.render('auth/login', { msg: '登录失败，请稍后重试' });
  }
})
module.exports = router;