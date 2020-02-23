<template>
	<div>
		<navbar><div slot="center">“播种季”计软智学生会线上打卡</div></navbar>
		<div class="signin">
			<img src="../../assets/img/login.jpg" />
			<div class="box">
				<h2>欢迎登录</h2>
				<input v-model="cardnum" placeholder="一卡通号" />
				<input v-model="qq" placeholder="QQ账号" />
				<div class="click" @click="signup" >登录（首次登录将自动创建账户）</div>
			</div>
		</div>
	</div>
</template>

<script>
	import navbar from '../../components/navbar/navbar.vue'
	export default{
		name:"login",
		components:{
			navbar
		},
		data(){
			return{
				qq:"",
				cardnum:""
			}
		}
	}
</script>

<style>
	.signin{
		position: relative;
		z-index: 9;
		background-color: #FFFFFF;
		height: calc(100vh - 44px);
		overflow: scroll;
		margin-top: 44px;
		
	}
	
	img{
		width: 100%;
		height: calc(100vh - 44px);
		overflow: hidden;
		position: relative;
		z-index: 2;
	}
	
	.box{
		background-color: white;
		border-color: #333333;
		opacity: 0.7;
		z-index: 5;
		position: absolute;
		top: 60px;
		left: 15px;
		right: 15px;
		border-radius: 7px;
		}
	
	h2{
		color: #42B983;
		text-align: center;
	}
	
	input{
		height: 25px;
		margin: 10px;
		width: 93%;
	}
	
	.click{
		margin: 18px;
		border-radius:5px;
		background-color: #55AA7F;
		color: white;
		text-align: center;
		padding: 10px;
	}
</style>
