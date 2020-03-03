<template>
  <div id="app">
		<!-- <keep-alive>
		    <router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view> -->
		<router-view></router-view>
  </div>
</template>
<script>
	import maintabbar from './components/tab-bar/maintabbar.vue'
	export default{
		name:'App',
		data(){
			return{
				
			}
		},

	}

</script>

<style>
   @import url("./assets/css/base.css");
</style>
