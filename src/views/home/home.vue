<template>
  <div class="home">
     <navbar>
			 <div slot='center'>首页</div>
		 </navbar>
		 <div class="notice1">
			 <div class="notice2">通知</div>
			 <p>各位同学大家好，欢迎参与“播种季”计软智学生会线上打卡活动！
			 本活动由学生会生活权益与学习实践部筹办，旨在为大家提供养成良好学习生活习惯的动力。
			 本打卡平台由首页、任务列表和我的三个主要页面组成，其中首页用来展示通知和排行榜，任务列表展示所有任务（请点击任务来查看任务细则并且线上打卡），
			 而在我的页面中可以浏览个人及团队信息，同时可以在此页面加入或创建团队（仅一次）、修改昵称。</p>
			 <p>活动规则：本活动开始后，各位需在平台上进行打卡。部分任务需要将您拍摄的照片或截图作为打卡证明，此类任务需要您在点击打卡键后
			 进入qq向活动专用qq号发送图片；另有部分任务仅需按下打卡键即算打卡完成。
			 任务积分将在审核后到账（详见下文"积分细则"）。活动结束后，我们将在学校为积分最先达到150分的30位同学以及活动结束时个人前6名、团队前4名发放奖品。
			 同时，我们将在菌菌动态和活动用qq群中公布获奖信息，我们也会通过qq号联系您。请大家及时关注。</p>
			 <p class="important">注意事项(非常重要):1，请大家务必先添加计软智学生会菌菌为好友，否则打卡页面跳转至QQ后将无法发送消息；
			 2，如果服务器崩溃或平台出现一些错误和问题，会人工操作导出数据库中的记录保证每位同学数据正常，并且后续会转为QQ群打卡；
			 3，若有同学积分反常或是任务没有实际完成，或恶意利用打卡平台漏洞，存在作弊行为，则视为积分无效，最终解释权归计软智学生会所有；
			 4，活动预计开展3周。若在3周以内返校，则选取线上上课最后一天积分最高的团队和个人领取奖励；奖品回校后另行发放；
			 5，每条任务每天至多打卡一次，若一日内打卡多次按照一次计算；
			 6，部分打卡任务需要上传图片。我们将严格保护您的个人信息和上传的图片，未经您的允许不会用于其它用途。</p>
			 <p>积分细则：个人积分：根据完成打卡任务的难易性以及对自律能力和恒心的要求，不同的任务设置有不同的分值。您需要点击打卡键打卡(
			 部分任务将会跳转至QQ页面，需要您向计软智学生会菌菌发送图片（即打卡完成证明）和任务编号)，我们审核后即会给予您相应分值；团队积分：
			 您可以在“我的”界面加入或创建团队，每团队上限5人。若该团队所有成员当日获得积分总和处于平台上所有团队的前5名，
			 则该团队可获得10分团队积分，用于团队积分排名；若该团队所有成员当日获得积分总和处于平台上所有团队的第6-10名，
			 则该团队可获得6分团队积分；当日团队成员积分总和处于平台上所有团队的11-15名，获得3分团队分；16-20名获得1团队分。</p>
		 </div>
		 <div class="notice1">
			 <div class="notice2">个人前十</div>
			 <p v-for="(item,index) in array">
				 <span class="a">{{index+1}}</span>   <span class="b">昵称：{{item.name}}</span>    <span class="c">积分：{{item.point}}</span>
			 </p>
		 </div>
		 <div class="notice1">
			 <div class="notice2">团队前五</div>
			 <p v-for="(item,index) in teamarray">
			 	 <span class="a">{{index+1}}</span>   <span class="b">团队名：{{item.teamname}}</span> <span class="c">积分：{{item.teampoint}}</span>
			 </p>
		 </div>
  </div>
</template>

<script>
import {getRank} from '../../network/home.js'
import navbar from '../../components/navbar/navbar.vue'
export default {
  name: 'home',
  components: {
    navbar
  },
	data(){
		return{
			array:[],
			teamarray:[]
		}
	},
	created() {
		this.getRanknow()
	},
	methods:{
		getRanknow(){
		getRank().then(res => {
					if (res.success){
					this.array = res.result.users;
					this.team = res.result.teams;
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
					           message: "排行榜数据获取失败",
					           type: 'error',
					           duration: 1500
				})
			})
	}
	}
}
</script>

<style scoped>
	.home{
		margin-top: 44px;
		overflow: scroll;
		height: calc(100vh - 44px - 49px);
	}
	
	.notice1  {
		background-color: aliceblue;
    margin: 10px;
		border-radius: 7px;
		font-size: 13.8px;
	}
	
	.notice2{
		width: 100%;
		text-align: center;
		font-size: 20px;
		border-bottom: 1px solid #55AA7F;
		padding: 3px 0;
		overflow-x: hidden;
	}
	
	.important{
		color: red;
		}
		
	.a{
		padding-left: 10px;
	}
	
	.b{
		padding-left: 20px;
	}
	
	.c{
		padding-left: 20px;
	}

</style>