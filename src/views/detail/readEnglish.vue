<template>
	<detail-base taskid="13">
		<div slot="title1">阅读英语美文</div>
		<img slot="img" src="../../assets/img/readEnglish.jpeg"/>
		<div slot="title2">阅读英语美文</div>
		<div slot="text">
            <p>阅读至少一篇英语文章，并通过上传图片的方式证明(比如拍摄文章的图片或者手机截屏)</p>
            <p>分数：3分</p>
            <p>打卡方式：请在打卡时上传图片以及打卡任务序号来完成打卡</p>
			<p>由于服务器原因，可能遇到反应时间稍长的情况，请耐心等待。活动最终解释权归计软智学生会所有。</p>
		</div>
	</detail-base>
</template>

<script>
	import detailBase from "./components/detailBase.vue"
	
	export default{
		name:"readEnglish",
		components:{
			detailBase
		}
	}
</script>

<style>
	
</style>
