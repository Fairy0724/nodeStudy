// 观后感.txt

// 流式写入-----适合大文件以及写入频繁的场景

// 1.引入fs模块
const fs = require('fs')

// 2.创建一个写入流对象
const ws = fs.createWriteStream('./观后感.txt')

// 3.使用write方法写入数据
ws.write('半亩方塘一鉴开\n')
ws.write('天光云影共徘徊\n')
ws.write('问渠那得清如许\n')
ws.write('为有源头活水来\n')

// 4.关闭写入流
ws.end()
