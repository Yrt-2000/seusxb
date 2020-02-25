<template>
	<div >
		<newbar>打卡记录</newbar>
		  <div class="recordPage">
				<h3>所有审核通过的打卡记录将会显示在这里：</h3>
				<div v-for="(item,index) in lista" class="h">
					<span>{{index+1}}</span> <div>任务名称:{{item.taskNum}}，完成时间:
					{{item.time.prototype.getMonth()}}-{{item.time.prototype.getDate()}}</div>
				</div>
			</div>
	</div>
</template>

<script>
	import {Message} from 'element-ui'
	import newbar from '../../components/navbar/newbar.vue'
	import {taskCompleted} from '../../network/profile.js'
	export default{
		name:'recordList',
		components:{
			newbar
		},
		created(){
			this.getList()
			this.change()
		},
		methods:{
			getList(){
				taskCompleted().then(res => {
					if (res.success){
              this.lista = res.result
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
					           message: "数据获取失败",
					           type: 'error',
					           duration: 1500
				})
			})
			},
			change(){
			
				for(let i=0 ; i<this.lista.length; i++){
					switch(this.lista[i].taskNum){
					case "1":
					   this.lista[i].taskNum = '6:30早起';
						 break;
					case "2":
					   this.lista[i].taskNum = '东南学工';
						 break;
					case "3":
						 this.lista[i].taskNum = '按时吃早餐';
						 break;
					case "4":
					   this.lista[i].taskNum = '卫生习惯';
						 break;
					case "5":
					   this.lista[i].taskNum = '帮做家务';
						 break;
					case "6":
					   this.lista[i].taskNum = '完成当日作业';
						 break;
					case "7":
					   this.lista[i].taskNum = '整理当天学习内容';
						 break;
					case "8":
					   this.lista[i].taskNum = '线上答疑';
						 break;
					case "9":
					   this.lista[i].taskNum = '做运动';
						 break;
					case "10":
					   this.lista[i].taskNum = '关注时事';
						 break;
					case "11":
					   this.lista[i].taskNum = '每日练字';
						 break;
					case "12":
					   this.lista[i].taskNum = '阅读课外书籍';
						 break;
					case "13":
					   this.lista[i].taskNum = '阅读英语美文';
						 break;
					case "14":
					   this.lista[i].taskNum = '英语听力口语训练';
						 break;
					case "15":
					   this.lista[i].taskNum = '背单词';
						 break;
					case "16":
					   this.lista[i].taskNum = '额外专业知识学习';
						 break;
					case "17":
					   this.lista[i].taskNum = '每日编程';
						 break;
					case "18":
					   this.lista[i].taskNum = '11点前睡觉';
						 break;
				}
				}
			}
		},
		data(){
			return{
				lista:[]
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
