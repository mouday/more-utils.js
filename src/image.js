/**
 * 通过url获取图片的尺寸
 * @param {string} url 
 * @returns {width, height}
 */
export function getImageSizeByUrl(url) {
  return new Promise(function (resolve, reject) {
    let image = new Image();
    image.onload = function () {
      resolve({
        width: image.width,
        height: image.height,
      });
    };
    image.onerror = function () {
      reject(new Error('error'));
    };
    image.src = url;
  });
}

/**
 * 获取一个img元素的尺寸
 */
export async function getImageSize(img) {
  if (img.naturalWidth) {
    // 适用于Firefox/IE9/Safari/Chrome/Opera浏览器
    return {
      width: img.naturalWidth,
      height: img.naturalHeight,
    };
  } else {
    return await getImageSizeByUrl(img.src);
  }
}
