<template>
	<div>
	<newbar>改变昵称</newbar>
	<div id="nameChange">
		<input v-model="name" placeholder="请输入要替换的昵称" />
		<div class="b1" @click="b1click">确认修改</div>
		<div class="b2" @click="b2click">返回个人页面</div>
	</div>
	</div>
</template>

<script>
	import newbar from '../../components/navbar/newbar.vue'
	import {changename} from '../../network/profile.js'
	import {Message} from 'element-ui'
	export default{
		name:"nameChange",
		components:{
			newbar
		},
		data(){
			return{
				name:""
			}
		},
		methods:{
			b2click(){
				this.$router.back()
			},
			b1click(){
			 	changename(this.name).then( res => {
					if(res.success){
				  Message({
				             showClose: true,
				             message: '操作成功',
				             type: 'success',
				             duration: 1500
				     })
					this.$router.replace('/profile')
					this.$store.state.isrefresh = true
					}
				else{
					Message({
					           showClose: true,
					           message: res.reason,
					           type: 'warning',
					           duration: 1500
					   })
				if (res.reason === '登陆过期，请重新登陆'){
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
	}
	}
	}
</script>

<style>
	#nameChange{
		position: fixed;
		top:44px;
	  overflow: scroll;
		width: 100%;
		}
		
	input{
	  height: 30px;
		width: 80%;
		margin-left: 10%;
		margin-right: 10%;
		margin-top: 30px;
	}
	
	.b1{
		margin: 18px;
		border-radius:5px;
		background-color: #55AA7F;
		color: white;
		text-align: center;
		padding: 10px;
	}
	
	.b2{
		margin: 18px;
		border-radius:5px;
		background-color: #97aa9f;
		color: white;
		text-align: center;
		padding: 10px;
	}
</style>
