<template>
	<div id="team">
		<newbar>加入团队</newbar>
		<input v-model="team" placeholder="请输入要加入或创建团队的名称" />
		<div class="b1" @click="b1click">加入/创建团队</div>
		<div class="b2" @click="b2click">返回个人页面</div>
		<p>说明：xxx</p>    <!-- 大概意思：若该团队名已存在，则直接加入该团队；若不存在，则创建团队。团队有人数限制 -->
	</div>
</template>

<script>
	import newbar from '../../components/navbar/newbar.vue'
	export default{
		name:"team",
	  components:{
				newbar
			},
			data(){
				return{
					team:""
				}
			},
			methods:{
				b2click(){
					this.$router.back()
				},
				b1click(){
				 			 
				}
		},
		}
	</script>
	
	<style>
		#team{
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
		
		p{
			background-color:#F1FFEF;
			padding: 5px;
			margin: 5px;
			height: 55vh;
		}
	</style>
	