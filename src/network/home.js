import axios from './axios'

export function getRank(){
	return axios({
		method:"get",
		url:'/user/get/rankBoard'
	})
}


