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

export function user(){
	return axios({
		method:'get',
		url:'admin/user/get'
	})
}

export function team2(teamname){
	return axios({
		method:'get',
		url:'admin/team/members',
		params:{
			teamname
		}
	})
}