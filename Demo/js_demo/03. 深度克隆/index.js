// 深度克隆
// 赋值操作： 值传递，引用传递
// 引用传递： 修改赋值之后的数据会影响原数据
// 深度克隆： 值传递，修改新的数据不会影响原数据

// 值传递
let num = 123;
let num2 = num;
num2 = 234;
console.log(num, num2);
// 引用传递
let person = {username: 'kobe'};
let person2 = person;
person2.username = 'wade'
console.log(person, person2);

// 浅克隆 concat
let arr = [1,2,3, {username: 'kobe'}]
// let arr2 = arr.concat()
// console.log(arr2, arr);
//
// arr2[3].username = 'curry'
// console.log(arr2, arr);

// 深度克隆  JSON.parse(JSON.stringify(target)) 但是处理不了函数
let arr2 = JSON.parse(JSON.stringify(arr))
arr2[3].username = 'curry';
console.log(arr2, arr);

// function fun() {
//   console.log('xxxx');
// }
//
// let fun2 = fun;
// fun2.msg = '新添加的数据'
// console.log(fun.msg);
//
// fun2 = function(){
//   console.log('xxxx');
// }
// fun();
// fun2();
//
//
// person.username,   arr[0]
function checkType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

function clone(target) {
  let result;
  // 判断数据类型
  let targetType = checkType(target);
  if(targetType === 'Object'){
    result = {};
  }else if(targetType === 'Array'){
    result = [];
  }else {
    return target;
  }
  
  // person.username  arr[0]
  for(let item in target){ // 枚举对象 item是对象中的所有的key  for in也可以遍历数组，枚举的是数组的下标
    // 拷贝的数据还是引用类型， 继续遍历深度拷贝
    if(checkType(target[item]) === 'Object' || checkType(target[item]) === 'Array'){
      result[item] = clone(target[item])
    }else {
      result[item] = target[item]
    }
  }
  return result;
}


let person4 = {username: 'xiaoming', sex: {option1: 'boy', option2: 'girl'}};

// let result = {}
// result['username'] = person4['username'];
// result['sex'] = person4['sex']; // 引用传递
let person5 = clone(person4)
// person5.username = 'zhangsan'
person5.sex.option1 = 'double'
console.log(person5, person4);
