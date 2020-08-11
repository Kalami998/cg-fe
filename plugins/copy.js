// 复制功能
export function copyFunc(e, target) {
  console.log(e, '点击位置')
  e.xdata =
    e.target.offsetLeft && e.target.offsetLeft > e.pageX
      ? e.target.offsetLeft - 38
      : e.pageX - 38
  e.ydata =
    e.target.offsetTop && e.target.offsetTop > e.pageY
      ? e.target.offsetTop + 22
      : e.pageY + 22
  document.querySelector(
    '.copy-success'
  ).style.transform = `translate3d(${e.xdata}px, ${e.ydata}px, 0)`
  document.querySelector('.copy-success').style.display = 'block'
  setTimeout(() => {
    document.querySelector('.copy-success').style.display = 'none'
  }, 1000)
  const copyData = document.createElement('input')
  copyData.value = target
  document.body.appendChild(copyData)
  copyData.select()
  document.execCommand('Copy')
  copyData.remove()
}
