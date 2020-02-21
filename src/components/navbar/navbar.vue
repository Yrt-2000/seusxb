<template>
	<div class="nav-bar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'navbar'
	}
</script>

<style>
	.nav-bar{
		display: flex;
		height: 44px;
		line-height: 44px;
		background-color: #55aa7f;
		text-align: center;
		box-shadow:  0 1px 1px rgba(100,100,100,.1);
		color: white;
		width: 100%;
		position: fixed;
		top:0
	}
	.left,.right{
		width: 60px;
		
	}
	.center{
		font-size: 16px;
		flex: 1;
	}
</style>
