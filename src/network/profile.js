import axios from './axios'

export function getdata(){
	return axios({
		method:"get",
		url:'/user/get/basic',
		params:{
			
		}
	})
}

export function changename(newname){
	return axios({
		method:"get",
		url:'/user/sumbit/updateName',
		params:{
			newname 
		}
	})
}

export function taskCompleted(){
	return axios({
		method:'get',
		url:'/user/get/doneList',
		params:{
			
		}
	})
}

export function joininteam(newteamname){
	return axios({
		method:"get",
		url:'/user/submit/joinTeam',
		params:{
			newteamname
		}
	})
}

export function createteam(newteamname){
	return axios({
		method:"get",
		url:"/user/submit/createTeam",
		params:{
			newteamname
		}
	})
}