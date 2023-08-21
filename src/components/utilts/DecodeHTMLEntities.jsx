function DecodeHtmlEntities(str) {
  if (str !== undefined && str !== null && str !== '') {
    str = String(str)

    str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '')
    str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '')
    let element = document.createElement('div')
    element.innerHTML = str
    str = element.textContent
    element.textContent = ''
  }
  return str
}

export default DecodeHtmlEntities
