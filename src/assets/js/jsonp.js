import originJsonp from 'jsonp'

export default function jsonp2(url, data, option) {
  url += (url.indxOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function param(data) {
  let url = ''
  for (let k in data) {
    let value = data[k] !== undefined ? encodeURIComponent(data[k]) : ''
    url += `&${k}=${value}`
  }
  return url ? url.substring(1) : ''
}
