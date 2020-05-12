// 宏任务 & 微任务
//
/*
* 事件队列分类：
* 宏任务队列
*   1. 宏任务队列用于放置所有的宏任务
*   2. 宏任务队列中的任务不会一次性执行完
*   3. 没执行一个宏任务之前会先查看微任务队列是否有可执行的微任务(如果有就将微任务队列的所有任务执行完才会执行下一个宏任务)
*   4. 常见的宏任务： 定时器的回调，事件的回调， ajax的回调
* 微任务队列
*   1. 微任务队列用于放置所有的微任务
*   2. 微任务队列的任务会一次性全部执行完，才会执行下一个宏任务
*   3. Promise的的回调
* js代码执行的顺序：
*   主线程上的同步代码 ----> 先看是否有微任务(如果有就执行所有的微任务，如果没有执行宏任务队列的第一个宏任务)-> 执行下一个宏任务后查看是否有微任务
* */

console.log('0');
setTimeout(() => {
  console.log('1');
}, 0)

new Promise(function (resolve, reject){
  console.log('2');
  resolve();
}).then(function () {
  console.log('3');
  new Promise(function (resolve, reject){
    console.log('5');
    resolve();
  }).then(function () {
    console.log('6');
  })
  
})


console.log('4');
// 0 2 4 3 5 6 1
