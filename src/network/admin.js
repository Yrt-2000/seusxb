import axios from './axios'

export function record(QQ,taskNum){
	return axios({
		method:'get',
		url:'/admin/task/checkTask',
		params:{
			QQ,taskNum
		}
	})
}


export function update(){
	return axios({
		method:'get',
		url:'/admin/rank/update'
	})
}

export function team(){
	return axios({
		method:'get',
		url:'admin/team/get'
	})
}

export function user(){
	return axios({
		method:'get',
		url:'admin/user/get'
	})
}