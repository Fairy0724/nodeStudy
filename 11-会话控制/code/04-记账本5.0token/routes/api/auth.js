const express = require('express');
// 引入bcryptjs模块，用于密码加密
const bcrypt = require('bcryptjs');
// 引入UserModel模型对象
const UserModel = require('../../models/UserModel')
// 引入jwt模块
const jwt = require('jsonwebtoken')
// 引入配置项
const { jwtSecret } = require('../../config/config');
const router = express.Router();


// 登录提交
router.post('/login', async (req, res) => {
  try {
    // 获取请求体内容
    const { username, password } = req.body
    // 表单验证
    if (!username || !password) {
      // return res.render('auth/login', { msg: '用户名或密码不能为空' })
      return res.json({
        code: '2000',
        msg: '用户名或密码不能为空',
        data: null
      })
    }
    //  查询数据库：根据用户名找用户
    const user = await UserModel.findOne({ username });
    // 如果用户不存在，返回登录页并提示
    if (!user) {
      // return res.render('auth/login', { msg: '用户名不存在，请先注册' });
      return res.json({
        code: '2001',
        msg: '用户名不存在，请先注册',
        data: null
      })
    }
    // 密码验证：对比明文密码和数据库中的加密密码
    // bcrypt.compare(明文密码, 加密密码) → 返回布尔值（是否匹配）
    const isMatch = await bcrypt.compare(password, user.password)
    // 如果密码不匹配，返回登录页并提示
    if (!isMatch) {
      // return res.render('auth/login', { msg: '密码错误，请重新输入' })
      return res.json({
        code: '2002',
        msg: '密码错误，请重新输入',
        data: null
      })
    }
    // 响应token
    // 创建token   (用户数据，加密字符串，配置对象)
    const token = jwt.sign({
      username: user.username,
      id: user._id
    }, jwtSecret, {
      // 生命周期 单位秒
      expiresIn: 60 * 60 * 24 * 7
    })

    // 响应登录成功页面
    // res.render('success', { msg: '登录成功哦~~', url: '/accounts' });
    res.json({
      code: '0000',
      msg: '登录成功哦~~',
      data: token
    })
  } catch (error) {
    // 异常捕获：数据库错误等
    console.error('登录失败：', error); // 打印错误日志
    // res.render('auth/login', { msg: '登录失败，请稍后重试' });
    res.json({
      code: '5000',
      msg: '登录失败，请稍后重试',
      data: null
    })
  }
})

// 退出登录
router.post('/logout', (req, res) => {
  // 销毁session
  req.session.destroy(() => {
    // 提示
    res.json({
      code: '0000',
      msg: '退出登录成功哦~~',
      data: null
    })
  })
})
module.exports = router;