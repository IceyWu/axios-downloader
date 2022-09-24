(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('axios')) :
  typeof define === 'function' && define.amd ? define(['axios'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.tracker = factory(global.axios));
})(this, (function (axios) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

  function AxDownLoader(options) {
      return new Promise((resolve, reject) => {
          options.downloadProgress = 0;
          const CancelToken = axios__default["default"].CancelToken;
          axios__default["default"]({
              url: options.url,
              responseType: 'blob',
              headers: { 'Content-Type': 'application/json; charset=utf-8' },
              cancelToken: new CancelToken(function executor(c) {
                  options.cancel = c;
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

  return AxDownLoader;

}));
