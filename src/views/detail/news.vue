<template>
	<detail-base :taskid="10">
		<div slot="title1">阅读新闻</div>
		<img slot="img" src="../../assets/img/news.jpg">
		<div slot="title2">每天看一篇新闻</div>
		<div slot="text">
			<p>关注时事，并将所阅读的新闻截图</p>
			<p>分数：2分</p>
            <p>打卡方式：请在打卡时上传图片以及打卡任务序号来完成打卡</p>
			<p>由于服务器原因，可能遇到反应时间稍长的情况，请耐心等待。活动最终解释权归计软智学生会所有。</p>
		</div>
	</detail-base>
</template>

<script>
	import detailBase from "./components/detailBase.vue"
	
	export default{
		name:"news",
		components:{
			detailBase
		}
	}
</script>

<style>
	
</style>