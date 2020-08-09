// 复制功能
export function copyFunc(target) {
  const copyData = document.createElement('input')
  copyData.value = target
  document.body.appendChild(copyData)
  copyData.select()
  document.execCommand('Copy')
  copyData.remove()
}
