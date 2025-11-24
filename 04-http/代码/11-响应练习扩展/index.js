// 获取所有的td元素
const tds = document.querySelectorAll('td');
// 遍历每一个td元素，绑定点击事件
tds.forEach(td => {
  td.onmouseover = () => {
    // 设置hover高亮
    td.style.backgroundColor = 'yellow';
  }
  td.onmouseout = () => {
    // 鼠标移出，取消hover高亮
    td.style.backgroundColor = '';
  }
})