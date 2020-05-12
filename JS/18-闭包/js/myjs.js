function myMoudle() {
	var money = 1000000;

	function getMoney() {
		console.log(money);
	}

	function setMoney(num) {
		money += num;
	}

	window.setMoney = setMoney;
	window.getMoney = getMoney;
}