//


function fun() {
  var a = 10;
  var b = 20;
  function fun2() {
    console.log(a);
  }
  
  return fun2;
}

var fun2 = fun();
fun2();
