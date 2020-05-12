// 从开始往后分别对应两两值的大小，如果大小没有按照要求 就交换位置
let arr = [2,5,4,3,1,7,6];

// [2,1,5,4,3,7,6]
// [1,2,5,4,3,7,6]
// [1,2,4,3,5,6,7] 1
// [1,2,4,3,5,6,7] 2

let a = 2;
let b = 3;

a = a + b;
b = a - b; // b = a;
a = a - b

// a = 3 b = 2

function maopao(arr) {
  // 控制PK的轮数
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if(arr[j] > arr[j + 1]){
        // 升序
        // 如果前者大于后者，交换位置
        arr[j] = arr[j] + arr[j + 1];
        arr[j + 1] =  arr[j] - arr[j + 1];
        arr[j] = arr[j] - arr[j + 1];
      }
    }
  }
  
  return arr;
}

console.log(maopao(arr));
