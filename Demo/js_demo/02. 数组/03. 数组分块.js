// 分块： 将一个大的数组切割几个小的数组 lodash._chunk
// let arr = [1,2,3,4,5,6,7,8,9,10] lodash._chunk(arr, 3)
//  [[1,2,3]  [4,5,6] [7,8,9] [10]]

let arr = [1,2,3,4,5,6,7,8,9, 10]
// console.log(arr.slice(0, 3));
// console.log(arr.splice(0, 3));
// console.log(arr.splice(0, 3));
// console.log(arr.splice(0, 3));
// console.log(arr);  //[1,2,3,4,5,6,7,8,9,10]
let num = 123;
console.log(Object.prototype.toString.call(num).slice(8, -1));



function chunk(arr, size) {
  if(!Array.isArray(arr) || Object.prototype.toString.call(size).slice(8,  -1) !== 'Number' || size <= 0){
    return arr;
  }
  let result = [];
  while(arr.length >= size){
    result.push(arr.splice(0, size))
  }
  arr.length && result.push(arr)
  return result;
}

// console.log(chunk(arr, 3));
// console.log(chunk(arr, 4));
console.log(chunk(arr, 2));

// 不能切割的案例
// console.log(chunk(num, 3));
// console.log(chunk(arr, -8));
// console.log(chunk(arr, 0));
