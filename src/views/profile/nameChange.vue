<template>
	<div id="nameChange">
		<newbar>改变昵称</newbar>
		<input v-model="name" placeholder="请输入要替换的昵称" />
		<div class="b1" @click="b1click">确认修改</div>
		<div class="b2" @click="b2click">返回个人页面</div>
	</div>
</template>

<script>
	import newbar from '../../components/navbar/newbar.vue'
	import {changename} from '../../network/profile.js'
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
			 	changename(this.name)	.then(
				  
				)	 
			}
	},
	}
</script>

<style>
	#nameChange{
			position: relative;
			z-index: 9;
			background-color: white;
			margin-top: 44px;
			height: calc(100vh - 44px);
			overflow: hidden;
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
