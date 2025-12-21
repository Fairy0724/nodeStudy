// 引入jwt模块
const jwt = require('jsonwebtoken')

// 创建token   (用户数据，加密字符串，配置对象)
// const token = jwt.sign({
//   username:'xiaoyi'
// }, 'lovexiaoyi', {
//   // 生命周期 单位秒
//   expiresIn:60*5
// })
// console.log(token)

const tk = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InhpYW95aSIsImlhdCI6MTc2NjIwNjIxNCwiZXhwIjoxNzY2MjA2NTE0fQ.rBX1uzhAKJpdSorCxrOAjIe8PuwgNb4fjll6On20scw'
// 校验token
// (加密后的token，加密字符串，回调函数)
jwt.verify(tk,'lovexiaoyi',(err,data)=>{
  if(err){
    console.log('校验失败')
    return
  }
  console.log('校验成功',data)
})
