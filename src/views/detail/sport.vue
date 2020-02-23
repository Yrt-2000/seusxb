<template>
	<detail-base :taskid="9">
		<div slot="title1">锻炼身体</div>
		<img slot="img" src="../../assets/img/sport.jpg">
		<div slot="title2">每天做运动</div>
		<div slot="text">
			<p>请每天完成30分钟运动锻炼（推荐使用运动app，按指示运动），并通过运动软件截图计时，也可附上运动时的照片。</p>
			<p>分数：4分</p>
            <p>打卡方式：请在打卡时上传图片以及打卡任务序号来完成打卡</p>
			<p>由于服务器原因，可能遇到反应时间稍长的情况，请耐心等待。活动最终解释权归计软智学生会所有。</p>
		</div>
	</detail-base>
</template>

<script>
	import detailBase from "./components/detailBase.vue"
	
	export default{
		name:"sport",
		components:{
			detailBase
		}
	}
</script>

<style>
	
</style>