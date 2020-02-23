<template>
	<div class="bottom-bar">
		 <div class="nonbutton"></div>
		 <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1363642441&site=qq&menu=yes">
		 <div class="button">打卡</div></a>
	</div>
</template>

<script>
	export default{
		name:"bottom-bar"
	}
</script>

<style>
	.bottom-bar{
		height: 49px;
		bottom: 0;
		left: 0;
		right: 0;
		position: fixed;
		background-color: white;
		display: flex;
		text-align: center;
	}
	.button{
		width: 6.25rem;
	  padding-top: 15px;
		background-color: #55AA7F;
		color: white;
		font-weight: 550;
		height: 49px;
		}
	.nonbutton{
		flex: 1;
	}
	a{
		text-decoration: none;
	}
</style>
