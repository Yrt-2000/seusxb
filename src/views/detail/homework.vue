<template>
	<detail-base2 taskid="6">
		<div slot="title1">完成当日作业</div>
		<img slot="img" src="../../assets/img/homework.jpg"></img>
		<div slot="title2"></div>
		<div slot="text">
			<p>请自觉完成当日作业，若已完成则可点击打卡按钮，不用上传图片，纯靠自觉哟~（作弊遭雷劈）</p>
			<p>分数：3分</p>
			<p>打卡方式：直接点击打卡按钮</p>
			由于服务器原因，可能遇到反应时间稍长的情况，请耐心等待。活动最终解释权归计软智学生会所有。
		</div>
	</detail-base2>
</template>

<script>
	import detailBase2 from "./components/detailBase2.vue"
	
	export default{
		name:"homework",
		components:{
			detailBase2
		}
	}
</script>

<style>
	
</style>
