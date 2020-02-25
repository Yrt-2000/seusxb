<template>
	<detail-base :taskid="15">
		<div slot="title1">背单词</div>
		<img slot="img" src="../../assets/img/words.jpg"></img>
		<div slot="title2">背英语单词</div>
		<div slot="text">
            <p>背英语单词(具体个数我们不做限制啦~全靠自觉)，并通过上传图片的方式打卡(比如单词书拍摄、英语学习APP截屏等)</p>
           	<p>分数：3分</p> 
            <p>打卡方式：请在打卡时上传图片以及打卡任务序号来完成打卡</p>
			<p>由于服务器原因，可能遇到反应时间稍长的情况，请耐心等待。活动最终解释权归计软智学生会所有。</p>
		</div>
	</detail-base>
</template>

<script>
	import detailBase from "./components/detailBase.vue"
	
	export default{
		name:"words",
		components:{
			detailBase
		}
	}
</script>

<style>
	
</style>
