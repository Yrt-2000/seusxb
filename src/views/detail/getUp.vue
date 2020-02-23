<template>
	<detail-base2 :taskid="1">
		<div slot="title1">早起打卡</div>
		<img slot="img" src="../../assets/img/getUp.jpg"></img>
		<div slot="title2">6:30早起打卡</div>
		<div slot="text">
			<p>具体时间范围：5:00-7:00</p>
			<dl>
				<dt>个人：</dt>
				<dd>5:00-6:30：5分</dd>
				<dd>6:30-7:00：4分</dd>
			</dl>
			<p>团队：4分</p>
			<p>打卡方式：直接点击打卡按钮</p>
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
