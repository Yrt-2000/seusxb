<template>
	<div class="bottom-bar">
		 <div class="nonbutton"><div class='xx'>上传图片后请告知菌菌任务编号,本任务为{{taskid}}</div></div>
		 <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2446078648&site=qq&menu=yes">
		 <div class="button">打卡</div></a>
	</div>
</template>

<script>
	export default{
		name:"bottom-bar",
		props:{
			taskid:{
				type:String,
				default:"此处出错 无法显示"
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
		height: 49px;
		}
	.nonbutton{
		flex: 1;
		}
	.xx{
		text-align: center;
		font-size: 13px;
		margin-top: 15px
	}
	a{
		text-decoration: none;
	}
</style>
