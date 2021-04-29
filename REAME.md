# more-utils.js

整合一些常用的浏览器客户端环境下的函数方法

- npm: https://www.npmjs.com/package/more-utils


已整理归纳：

```js
// 1、上传的file转Base64 DataURL
fileToBase64(file)

// 2、Base64转Blob
base64ToBlob(base64)

// 3、将file对象或blob对象转url
getObjectURL(obj)
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
