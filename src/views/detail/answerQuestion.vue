<template>
	<detail-base taskid="8">
		<div slot="title1">线上答疑</div>
		<img slot="img" src="../../assets/img/answerQuestion.jpeg"/>
		<div slot="title2">线上答疑</div>
		<div slot="text">
            <p>在线上回答同学提出学习类的问题并通过上传图片的方式证明(建议：可截图)</p>
			<p>分数：3分</p>            
			<p>打卡方式：请在打卡时上传回答的图片以及打卡任务序号来完成打卡</p>
			<p>由于服务器原因，可能遇到反应时间稍长的情况，请耐心等待。活动最终解释权归计软智学生会所有。</p>
		</div>

	</detail-base>
</template>

<script>
	import detailBase from "./components/detailBase.vue"
	
	export default{
		name:"answerQuestion",
		components:{
			detailBase
		},
	}
</script>

<style>
	
</style>
