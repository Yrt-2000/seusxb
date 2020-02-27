<template>
	<div class="admin-getTeam">
		 <p>这里是getTeam界面</p>
		 <p>{{result}}</p>
	</div>
</template>

<script>
	import {Message} from 'element-ui'
	import {team} from '../../network/admin.js'
	export default{
		name:'admin-getTeam',
		created() {
			this.getteam()
		},
		data(){
			return{
				result:[]
			}
		},
		methods:{
			getteam(){
				team().then(res => {
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
		}
	}
</script>

<style scoped>
	.admin-getTeam{
		padding-top: 50px;
		padding: 10px;
	}
</style>
