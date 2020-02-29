<template>
	<detail-base taskid="7">
		<div slot="title1">整理当天学习内容</div>
		<img slot="img" src="../../assets/img/review.jpg"/>
		<div slot="title2">整理当天学习内容</div>
		<div slot="text">
			<p>记录当天课堂内容，并整理复习</p>
			<p>分数：4分</p>
			<p>本任务另有额外积分奖励：连续两天打卡可获得1分额外加分，连续三天(及以上)坚持整理可获2分额外分。
			若有中断，则无奖励分，直到恢复连续2天以上打卡</p>
            <p>打卡方式：请在打卡时上传笔记图片以及打卡任务序号来完成打卡</p>
			<p>由于服务器原因，可能遇到反应时间稍长的情况，请耐心等待。活动最终解释权归计软智学生会所有。</p>
		</div>
	</detail-base>
</template>

<script>
	import detailBase from "./components/detailBase.vue"
	
	export default{
		name:"review",
		components:{
			detailBase
		}
	}
</script>

<style>
	
</style>
