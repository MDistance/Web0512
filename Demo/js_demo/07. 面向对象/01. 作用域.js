// 作用域
var a = 10;
function fun() {
  var a = 20;
  fun2();
}

function fun2() {
  console.log(a);
}

fun(); //
