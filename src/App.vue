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
	    window.οnlοad=function(){  
	        setTimeout(function() {  
	            window.scrollTo(0, 1)  
	        }, 0);  
	    };
			document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
</script>

<style>
   @import url("./assets/css/base.css");
</style>
