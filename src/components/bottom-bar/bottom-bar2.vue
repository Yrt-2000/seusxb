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
				taskCommit(this.taskNum).then(res => {
					Message({
					           showClose: true,
					           message: res.data.Description,
					           type: 'success',
					           duration: 1000
					   })
				}).catch(err =>{
					Message({
						           showClose: true,
						           message: err.error.Description,
						           type: 'error',
						           duration: 1000
					})
				})
				// console.log(this.taskNum)
		}
	},
	props:{
		taskNum:Number
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