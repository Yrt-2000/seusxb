import axios from './axios'

export function getdata(){
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

export function joininteam(teamname){
	return axios({
		method:"get",
		url:'',
		params:{
			teamname
		}
	})
}