// 导出文件的方法，处理事件流
export function exportExcel(res) {
  const header = res.headers['content-disposition']
  const contentList = header.split('=')
  const fileName = decodeURI(contentList[1])
  const fileURL = window.URL.createObjectURL(new Blob([res.data]))
  const fileLink = document.createElement('a')

  fileLink.href = fileURL
  fileLink.setAttribute('download', fileName)
  document.body.appendChild(fileLink)

  fileLink.click()
  window.URL.revokeObjectURL(fileURL)
  // 导出文件成功
}
