import axios from './axios'

export function getRank(){
	return axios({
		method:"get",
		url:'/rank/get'
	})
}


