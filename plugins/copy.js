const selection = this.getSelection()
const range = document.createRange()
let selectedText = ''
// 复制功能
export function copyFunc(nodeObj) {
  range.selectNodeContents(nodeObj)
  selection.removeAllRanges()
  selection.addRange(range)
  selectedText = selection.toString()
  document.exec('copy')
  return selectedText
}
