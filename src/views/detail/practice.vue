<template>
	<detail-base taskid="11">
		<div slot="title1">每天练字</div>
		<img slot="img" src="../../assets/img/practice.jpg"/>
		<div slot="title2">练字</div>
		<div slot="text">
            <p>请在练字后拍摄字的图片</p>
            <p>分数：3分</p>
			<p>本任务另有额外积分奖励：连续两天打卡可获得1分额外加分，连续三天(及以上)坚持练字可获2分额外分。
			若有中断，则无奖励分，直到恢复连续2天以上打卡</p>
			<p>打卡方式：请在打卡时上传图片以及打卡任务序号来完成打卡</p>
			<p>由于服务器原因，可能遇到反应时间稍长的情况，请耐心等待。活动最终解释权归计软智学生会所有。</p>
		</div>
	</detail-base>
</template>

<script>
	import detailBase from "./components/detailBase.vue"
	
	
	export default{
		name:"practice",
		components:{
			detailBase
		}
	}
</script>

<style>
	
</style>
