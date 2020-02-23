<template>
	<detail-base :taskid="14">
		<div slot="title1">听力、口语训练</div>
		<img slot="img" src="../../assets/img/listenAndSpeakEng.jpeg"></img>
		<div slot="title2">听力、口语训练</div>
		<div slot="text">
            <p>听英语听力（至少1次）或者观看英语视频（至少1次）或练习口语（至少10分钟），并将网站或证据截图</p>
           	<p>分数：3分</p> 
            <p>打卡方式：请在打卡时上传图片以及打卡任务序号来完成打卡</p>
			<p>由于服务器原因，可能遇到反应时间稍长的情况，请耐心等待。活动最终解释权归计软智学生会所有。</p>
		</div>
	</detail-base>
</template>

<script>
	import detailBase from "./components/detailBase.vue"
	
	export default{
		name:"listenAndSpeakEng",
		components:{
			detailBase
		}
	}
</script>

<style>
	
</style>
