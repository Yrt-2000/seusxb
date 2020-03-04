import axios from './axios'

export function record(QQ,taskNum){
	return axios({
		method:'get',
		url:'/admin/user/checkTask',
		params:{
			QQ,taskNum
		}
	})
}

export function teamupdate(){
	return axios({
		method:'get',
		url:'/admin/team/update'
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

export function user(limit){
	return axios({
		method:'get',
		url:'admin/user/get',
		params:{
			limit
		}
	})
}

export function searchTeam(teamname){
	return axios({
		method:'get',
		url:'admin/team/members',
		params:{
			teamname
		}
	})
}

export function searchUser(limit){
	return axios({
		method:'get',
		url:'admin/user/taskget',
		params:{
			limit
		}
	})
}

