import axios from 'axios';

function AxDownLoader(options) {
    return new Promise((resolve, reject) => {
        options.downloadProgress = 0;
        const CancelToken = axios.CancelToken;
        axios({
            url: options.url,
            responseType: 'blob',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            cancelToken: new CancelToken(function executor(c) {
            }),
            onDownloadProgress: function (progress) {
                const { loaded, total } = progress;
                options.fileSize = total;
                if (progress.lengthComputable) {
                    options.downloadSize = loaded;
                    options.downloadProgress = +((loaded / total) * 100.0).toFixed(1);
                }
            },
        })
            .then((res) => {
            let link = document.createElement('a');
            link.href = URL.createObjectURL(res.data);
            link.download = options.fileName;
            document.body.appendChild(link);
            link.click();
            URL.revokeObjectURL(link.href);
            resolve(res);
        })
            .catch((e) => {
            reject(e);
        });
    });
}

export { AxDownLoader as default };
