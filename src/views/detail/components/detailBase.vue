<template>
	<div class="up">
		<newbar><slot name="title1"></slot></newbar>
		<slot name="img"></slot>
		<div class="text">
			<h3><slot name="title2"></slot></h3>
			<p>打卡规则</p>
			<p><slot name="text"></slot></p>
		</div>
		<bottomBar></bottomBar>
	</div>
</template>

<script>
	import newbar from '../../../components/navbar/newbar.vue'
	import bottomBar from '../../../components/bottom-bar/bottom-bar.vue'
	export default{
		name:"detail-base",
		components:{
			newbar,
			bottomBar
		}
	}
</script>

<style>
	.up{
		position: relative;
		z-index: 9;
		background-color: #f1ffef;
		height:calc(100vh - 44px - 49px);
		margin-top: 44px;
	  overflow: scroll;
	}
	
	.up img{
		width: 100%;
	}
	
	.text{
		color: #c0c0c0;
		padding: 7px;
		overflow-x:hidden;
		overflow-y:scroll ;
	}
</style>
