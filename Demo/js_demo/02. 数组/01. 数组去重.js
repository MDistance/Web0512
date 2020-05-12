let arr = [1,2,2,2,1,3,5,4,6,3];

// ES5
function uniqArr(arr) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    var arrItem = arr[i];
    // 判断，如果result中没有对应的元素，才添加
    if(result.indexOf(arrItem) === -1){
      result.push(arrItem)
    }
  }
  return result;
}

console.log(uniqArr(arr));

// ES6
console.log(new Set(arr));
// function uniqArr2(arr) {
//   let result = [];
//   //  Set容器： 放置多个不重复的value
//   let set = new Set(arr);
//   for(let item of set){ // for of 专门供iterator接口使用
//     result.push(item)
//   }
//   return result;
// }
console.log(...new Set(arr));

function uniqArr2(arr) {
  //  Set容器： 放置多个不重复的value
  return [...new Set(arr)];
}

console.log(uniqArr2(arr));
// ES6简写方式
let uniqArr3 = arr => [...new Set(arr)];
console.log(uniqArr3(arr));
