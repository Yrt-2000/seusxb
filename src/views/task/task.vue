<template>
	<div class="task">
	<navbar>
		<div slot="center">任务列表</div>
	</navbar>
	<taskitem taskName="getUp">
		<div slot="large">6:30早起</div>
		<div slot="small">每天起床第一句，先给自己打个气~ 现在打卡，开启美好一天</div>
	</taskitem>
  <taskitem taskName="">
		<div slot="large">任务2</div>
		<div slot="small">任务描述</div>
	</taskitem>
	<taskitem taskName="">
		<div slot="large">任务3</div>
		<div slot="small">任务描述</div>
	</taskitem>
	<taskitem taskName="">
		<div slot="large">任务4</div>
		<div slot="small">任务描述</div>
	</taskitem>
	<taskitem taskName="">
		<div slot="large">任务5</div>
		<div slot="small">任务描述</div>
	</taskitem>
	<taskitem taskName="">
		<div slot="large">任务6</div>
		<div slot="small">任务描述</div>
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
