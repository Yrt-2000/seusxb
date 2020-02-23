<template>
  <div class="home">
     <navbar>
			 <div slot='center'>首页</div>
		 </navbar>
		 <div class="notice1">
			 <div class="notice2">通知</div>
			 <p>各位同学大家好，欢迎参与“播种季”计软智学生会线上打卡活动！
			 本活动由学生会生活权益与学习实践部筹办，旨在为大家提供养成良好学习生活习惯的动力。
			 ……（页面及功能介绍）</p>
			 <p>活动规则：</p>
			 <p class="important">注意事项（非常重要）：</p>
		 </div>
		 <div class="notice1">
			 <div class="notice2">个人前十</div>
			 <p v-for="(item,index) in array">
				 <span class="a">{{index+1}}</span>   <span class="b">昵称：{{item.name}}</span>    <span class="c">积分：{{item.rating}}</span>
			 </p>
		 </div>
		 <div class="notice1">
			 <div class="notice2">团队前五</div>
			 <p v-for="(item,index) in teamarray">
			 	 <span class="a">{{index+1}}</span>   <span class="b">团队名：{{item.teamname}}</span> <span class="c">积分：{{item.score}}</span>
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
			array:[{name:'叶若天',rating:400},{name:'ABC',rating:200}],
			teamarray:[{teamname:'机器人队',score:340},{teamname:'生学部队',score:339}]
		}
	},
	// created() {
	// 	this.getRanknow()
	// },
	// methods:{
	// 	getRanknow(){
	// 	getRank().then(res => {
	// 		this.array = res.person;
	// 		this.teamarray = res.team;
	// 	})
	// }
	// }
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