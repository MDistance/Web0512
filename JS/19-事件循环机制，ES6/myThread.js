//1 1 2 3 5 8
//给定一个月份，求这个月份你有几对兔子      第10个月有几对？
//递归双刃剑：明确的结束条件、有趋近于结束条件的趋势；
function fibonacci(n) {
	//n代表第几个月
	if(n <= 2) {
		return 1;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}


self.onmessage = function(event){
//	console.log(event.data);
	
	var result = fibonacci(event.data);
	
	self.postMessage(result);
	
}
