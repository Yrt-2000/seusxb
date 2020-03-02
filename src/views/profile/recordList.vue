<template>
	<div>
		<newbar>打卡记录</newbar>
		  <div class="recordPage">
			  	<div class="tes">
					<h3>审核通过的提交记录</h3>
				</div>
				<el-timeline >
					<el-timeline-item v-for="(item,index) in lista" :timestamp='item.time' placement="top" color='#42B983' :key='index'>
					      <el-card>
					        <h4>{{item.taskNum}}</h4>
					        <p>获得了{{item.v}}积分</p>
					      </el-card>
					</el-timeline-item>
				
				</el-timeline>
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
		activated(){
			this.getList()
		},
		methods:{
			getList(){
				taskCompleted().then(res => {
					if (res.success){
              			this.lista = res.result
						for(let i=0 ; i<this.lista.length; i++){
							let str=this.lista[i].time
							this.lista[i].time=str.substr(0,10)+" "
							this.lista[i].time+=str.substr(11,11)
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
					else{
						Message({
						           showClose: true,
						           message: res.reason,
						           type: 'warning',
						           duration: 1500
					})
					if (res.reason === '登陆过期，请重新登陆'){
						localStorage.removeItem('Authorization');
						 this.$router.push('/login');
					}
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
		position: fixed;
		top:44px;
		bottom: 49px;
	  overflow: scroll;
		width: 100%;
		}
		
 .el-card{
	 width: 90%;
   margin: 0;
	 padding: 0;
 }
 
 .el-card h4{
	 margin: 0;
	 padding: 0;
 }
 
 .el-card p{
	 margin:  0;
	 padding: 0;
	 font-size: 13.5px;
	 color: #C0C0C0;
 }
 .tes{
	text-align:center;
	margin:0 auto;	 
 }
</style>
