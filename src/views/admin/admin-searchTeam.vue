<template>
	<div>
		<div>这里是搜索界面！</div>
		<input placeholder="请输入要搜索队伍的名称" v-model="content" />
		<button @click="search">搜索</button>
		<p>{{info}}</p>
	</div>
</template>

<script>
	import {searchTeam} from '../../network/admin.js'
	export default{
		name:"admin-search-Team",
		data(){
			return{
				info:[],
				content:''
			}
		},
		methods:{
			search(){
				searchTeam(this.content).then(res => {
          if (res.success) {
            this.info = res.result
          } else {
            Message({
              showClose: true,
              message: res.reason,
              type: "warning",
              duration: 1500
            })
          }
        })
        .catch(err => {
          Message({
            showClose: true,
            message: "数据获取失败",
            type: "error",
            duration: 1500
          });
        });
			}
		}
	}
</script>

<style>
	input{
		width: 80%;
	}
</style>
