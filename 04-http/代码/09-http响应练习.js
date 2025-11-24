/**
 * 练习：四行三列表格，隔行换色，点击高亮
* */
// 引入http模块
const http = require('http')
// 创建http服务对象
const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html; charset=utf-8')
  // 设置响应体
  response.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        td{
        padding:20px 40px;
        }
        table tr:nth-child(odd){
          background-color: #f2f2f2;
        }
        table,td{
          border-collapse: collapse;
        }
      </style>
    </head>
    <body>
      <table border="1">
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <script>
      // 获取所有的td元素
      const tds = document.querySelectorAll('td');
      // 遍历每一个td元素，绑定点击事件
      tds.forEach(td =>{
        td.onmouseover = ()=>{
          // 设置hover高亮
          td.style.backgroundColor = 'yellow';
        }
        td.onmouseout = ()=>{
          // 鼠标移出，取消hover高亮
          td.style.backgroundColor = '';
        }
      })
      </script>
    </body>
    </html>
  `)
})

// 绑定端口号，启动服务
server.listen(9000, () => {
  console.log('服务已启动...端口9000监听中...')
})
