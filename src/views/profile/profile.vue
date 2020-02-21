<template>
	<div id="profile">
	<navbar>
		<div slot="center">我的</div>
	</navbar>
	<section class="account">
	  <div class="account-item">
	    <div class="number">
	      <span class="balance">0</span>分
	    </div>
	    <div class="account-info">团队积分</div>
	  </div>
	  <div class="account-item">
	    <div class="number">
	      <span class="balance">0</span>分
	    </div>
	    <div class="account-info">我的积分</div>
	  </div>
	  <div class="account-item">
	    <div class="number">
	      <span class="balance">0</span>位
	    </div>
	    <div class="account-info">我的排名</div>
	  </div>
	</section>
	<div class="record">
		<div>打卡审核通过记录：</div>
		<div>{{message}}</div>

		
	</div>
	</div>
</template>

<script>
	import navbar from '../../components/navbar/navbar.vue'

	export default{
		name:"profile",
		data(){
			return{
				message:"需从后端获取"
			}
		},
		components: {
		navbar
		}
	}
</script>

<style>
	#profile {
	  background-color: #f2f2f2;
		margin-top: 44px;
	}
	
	
	.account {
	  display: flex;
	}
	
	.account-item {
	  width: 100%;
	  background-color: #fff;
	  margin-right: 1px;
	  text-align: center;
	}
	
	.account-item:last-of-type {
	  margin-right: 0;
	}
	
	.account-item {
	  color: #666;
	  font-size: 13px;
	  padding: 18px;
	}
	
	.account-item .balance {
	  font-size: 24px;
	  font-weight: 700;
	  color:#42B983
	}
	
	.account-info {
	  margin-top: 6px;
	}
	
	.order-list, .service-list {
	  margin-top: 12px;
	}
	
	.record{
	  margin-top: 1px;
		padding: 5px;
		background-color:white;
		overflow: scroll;
		font-size: 13px;
	}
</style>
