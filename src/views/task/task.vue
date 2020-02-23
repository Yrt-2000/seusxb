<template>
	<div class="task">
	<navbar>
		<div slot="center">任务列表</div>
	</navbar>
	<taskitem taskName="getUp">
		<div slot="large">6:30早起</div>
		<div slot="small">每天起床第一句，先给自己打个气~ 现在打卡，开启美好一天</div>
	</taskitem>
  <taskitem taskName="breakfast">
		<div slot="large">任务2</div>
		<div slot="small">任务描述</div>
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
