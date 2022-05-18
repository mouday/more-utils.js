# more-utils.js

整合一些浏览器客户端环境下常用的函数方法

- npm: https://www.npmjs.com/package/more-utils
- github: https://github.com/mouday/more-utils.js

安装
```
npm i more-utils
```

已整理归纳：

file.js
```js
// 1、上传的file转Base64 DataURL
fileToBase64(file)

// 2、Base64转Blob
base64ToBlob(base64)

// 3、将file对象或blob对象转url
getObjectURL(obj)

// 4、监听粘贴事件，从剪切板获取图片file对象
pasteImageFromClipboard(element, callback)
```
array.js
```js

```
使用示例

```html
<template>
  <div class="">

    <input
      type="file"
      accept="image/*"
      @change="handleImageChange"
    >

    <img
      :src="imgObj"
      alt=""
    >
  </div>
</template>

<script>
import mo from 'more-utils'

export default {
  name: '',

  props: [],

  components: {},

  data() {
    return {
      imgObj: null,
    };
  },

  computed: {},

  methods: {
    async handleImageChange(event) {
      // 1、获取选择的文件对象（不能显示）
      let file = event.target.files[0];
      // 获取文件对象的url(可以显示)
      // let url = getObjectURL(file);

      // 2、获取文件base64（可以显示）
      let b64 = await mo.fileToBase64(file);

      // 3、获取blob(不能显示)
      let blob = mo.base64ToBlob(b64);

      // 4、 获取对象url（可以显示）
      let url = mo.getObjectURL(blob);
      console.log(url);
      this.imgObj = url;
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
</style>
```


示例

```html
<img class="image"
         src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091307%2Fntplrtyw2bvntplrtyw2bv.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655389703&t=4423dd371c66b6064a1ed3c4dc5e05cd"
         alt="">

    <script src="./dist/more-utils.js"></script>
    <script>
        (async () => {
            let image = document.querySelector('.image')
            let image_size = await more_utils.getImageSize(image)
            console.log(image_size)
            // {width: 1920, height: 1200}
        })()
    </script>
```