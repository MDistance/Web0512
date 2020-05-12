import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import cart from './modules/cart'

Vue.use(Vuex)

// 生产store对象

// export default new Vuex.Store({
// 	state,
// 	mutations,
// 	actions,
// 	getters
// })

export default new Vuex.Store({
	modules: {
		home,
		cart
	}
})