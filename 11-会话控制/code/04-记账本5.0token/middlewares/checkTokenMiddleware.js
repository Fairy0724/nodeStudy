// 引入jwt模块
const jwt = require('jsonwebtoken')
// 引入配置项
const { jwtSecret } = require('../config/config');

// 封装中间件
const checkTokenMiddleware = (req, res, next) => {
  const token = req.get('token')
  // 校验token是否存在
  if (!token) {
    return res.json({
      code: '2003',
      msg: 'token不存在',
      data: null
    })
  }
  // 校验token
  try {
    const data = jwt.verify(token, jwtSecret)
    // 保存用户信息
    req.user = data
  } catch (err) {
    return res.json({
      code: '2004',
      msg: 'token校验失败',
      data: null
    })
  }

  // 校验通过，继续执行后续路由处理函数
  next()
}
module.exports = checkTokenMiddleware