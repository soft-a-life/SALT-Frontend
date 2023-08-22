function DecodeHTMLEntities(str) {
  return str.toString().replace(/&#(\d+);/g, (match, dec) => {
    return String.fromCharCode(dec)
  })
}

export default DecodeHTMLEntities
