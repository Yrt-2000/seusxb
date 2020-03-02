<template>
  <div id="app">
		<keep-alive><router-view></router-view></keep-alive>
		

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
