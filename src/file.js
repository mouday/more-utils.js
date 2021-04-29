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
