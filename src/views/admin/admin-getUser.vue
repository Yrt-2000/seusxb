<template>
	<div class="admin-getUser">
		<p>这里是getUser界面!</p>
		<p>{{result}}</p>

	</div>
</template>

<script>
	import {Message} from 'element-ui'
	import {user} from '../../network/admin.js'
	export default{
		name:'admin-getUser',
		created(){
			this.getInfo()
			console.log(this.result)
	  },
	   methods:{
			 getInfo(){
				 user().then(res => {
					if (res.success){
					this.result = res.result

					}
					else{
						Message({
						           showClose: true,
						           message: res.reason,
						           type: 'warning',
						           duration: 1500
					})
				}
			}).catch(err => {
				Message({
					           showClose: true,
					           message: "后端链接失败",
					           type: 'error',
					           duration: 1500
				})
			})
			 }
		 },
		 data(){
			 return{
				 result:[]
			 }
		 }
	}
	
</script>

<style scoped>
	.admin-getUser{
		padding-top: 50px;
		padding: 10px;
	}
</style>
