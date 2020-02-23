<template>
	<div class="task">
	<navbar>
		<div slot="center">任务列表</div>
	</navbar>
	<taskitem taskName="getUp">
		<div slot="large">6:30早起</div>
		<div slot="small">每天起床第一句，先给自己打个气~ 现在打卡，开启美好一天</div>
	</taskitem>
  <taskitem taskName="extraLearning">
		<div slot="large">额外专业知识学习</div>
		<div slot="small">在课程之间，学有余力的你可以学西额外的专业知识</div>
	</taskitem>
	<taskitem taskName="program">
		<div slot="large">每日编程</div>
		<div slot="small">每日一编程，稳步提高自身编程能力</div>
	</taskitem>
	<taskitem taskName="housework">
		<div slot="large">帮做家务</div>
		<div slot="small">帮助家人，分担家务</div>
	</taskitem>
	<taskitem taskName="homework">
		<div slot="large">完成当日作业</div>
		<div slot="small">今日事，今日毕，保证生活稳定有序</div>
	</taskitem>
	<taskitem taskName="answerQuestion">
		<div slot="large">线上答疑</div>
		<div slot="small">帮助同学解决问题，让你在成为大佬的路途上更进一步</div>
	</taskitem>
	<taskitem taskName="review">
		<div slot="large">整理当天学习内容</div>
		<div slot="small">善于复习能让你更好的掌握知识哟(＾Ｕ＾)ノ~ＹＯ</div>
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
	<taskitem taskName="health">
		<div slot="large">卫生习惯</div>
		<div slot="small">整洁的环境能让人更专心地学习</div>
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
