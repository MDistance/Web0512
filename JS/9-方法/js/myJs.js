

function getRandom(a, b) {
	//获取一个区间的随机数
	return Math.floor(Math.random() * (b - a + 1) + a);
}

function getRandomCode(n) {
	//获取随机验证码，位数可以自己确定
	var str = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
	var code = '';
	//第二步：拼接验证码
	//字符串是有序的东西，只不过字符串是一个常量，无法更改，但是我们可以查找使用，而且也可以当数组使用。
	//字符串也有下标和长度；
	//			str[0] = 'r';
	//			console.log(str[0]);

	for(var i = 0; i < n; i++) {
		code += str[Math.floor(Math.random() * str.length)]
	}

	return code;
}

function getDateAndTimeString() {
	//获取当前时间的格式化字符串
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var time = date.toLocaleTimeString();
	return '现在是' + year + '年' + month + '月' + day + '日  ' + time;
}