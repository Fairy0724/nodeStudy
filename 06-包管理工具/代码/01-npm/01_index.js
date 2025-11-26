// 1. 引入uniq模块-去重
/**导入当前目录下的node_modules（当前没有就去父目录找）中的
 * uniq模块的package.json文件中main指定的文件
 * main文件指向的就是uniq.js文件 
**/
const uniq = require('uniq')
// 2.使用数组
const arr = [1, 2, 2, 3, 4, 4, 5]

console.log(uniq(arr))