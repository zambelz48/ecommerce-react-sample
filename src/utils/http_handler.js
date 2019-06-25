export default (method, url, params = {}, mimeType = 'application/json') => {
  return new Promise((resolve, reject) => {

    const request = new XMLHttpRequest()

    request.open(method, url, true)

    request.setRequestHeader('Access-Control-Allow-Origin', '*')
    request.setRequestHeader('Content-type', 'application/json;charset=UTF-8')

    if (mimeType && request.overrideMimeType) {
      request.overrideMimeType(mimeType)
    }

    request.addEventListener('load', (evt) => {

      const target = evt.target
      const response = JSON.parse(target.responseText)
      const responseCode = response.status || request.status

      if (responseCode >= 200 && responseCode < 300) {
        resolve(response)
      } else {
        reject(response)
      }
    })

    const requestParams = JSON.stringify(params)
    request.send(requestParams)
  })
}
