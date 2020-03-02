<template>
	<div class="admin-getTeam">
		 <p>这里是getTeam界面</p>
		 <p>这里将展示新内容，原本内容将在console.log打印</p>
		 <input v-model="teamname" placeholder="请输入团队名称" />
		 <button @click="click5">获取信息</button>
		 <div>{{info}}</div>
	</div>
</template>

<script>
	import {Message} from 'element-ui'
	import {team,team2} from '../../network/admin.js'
	
	export default{
		name:'admin-getTeam',
		created() {
			this.getteam()
		},
		data(){
			return{
				result:[],
				info:[],
				teamname:''
			}
		},
		methods:{
			click5(){
				team2(this.teamname).then(res => {
					if (res.success){
					this.info = res.result
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
			},
			getteam(){
				team().then(res => {
					if (res.success){
					this.result = res.result
          console.log(this.result)
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
