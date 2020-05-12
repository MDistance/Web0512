// 二叉树算法
// a 和 b 游戏： a说我随便想一个1-100的数， b来猜是几， 看几次能猜对，b随便想一个1-100的数， a来猜是几， 看几次能猜对
// 1-100

// 27
// 1-50 || 51-100
// 1-25 || 26 - 50
// 26 - 37 || 38 - 50
// 26 - 31
// 26- 29
// 26. 27 || 28 29
// 27



// [2,5,4,3,1,7,6]
// flag : 3  原数组： [2,5,4,1,7,6]
// 左数组[2, 1]， 3，右数组[5, 4, 6, 7]
// 左数组[1, 2]， 3，右数组[5, 4, 6, 7] --

// flag 6 [5, 4,  7]
//[5,4] 6 [7]
// [4] [5] 6 [7]

let arr = [2,5,4,3,1,7,5,6];

function quickSort(arr) {
  if(arr.length <= 1){
    return arr;
  }
  let flag = Math.floor(arr.length / 2);
  let flagValue = arr.splice(flag, 1)[0];
  
  let leftArr = [];
  let rightArr = [];
  
  for (var i = 0; i < arr.length; i++) {
    var arrItem = arr[i];
    if(arrItem < flagValue){
      leftArr.push(arrItem);
    }else {
      rightArr.push(arrItem);
    }
  }
  
  
  leftArr = quickSort(leftArr);
  rightArr = quickSort(rightArr);
  
  return [...leftArr, flagValue, ...rightArr]
}



console.log(quickSort(arr));
