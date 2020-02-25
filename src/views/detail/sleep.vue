<template>
	<detail-base2  taskid="18">
		<div slot="title1">11:00前休息</div>
		<img slot="img" src="../../assets/img/sleep.jpg">
		<div slot="title2">早点睡觉</div>
		<div slot="text">
			<p>请在当日晚9:00到11:00之间打卡（其他时间无效）</p>
			<p>分数：3分</p>
            <p>打卡方式：直接点击下方打卡按钮(希望你能点完打卡键后就睡觉，全靠自觉哟~)</p>
			<p>由于服务器原因，可能遇到反应时间稍长的情况，请耐心等待。活动最终解释权归计软智学生会所有。</p>
		</div>
	</detail-base2>
</template>

<script>
	import detailBase2 from "./components/detailBase2.vue"
	
	export default{
		name:"sleep",
		components:{
			detailBase2
		}
	}
</script>

<style>
	
</style>