// 将二维或者多维数组转换成一维数组

// let test = [1,2]
// console.log(test.concat(3));
// console.log(test.concat([4,5]));
let arr = [1,2,[3, 4, [5, 6]]]

function arrFlutten(arr) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    var arrItem = arr[i];
    if(Array.isArray(arrItem)){
      // 递归 函数内部调用函数自身， 递归必须要有结束的条件，否则就是死循环
      result = result.concat(arrFlutten(arrItem))
    }else {
      result = result.concat(arrItem)
    }
  }
  return result;
}

console.log(arrFlutten(arr));

// reduce
//
// let testArr = [1,2,3,4]
// let testResult = testArr.reduce((pre, next) => {
//   console.log(pre, next);
//   return pre + next;
// }, 0)
//
// console.log(testResult);

function arrFlutten2(arr) {
  return arr.reduce((result, arrItem) => {
    return result.concat(Array.isArray(arrItem)?arrFlutten2(arrItem): arrItem)
  }, [])
}

console.log(arrFlutten2(arr));

// ES6
let arrFlutten3 = arr => arr.reduce((result, arrItem) => result.concat(Array.isArray(arrItem)?arrFlutten2(arrItem): arrItem), [])
console.log(arrFlutten3(arr));
