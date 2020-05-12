### 示例
	<input type="checkbox" checked=false >

### html的标签属性:
	预定义的标签属性: type checked
		浏览器会去读取预定义属性的值 并在浏览器上做出相应的动作
	自定义的标签属性: damu
		自定义标签属性只有一个功能;用于携带数据

	数据类型是js中的概念!!! 千万不要带入到HTML中
        在HTML中 是没有数据类型的!!!!
	html中对于类似于checked这种标签属性 我们建议的写法:
        checked="checked" 	

### 什么是attr&prop
	attribute: 对html标签所有属性的抽象
	property: type checked
		一般我们把dom元素节点的直接属性 我们称之为property;
		property一般用来抽象预定义的标签属性;
		property一般可以分为两类:
			布尔值属性:checked (重点讨论的!!!  因为用户是可以操作到布尔值属性的)
			非布尔值属性:type

### 布尔值属性 attr&prop的同步问题
		没有动过prop
			attr的修改 会去同步 prop
		动过prop
			attr的修改 不会去同步 prop
		不管什么情况下    
			prop的修改 不会同步 attr

### 用户操作&浏览器渲染
	浏览器在渲染的时候 到底是根据attr? 还是根据prop?
		prop
	用户在界面上操作的时候 到底动的是attr? 还是prop?
		prop	

### 总结
	布尔值属性 一定要通过prop进行操作				


