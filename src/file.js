/**
 * 上传的file转Base64 DataURL
 * ref: https://segmentfault.com/a/1190000020153597
 */
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      resolve(e.target.result);
    };
  });
}

/**
 * Base64转Blob
 */
export function base64ToBlob(base64) {
  let arr = base64.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new Blob([u8arr], { type: mime });
}

/**
 * 将file对象或blob对象转url
 * ref: https://www.cnblogs.com/linxue/p/9469715.html
 */
export function getObjectURL(obj) {
  var url = null;
  if (window.createObjectURL != undefined) {
    url = window.createObjectURL(obj);
  } else if (window.URL != undefined) {
    // mozilla(firefox)
    url = window.URL.createObjectURL(obj);
  } else if (window.webkitURL != undefined) {
    // webkit or chrome
    url = window.webkitURL.createObjectURL(obj);
  }
  return url;
}

/**
 * 监听粘贴事件，从剪切板获取图片blob
 * @param {*} element
 * @param {*} callback
 * ref: https://segmentfault.com/a/1190000004288686
 */
export function pasteImageFromClipboard(element, callback) {
  // demo 程序将粘贴事件绑定到 document 上
  element.addEventListener(
    "paste",
    function (e) {
      // console.log('paste');
      var cbd = e.clipboardData;
      var ua = window.navigator.userAgent;

      // 如果是 Safari 直接 return
      if (!(e.clipboardData && e.clipboardData.items)) {
        return;
      }

      // Mac平台下Chrome49版本以下 复制Finder中的文件的Bug Hack掉
      if (
        cbd.items &&
        cbd.items.length === 2 &&
        cbd.items[0].kind === "string" &&
        cbd.items[1].kind === "file" &&
        cbd.types &&
        cbd.types.length === 2 &&
        cbd.types[0] === "text/plain" &&
        cbd.types[1] === "Files" &&
        ua.match(/Macintosh/i) &&
        Number(ua.match(/Chrome\/(\d{2})/i)[1]) < 49
      ) {
        return;
      }

      for (var i = 0; i < cbd.items.length; i++) {
        var item = cbd.items[i];
        if (item.kind == "file") {
          var blob = item.getAsFile();
          if (blob.size === 0) {
            return;
          }
          // blob 就是从剪切板获得的文件 可以进行上传或其他操作
          callback(blob);
        }
      }
    },
    false
  );
}
