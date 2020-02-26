import axios from './axios'

export function taskCommit(taskNum){
	return axios({
		method:"get",
		url:'/user/submit/checkTask',
		params:{
			taskNum
		}
	})
}