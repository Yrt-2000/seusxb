<template>
	<detail-base :taskid="2">
		<div slot="title1">帮做家务</div>
		<img slot="img" src="../../assets/img/housework.jpg"></img>
		<div slot="title2">帮做家务</div>
		<div slot="text">
			<p>做部分家务（整理书桌除外），并且拍摄自己做家务的图片或者做完后的成果</p>
            <p>分数：3分</p>
            <p>打卡方式：请在打卡时上传图片以及打卡任务序号来完成打卡</p>
			<p>由于服务器原因，可能遇到反应时间稍长的情况，请耐心等待。活动最终解释权归计软智学生会所有。</p>
		</div>
	</detail-base>
</template>

<script>
	import detailBase from "./components/detailBase.vue"
	
	export default{
		name:"housework",
		components:{
			detailBase
		}
	}
</script>

<style>
	
</style>
