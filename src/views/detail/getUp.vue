<template>
	<detail-base2 :taskid="1">
		<div slot="title1">早起打卡</div>
		<img slot="img" src="../../assets/img/getUp.jpg"></img>
		<div slot="title2">6:30早起打卡</div>
		<div slot="text">
			点击屏幕右下角的打卡按钮，且打卡时间在当日5:00-7:00时间段内，即为打卡成功。个人任务：若在5:00-6:30打卡成功，将获得5积分奖励；
			 若在6:30-7:00打卡成功，可获得4积分。团队任务：团队4名成员在当日全部完成早起打卡任务（5:00-7:00），所在团队即可获得4分团队分。
			 由于服务器原因，可能遇到反应时间稍长的情况，请耐心等待。活动最终解释权归计软智学生会所有。
		</div>
	</detail-base2>
</template>

<script>
	import detailBase2 from "./components/detailBase2.vue"
	
	export default{
		name:"getUp",
		components:{
			detailBase2
		}
	}
</script>

<style>
	
</style>
