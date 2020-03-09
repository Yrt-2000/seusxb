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
					if (res.reason == "登陆过期,请重新登陆"){
						localStorage.removeItem('Authorization');
						 this.$router.push('/login');
					}
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
					this.$store.state.dialogVisible = true
					
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
		z-index: 10;
		height: 49px;
		bottom: 0;
		left: 0;
		right: 0;
		position: fixed;
		background-color: white;
		display: flex;
		
	}
	.button{
		width: 6.25rem;
	  padding-top: 15px;
		background-color: #55AA7F;
		color: white;
		font-weight: 550;
		height: 49px;
		text-align: center;
		}
	.nonbutton{
		flex: 1;
	}
	a{
		text-decoration: none;
	}

</style>