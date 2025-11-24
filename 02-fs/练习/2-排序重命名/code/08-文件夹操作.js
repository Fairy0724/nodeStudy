// 1. 引入fs模块
const fs = require('fs')

// 2.创建文件夹 mk-->make dir-->directory 
// fs.mkdir('./html', err => {
//   if (err) {
//     console.log('创建失败')
//     return
//   } else {
//     console.log('创建成功')
//   }
// })

// // 3.递归创建文件夹
// fs.mkdir('./a/b/c', { recursive: true }, err => {
//   if (err) {
//     console.log('创建失败')
//     return
//   } else {
//     console.log('创建成功')
//   }
// })

// 4.读取文件夹
fs.readdir('../资料', (err, data) => {
  if (err) {
    console.log('读取失败')
    return
  } else {
    console.log(data)
  }
})

// 5.删除文件夹
// fs.rmdir('./html', err => {
//   if (err) {
//     console.log('删除失败')
//     return
//   } else {
//     console.log('删除成功')
//   }
// })

// 6.递归删除文件夹
fs.rm('./a', { recursive: true }, err => {
  if (err) {
    console.log('删除失败')
    return
  } else {
    console.log('删除成功')
  }
})