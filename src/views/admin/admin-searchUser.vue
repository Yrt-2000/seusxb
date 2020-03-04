<template>
	<div>
	<div>这里是SearchUser界面！</div>
	<input placeholder="输入任务id" v-model="limit"/>
	<button @click="go">获取</button>
	<p>{{result}}</p>
	</div>
</template>

<script>
	import {Message} from 'element-ui'
	import {searchUser} from '../../network/admin.js'
	export default{
		name:'admin-searchUser',
		data(){
			return{
				limit:'',
				result:''
			}
		},
		methods:{
			go(){
				searchUser(this.limit).then(res => {
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
