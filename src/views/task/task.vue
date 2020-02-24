<template>
	<div class="task">
	<navbar>
		<div slot="center">任务列表</div>
	</navbar>
	<taskitem taskName="getUp">
		<div slot="large">6:30早起</div>
		<div slot="small">每天起床第一句，先给自己打个气~ 现在打卡，开启美好一天</div>
	</taskitem>
	<taskitem taskName="seuxg">
		<div slot="large">东南学工</div>
		<div slot="small">别总让导员、班长催你啦，及时填报信息也可获得积分哦~</div>
	</taskitem>
	<taskitem taskName="breakfast">
		<div slot="large">按时吃早餐</div>
		<div slot="small">不要因为课业忙碌就忘记早餐哦~好好享受早餐！一天元气满满！</div>
	</taskitem>
	<taskitem taskName="health">
		<div slot="large">卫生习惯</div>
		<div slot="small">整洁的环境能让人更专心地学习</div>
	</taskitem>
	<taskitem taskName="housework">
		<div slot="large">帮做家务</div>
		<div slot="small">帮助家人，分担家务</div>
	</taskitem>
	<taskitem taskName="homework">
		<div slot="large">完成当日作业</div>
		<div slot="small">今日事，今日毕，保证生活稳定有序</div>
	</taskitem>
	<taskitem taskName="review">
		<div slot="large">整理当天学习内容</div>
		<div slot="small">善于复习能让你更好的掌握知识哟(＾Ｕ＾)ノ~ＹＯ</div>
	</taskitem>
	<taskitem taskName="answerQuestion">
		<div slot="large">线上答疑</div>
		<div slot="small">帮助同学解决问题，让你在成为大佬的路途上更进一步</div>
	</taskitem>
	<taskitem taskName="sport">
		<div slot="large">做运动</div>
		<div slot="small">待在家里这么久，是不是要长毛了？赶紧动起来吧！</div>
	</taskitem>
	<taskitem taskName="news">
		<div slot="large">关注时事</div>
		<div slot="small">今天，你又博学了吗？快看看世界在发生什么吧！</div>
	</taskitem>
	<taskitem taskName="practice">
		<div slot="large">每天练字</div>
		<div slot="small">练字能陶冶情操,磨练人的意志，让你更加优秀</div>
	</taskitem> 
	<taskitem taskName="reading">
		<div slot="large">阅读课外书籍</div>
		<div slot="small">都更多的书，了解更多的知识</div>
	</taskitem>
	<taskitem taskName="readEnglish">
		<div slot="large">阅读英语美文</div>
		<div slot="small">英语学习少不了英语阅读</div>
	</taskitem>
	<taskitem taskName="listenAndSpeakEng">
		<div slot="large">英语听力、口语训练</div>
		<div slot="small">每天练习听力与口语，英语水平将更上一层楼</div>
	</taskitem>
	<taskitem taskName="words">
		<div slot="large">背单词</div>
		<div slot="small">拥有庞大的单词量是英语的基础</div>
	</taskitem>
  	<taskitem taskName="extraLearning">
		<div slot="large">额外专业知识学习</div>
		<div slot="small">在课程之间，学有余力的你可以学西额外的专业知识</div>
	</taskitem>
	<taskitem taskName="program">
		<div slot="large">每日编程</div>
		<div slot="small">每日一编程，稳步提高自身编程能力</div>
	</taskitem>
	<taskitem taskName="sleep">
		<div slot="large">11:00前睡觉</div>
		<div slot="small">还在做与夜色相伴的“年轻人”吗？快快去休息</div>
	</taskitem>
	</div>
</template>

<script>
	import navbar from '../../components/navbar/navbar.vue'
	import taskitem from './components/taskitem.vue'
	export default{
		name:"task",
		components:{
			navbar,
			taskitem
		}
	}				
</script>

<style>
	.task{
		margin-top: 47px;
		height: calc(100vh - 47px - 49px);
		overflow: scroll;
	}
</style>
