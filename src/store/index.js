import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isAdmin: false,
		//存储token
		Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
	},
	mutations: {
		//修改token,并存入本地
		changeLogin(state, user) {
			state.Authorization = user.Authorization;
			localStorage.setItem('Authorization', user.Authorization);
		},
		logout(){
			localStorage.setItem('Authorization',"");
		}
	},
	actions: {
	},
	modules: {
	}
})
