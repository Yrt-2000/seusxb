<template>
	<div class="bottom-bar">
		 <div class="nonbutton"></div>
		 <div class="button" @click="press">打卡</div>
	</div>
</template>

<script>
	import {taskCommit} from '../../network/task.js'
	import {Message} from 'element-ui'
	export default{
		name:"bottom-bar",
		methods:{
			press(){
				taskCommit(this.taskNum).then( res => {
					if(res.success){
				  Message({
				             showClose: true,
				             message: '打卡成功',
				             type: 'success',
				             duration: 1500
				     })
					}
				else{
					Message({
					           showClose: true,
					           message: res.reason,
					           type: 'warning',
					           duration: 1500
					   })
				}
				}).catch( err => {
					Message({
					           showClose: true,
					           message:'操作失败',
					           type: 'error',
					           duration: 1500
				})	 
			})
				// console.log(this.taskNum)
				if(this.taskNum == 2){
					window.open('https://xgbxscwx.seu.edu.cn/#/')
				}
		}
	},
	props:{
		taskNum:String
	}
	}
</script>

<style>
	.bottom-bar{
		height: 49px;
		bottom: 0;
		left: 0;
		right: 0;
		position: fixed;
		background-color: white;
		display: flex;
		text-align: center;
	}
	.button{
		width: 6.25rem;
	  padding-top: 15px;
		background-color: #55AA7F;
		color: white;
		font-weight: 550;
		height: 49px;
		}
	.nonbutton{
		flex: 1;
	}
	a{
		text-decoration: none;
	}
</style>