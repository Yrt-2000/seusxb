<template>
	<div>
	<navbar>
		<div slot="center">任务列表</div>
	</navbar>
	<div class="task">
	<el-divider></el-divider>
	<taskitem taskName="getUp">
		<div slot="imga"><img src="../../assets/img/树/1.jpg"/></div>
		<div slot="large">6:30早起</div>
		<div slot="small">每天起床第一句，先给自己打个气~ 现在打卡，开启美好一天</div>
	</taskitem>
	<el-divider></el-divider>
	<taskitem taskName="seuxg">
		<div slot="imga"><img src="../../assets/img/树/2.jpg"/></div>
		<div slot="large">东南学工</div>
		<div slot="small">别总让导员、班长催你啦，及时填报信息也可获得积分哦</div>
	</taskitem>
	<el-divider></el-divider>
	<taskitem taskName="breakfast">
		<div slot="imga"><img src="../../assets/img/树/3.jpg"/></div>
		<div slot="large">按时吃早餐</div>
		<div slot="small">不要因为课业忙碌就忘记早餐哦~好好享受早餐！</div>
	</taskitem>
	<el-divider></el-divider>
	<taskitem taskName="health">
		<div slot="imga"><img src="../../assets/img/树/4.jpg"/></div>
		<div slot="large">卫生习惯</div>
		<div slot="small">整洁的环境能让人更专心地学习</div>
	</taskitem>
	<el-divider></el-divider>
	<taskitem taskName="housework">
		<div slot="imga"><img src="../../assets/img/树/5.jpg"/></div>
		<div slot="large">帮做家务</div>
		<div slot="small">帮助家人，分担家务</div>
	</taskitem>
	<el-divider></el-divider>
	<taskitem taskName="homework">
		<div slot="imga"><img src="../../assets/img/树/6.jpg"/></div>
		<div slot="large">完成当日作业</div>
		<div slot="small">今日事，今日毕，保证生活稳定有序</div>
	</taskitem>
	<el-divider></el-divider>
	<taskitem taskName="review">
		<div slot="imga"><img src="../../assets/img/树/7.jpg"/></div>
		<div slot="large">整理当天学习内容</div>
		<div slot="small">善于复习能让你更好的掌握知识哟(＾Ｕ＾)ノ~ＹＯ</div>
	</taskitem>
	<el-divider></el-divider>
	<taskitem taskName="answerQuestion">
		<div slot="imga"><img src="../../assets/img/树/8.jpg"/></div>
		<div slot="large">线上答疑</div>
		<div slot="small">帮助同学解决问题，让你在成为大佬的路途上更进一步</div>
	</taskitem>
	<el-divider></el-divider>
	<taskitem taskName="sport">
		<div slot="imga"><img src="../../assets/img/树/9.jpg"/></div>
		<div slot="large">做运动</div>
		<div slot="small">待在家里这么久，是不是要长毛了？赶紧动起来吧！</div>
	</taskitem>
	<el-divider></el-divider>
	<taskitem taskName="news">
		<div slot="imga"><img src="../../assets/img/树/10.jpg"/></div>
		<div slot="large">关注时事</div>
		<div slot="small">今天，你又博学了吗？快看看世界在发生什么吧！</div>
	</taskitem>
	<el-divider></el-divider>
	<taskitem taskName="practice">
		<div slot="imga"><img src="../../assets/img/树/11.jpg"/></div>
		<div slot="large">每天练字</div>
		<div slot="small">练字能陶冶情操，磨练人的意志，让你更加优秀</div>
	</taskitem> 
	<el-divider></el-divider>
	<taskitem taskName="reading">
		<div slot="imga"><img src="../../assets/img/树/12.jpg"/></div>
		<div slot="large">阅读课外书籍</div>
		<div slot="small">读更多的书，了解更多的知识</div>
	</taskitem>
	<el-divider></el-divider>
	<taskitem taskName="readEnglish">
		<div slot="imga"><img src="../../assets/img/树/13.jpg"/></div>
		<div slot="large">阅读英语美文</div>
		<div slot="small">英语学习少不了英语阅读</div>
	</taskitem>
	<el-divider></el-divider>
	<taskitem taskName="listenAndSpeakEng">
		<div slot="imga"><img src="../../assets/img/树/14.jpg"/></div>
		<div slot="large">英语听力、口语训练</div>
		<div slot="small">每天练习听力与口语，英语水平将更上一层楼</div>
	</taskitem>
	<el-divider></el-divider>
	<taskitem taskName="words">
		<div slot="imga"><img src="../../assets/img/树/15.jpg"/></div>
		<div slot="large">背单词</div>
		<div slot="small">拥有庞大的单词量是英语的基础</div>
	</taskitem>
	<el-divider></el-divider>
  	<taskitem taskName="extraLearning">
		<div slot="imga"><img src="../../assets/img/树/16.jpg"/></div>
		<div slot="large">额外专业知识学习</div>
		<div slot="small">在课程之间，学有余力的你可以学习额外的专业知识</div>
	</taskitem>
	<el-divider></el-divider>
	<taskitem taskName="program">
		<div slot="imga"><img src="../../assets/img/树/17.jpg"/></div>
		<div slot="large">每日编程</div>
		<div slot="small">每日一编程，稳步提高自身编程能力</div>
	</taskitem>
	<el-divider></el-divider>
	<taskitem taskName="sleep">
		<div slot="imga"><img src="../../assets/img/树/18.jpg"/></div>
		<div slot="large">11:00前睡觉</div>
		<div slot="small">还在做与夜色相伴的“年轻人”吗？快快去休息</div>
	</taskitem>
	<el-divider></el-divider>
	</div>
	<maintabbar></maintabbar>
	</div>
</template>

<script>
	import navbar from '../../components/navbar/navbar.vue'
	import taskitem from './components/taskitem.vue'
	import maintabbar from '../../components/tab-bar/maintabbar.vue'
	export default{
		name:"task",
		components:{
			navbar,
			taskitem,
			maintabbar
		}
	}				
</script>

<style scoped>
	.task{
		position: fixed;
		top:44px;
		bottom: 49px;
	  overflow: scroll;
	}
	
	 .el-divider--horizontal{
     margin:  0;
    background: 0 0;
     border-top: 1px solid #e8eaec;
		 z-index: -1;
 } 
 
 img{
	 height: auto;
	 width: 45px;
 }
</style>
