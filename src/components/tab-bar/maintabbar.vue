<template>
  <div id="maintabbar">  
    		<tab-bar>    
			<tab-bar-item path ='/home'>   
				<i slot="picture" class="el-icon-star-off"> </i>   
				<i slot="active" class="el-icon-star-on"> </i>
				<div slot="text">首页</div>
			</tab-bar-item>
			<tab-bar-item path ='/task'>
				<i slot="picture" class="el-icon-circle-plus-outline"> </i>
				<i slot="active" class="el-icon-circle-plus"> </i>
				<div slot="text">任务</div>
			</tab-bar-item>
						<tab-bar-item path ='/profile'>
				<i slot="picture" class="el-icon-user"> </i>
				<i slot="active" class="el-icon-user-solid"> </i>
				<div slot="text">我的</div>
			</tab-bar-item>
		</tab-bar>
  </div>
</template>

<script>
	 import tabBar from './tab-bar.vue'    
	 import tabBarItem from './tab-bar-item.vue'
	export default{
		name:'maintabbar',
		components:{
			tabBar,
			tabBarItem
		}
	}
</script>

<style>
#maintabbar i{
font-size: 20px;
margin-top: 3px;
}
</style>
