const state = {
	initData: 'home初始化的测试数据',
	homeArr: []
}

// mutation
const mutations = {
	changeHomeArr(state, arr){
		state.homeArr = arr
		// 在mutation异步修改状态数据的话调试工具会保留修改之前的状态数据
		// setTimeout(() => {
		// 	state.homeArr = arr
		// }, 2000)
	}
}


// actions
const actions = {
	getHomeDataAction({commit}){
		// 执行异步任务， 获取数据
		let arr  = [1,2,3] // 请求模拟数据
		// 触发mutation，同时将异步数据交给mutation
		commit('changeHomeArr', arr)
	}
}





// 向外暴露当前模块的store对象
export default {
	state,
	mutations,
	actions
}