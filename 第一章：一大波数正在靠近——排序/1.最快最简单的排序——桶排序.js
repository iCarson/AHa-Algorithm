/*
 * @Author: carson.chen 
 * @Date: 2018-09-07 15:45:37 
 * @Last Modified by: carson.chen
 * @Last Modified time: 2018-09-07 16:22:35
 * @Description: 
 *  期末考试完了老师要将同 学们的分数按照从高到低排序。
 *  小哼的班上只有 5 个同学，这 5 个同学分别考了 5 分、3 分、 5 分、2 分和 8 分，
 *  哎考得真是惨不忍睹(满分是 10 分)。
 *  接下来将分数进行从大到小排序， 排序后是 8 5 5 3 2。
 */

function pail(arr, max) {
  // 首先我们要 max + 1 个水桶，并且初始化为 0
  let pail = new Array(max + 1);
  for (let i = 0; i <= max; i++) {
    pail[i] = 0;
  }

  // 然后，将对应的分数放入到对应编号的桶里
  arr.forEach(function (x) {
    pail[x]++;
  });

  // 然后就是从后往前 查水桶喽~
  let newArr = [];
  for (let i = max; i >= 0; i--) {
    for (let j = 0; j < pail[i]; j++) {
      newArr.push(i);
    }
  }

  return newArr
}

let arr = [5, 3, 5, 2, 8] // 分数
let max = 10 // 满分
console.log(pail(arr, max))