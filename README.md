## 🚀 Features

- 🏳‍🌈 **Downloading size**: Monitor download size
- ⚡ **Downloading downloadProgress**

## 🦄 Usage

```ts
import { ref } from 'vue'
import axios from 'axios'
import AxDownLoader from 'axios-downloader'

// Options
const AxDownLoaderOption = ref({
  url: 'https://images.unsplash.com/photo-1663529628961-80aa6ebcd157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  fileName: 'test',
  fileSize: 0,
  downloadSize: 0,
  downloadProgress: 0,
})

// downLoad
const downLoad = function () {
  AxDownLoader(AxDownLoaderOption.value)
    .then((res) => {
      console.log('downLoad success', res)
    })
    .catch((err) => {
      console.log('downLoad faild', err)
    })
}
```

## 📦 Install

```bash
npm i axios-downloader
```
