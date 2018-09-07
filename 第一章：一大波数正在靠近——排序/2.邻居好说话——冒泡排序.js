/*
 * @Author: carson.chen 
 * @Date: 2018-09-07 15:57:55 
 * @Last Modified by: carson.chen
 * @Last Modified time: 2018-09-07 16:22:37
 * @Description: 我们需要将 12 35 99 18 76 这 5 个数进行从大到小的排序。
 * 
 * 优化后的冒泡排序
 * 如果在某次的排序中没有出现交换的情况，
 * 那么说明在无序的元素现在已经是有序了，就可以直接返回了。
 */

function sort5(array) {
  let len = array.length, tmp, exchange, result;

  result = array.slice(0);

  for (let i = 0; i < len; i++) {
    exchange = 0;
    for (let j = len - 1; j > i; j--) {
      if (result[j] > result[j - 1]) {
        tmp = result[j];
        result[j] = result[j - 1];
        result[j - 1] = tmp;
        exchange = 1;
      }
    }
    if (!exchange) return result;
  }
  
  return result;
}

let array = [12, 35, 99, 18, 76]
console.log(sort5(array))