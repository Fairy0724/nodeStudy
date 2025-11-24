// 1.buffer与字符串的相互转换
// 数字代表字符的ASCII码
const buf_1 = Buffer.from([104, 101, 108, 108, 111])
// 从buffer中提取字符串
console.log(buf_1.toString())

// buffer读写
// []
const buf_2 = Buffer.from('hello')
// 读取buf_2[0]的二进制表示
console.log(buf_2[0].toString(2))

// 溢出
buf_2[0] = 365
// 365的二进制表示为101101101
// 取后8位为10110110---舍弃高位
console.log(buf_2[0].toString(2))
// 10110110的十进制表示为182
console.log(buf_2.toString())
