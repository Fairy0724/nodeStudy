// 声明一个函数
function dance() {
  console.log("跳舞")
}
function sing() {
  console.log("唱歌")
}
// 导出函数-- 方法一
// 1.module.exports可以导出任意数据类型
// module.exports = {
//   dance,
//   sing
// }

// exports导出函数-- 方法二
// 2.exports.属性名 = 值
exports.dance = dance
exports.sing = sing