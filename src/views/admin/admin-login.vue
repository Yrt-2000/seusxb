<template>
	<div class="admin-login">
		<h2>后台管理系统</h2>
	<p>请输入指令</p>
	<input v-model="fill" />
	<button @click="buttonClick">确认</button>
	<div class="show" v-show="isshow" >指令不正确</div>
	</div>
</template>

<script>
	export default{
		name:'admin-login',
		data(){
			return{
				fill:'',
				isshow:false
			}
		},
		methods:{
			buttonClick(){
				if (this.fill === 'Sxb-2020'){
				this.$store.state.isAdmin = true 
				this.isshow = false
				this.$router.push('/admin/check')
				}
				else
				this.isshow = true
			}
		}
	}
</script>

<style scoped>
	.show{
		color: red;
	}
	
	.admin-login{
		padding-top: 50px;
		padding: 10px;
		background-color: white;
	}
</style>