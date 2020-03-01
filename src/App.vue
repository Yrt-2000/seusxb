<template>
  <div id="app">
		<router-view></router-view>
		<maintabbar></maintabbar>

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
		components:{
			maintabbar
		}
	}

</script>

<style>
   @import url("./assets/css/base.css");
</style>
