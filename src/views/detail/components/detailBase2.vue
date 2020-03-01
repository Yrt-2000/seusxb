<template>
	<div>
		<newbar><slot name="title1"></slot></newbar>
	<div class="up">
		<slot name="img"></slot>
		<div class="text">
			<h3><slot name="title2"></slot></h3>
			<p>打卡规则</p>
			<p><slot name="text"></slot></p>
		</div>
		</div>
		<bottomBar2 :taskNum="taskid"></bottomBar2>
	</div>
</template>

<script>
	import newbar from '../../../components/navbar/newbar.vue'
	import bottomBar2 from '../../../components/bottom-bar/bottom-bar2.vue'
	export default{
		name:"detail-base",
		components:{
			newbar,
			bottomBar2
		},
		props:{
			taskid:String
		}
	}
</script>

<style>
	.up{
		position: fixed;
		top:44px;
		bottom: 49px;
	  overflow: scroll;
		background-color: #f1ffef;
	}
	
	.up img{
		width: 100%;
		height: auto;
	}
	
	.text{
		color: #c0c0c0;
		padding: 7px;
		overflow-x:hidden;
		overflow-y:scroll ;
	}
</style>