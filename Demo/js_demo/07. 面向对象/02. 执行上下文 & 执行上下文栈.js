// 执行上下文

var a = 10;
function fun() {
  var b = 20;
  function fun2() {
    var c = 30;
    function fun3() {
      var d = 40;
      console.log(a);
      console.log(b);
      console.log(c);
      console.log(d);
      console.log(e);
    }
    fun3();
  }
  fun2();
}

fun();
