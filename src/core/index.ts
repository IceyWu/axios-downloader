import axios from 'axios'
import { DefaultOptons } from '../types/core'

let cancel = () => {}

export default function AxDownLoader(options: DefaultOptons) {
  return new Promise((resolve, reject) => {
    options.downloadProgress = 0
    let uniSign = Date.now()
    const CancelToken = axios.CancelToken
    axios({
      url: options.url,
      responseType: 'blob',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      cancelToken: new CancelToken(function executor(c: any) {
        cancel = c
      }),

      onDownloadProgress: function (progress: any) {
        const { loaded, total } = progress
        options.fileSize = total
        if (progress.lengthComputable) {
          options.downloadSize = loaded
          options.downloadProgress = +((loaded / total) * 100.0).toFixed(1)
        }
      },
    })
      .then((res: any) => {
        let link = document.createElement('a')
        link.href = URL.createObjectURL(res.data)
        link.download = options.fileName
        document.body.appendChild(link)
        link.click()
        URL.revokeObjectURL(link.href)
        resolve(res)
      })
      .catch((e) => {
        reject(e)
      })
  })
}
