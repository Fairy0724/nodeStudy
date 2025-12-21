// 封装判断登录中间件
const checkLoginMiddleware = (req, res, next) => {
  // 判断：登录时我们在 session 中写入了 `user` 对象
  if (!req.session.user) {
    console.log('未登录状态');
    return res.redirect('/login');
  }
  // 继续执行后续路由处理函数
  next();
}

module.exports = checkLoginMiddleware;