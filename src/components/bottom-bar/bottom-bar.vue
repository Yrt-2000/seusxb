<template>
	<div class="bottom-bar">
		 <div class="nonbutton"></div>
		 <div class="button" @click="press">打卡</div>
	</div>
</template>

<script>
	export default{
		name:"bottom-bar",
		methods:{
			press(){
				
			}
		}
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
		}
	.nonbutton{
		flex: 1;
	}
</style>
