// 回文： 上海自来水来自海上

function isHuiWen(str) {
  // return 原字符串 === 翻转之后的字符串
  
  return str === str.split('').reverse().join('');
}


let str = '上海自来水来自海上'
let str2 = '上海自来水来自海上2222'

console.log(isHuiWen(str));
console.log(isHuiWen(str2));
