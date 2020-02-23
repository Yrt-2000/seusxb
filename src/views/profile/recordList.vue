<template>
	<div >
		<newbar>打卡记录</newbar>
		  <div class="recordPage">
				<h3>所有审核通过的打卡记录将会显示在这里：</h3>
				<div v-for="(item,index) in lista" class="h">
					<span>{{index+1}}</span> <div>任务编号:{{item.task}},完成时间:{{item.time}}</div>
				</div>
			</div>
	</div>
</template>

<script>
	import newbar from '../../components/navbar/newbar.vue'
	import {taskCompleted} from '../../network/profile.js'
	export default{
		name:'recordList',
		components:{
			newbar
		},
		// created(){
		// 	this.getList()
		// },
		// methods:{
		// 	getList(){
		// 		taskCompleted().then(res => {
		// 			this.lista = res    //此处需根据后端接口修改
		// 		})
		// 	}
		// },
		data(){
			return{
				lista:[{task:'a',time:'00:00'},{task:'b',time:'00:00'},{task:'c',time:'00:00'},{task:'d',time:'00:00'}]
			}   //具体值需从后端返回
		}
	}
</script>

<style>
	.recordPage{
			position: relative;
			z-index: 9;
			background-color: white;
			margin-top: 44px;
			height: calc(100vh - 44px);
			overflow: scroll;
		}
		
	.h{
		background-color: aliceblue;
		margin: 7px 3.5px;
		padding: 10px 5px;
		border-radius:5px
		}
</style>
