<template>
	<detail-base2 :taskid="2">
		<div slot="title1">信息填报</div>
		<img slot="img" src="../../assets/img/seuxg.jpg">
		<div slot="title2">及时汇报疫情信息</div>
		<div slot="text">
			<p>请在每天中午12:00之前填报完疫情信息，并截图</p>
			<p>分数：2分</p>
            <p>打卡方式：请在打卡时上传图片以及打卡任务序号来完成打卡</p>
			<p>由于服务器原因，可能遇到反应时间稍长的情况，请耐心等待。活动最终解释权归计软智学生会所有。</p>
		</div>
	</detail-base2>
</template>

<script>
	import detailBase2 from "./components/detailBase2.vue"
	
	export default{
		name:"seuxg",
		components:{
			detailBase2
		}
	}
</script>

<style>
	
</style>