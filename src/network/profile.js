import axios from './axios'

export function getdata(){//不知道token 怎么用?
	return axios({
		method:"get",
		url:'/user/get/basic',
		params:{
			
		}
	})
}

export function changename(name){
	return axios({
		method:"get",
		url:'/user/sumbit/update',
		params:{
			name 
		}
	})
}

export function taskCompleted(){
	return axios({
		method:'get',
		url:'',
		params:{
			
		}
	})
}