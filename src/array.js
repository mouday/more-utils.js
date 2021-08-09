/**
 * 将列表拼接成字符串
 * @param list      Array 列表
 * @param separator String 分隔符
 * @param empty     String 为空时显示内容
 * @returns String
 * eg:
 *  input: [北京, 海淀区]
 *  output: 北京-海淀区
 */
export function joinArray(list, separator = '-', empty = '-') {
  if (!list || list.length == 0) {
    return empty;
  }
  
  // 过滤空数据
  let lst = list.filter((item) => {
    return Boolean(item);
  });

  // 传入的地址列表 中间使用点连接，如果没有返回-
  return lst.join(separator);
}
