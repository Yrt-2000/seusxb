<template>
	<detail-base2 taskid="2">
		<div slot="title1">信息填报</div>
		<img slot="img" src="../../assets/img/seuxg.jpg">
		<div slot="title2">及时汇报疫情信息</div>
		<div slot="text">
			<p>请在每天中午12:00之前填报完疫情信息</p>
			<p>分数：2分</p>
            <p>打卡方式：点击下方打卡按钮，将进入东南学工界面，并算打卡完成</p>
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