<template>
	<detail-base taskid="3">
		<div slot="title1">按时吃早餐</div>
		<img slot="img" src="../../assets/img/breakfast.jpg"/>
		<div slot="title2">按时吃早餐</div>
		<div slot="text">
			<p>请在8:00前(周末8:30)吃完早餐，并通过上传图片的方式证明（建议：可拍摄早餐图片）</p>
			<p>分数：3分</p>
            <p>打卡方式：请在打卡时上传图片以及打卡任务序号来完成打卡</p>
			<p>由于服务器原因，可能遇到反应时间稍长的情况，请耐心等待。活动最终解释权归计软智学生会所有。</p>
		</div>
	</detail-base>
</template>

<script>
	import detailBase from "./components/detailBase.vue"
	
	export default{
		name:"breakfast",
		components:{
			detailBase
		}
	}
</script>

<style>
	
</style>
