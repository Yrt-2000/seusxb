<template>
	<div>
		<div>这里是searchUser2界面！</div>
		<input placeholder="输入积分下限" v-model="limt"/>
		<button @click="go">查找</button>
		<p>{{result}}</p>
	</div>
</template>

<script>
		import {Message} from 'element-ui'
	import {user} from '../../network/admin.js'
	export default{
		name:'admin-searchUser2',
		data(){
			return{
				limt:'',
				result:''
			}
		},
		methods:{
			go(){
				user(this.limt).then(res => {
		      if (res.success) {
		        this.result = res.result
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
</style>
