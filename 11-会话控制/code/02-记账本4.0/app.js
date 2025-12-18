const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// 引入会话控制模块
const session = require('express-session');
// 引入会话存储模块
const { MongoStore } = require('connect-mongo');

var indexRouter = require('./routes/web/index');
// 导入account接口路由
const accountRouter = require('./routes/api/account');
// 导入auth接口路由
const authRouter = require('./routes/web/auth');

// 导入配置项
const { dbHost, dbPort, dbName } = require('./config/config');

const app = express();

// 会话控制中间件
app.use(session({
  // 设置session的名称cookie名称 默认值connect.sid
  name: 'sid',
  // 密钥，参与加密的字符串
  secret: 'lovexy',
  // 是否为每一次请求都设置cookie来储存session id
  saveUninitialized: false,
  // 是否在每次请求时重新保存session
  resave: true,
  // 设置session存储到数据库中
  store: MongoStore.create({
    mongoUrl: `mongodb://${dbHost}:${dbPort}/${dbName}`
  }),
  // cookie相关的配置
  cookie: {
    // 只能通过http访问 无法通过js脚本访问 提高安全性
    httpOnly: true,
    // 控制session cookie的过期时间
    // 过期时间 7天
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 挂载auth路由
app.use('/', authRouter);
// 路由
app.use('/', indexRouter);
// 挂载accountApi路由
app.use('/api', accountRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  // 响应404错误
  res.render('404');
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
