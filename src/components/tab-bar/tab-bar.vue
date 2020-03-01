<template>
	<div id="tab-bar">
		<slot>默认插槽内容</slot>
	</div>
</template>

<script>
	
	export default{
		name:'tab-bar',
		
	}
</script>

<style>
	#tab-bar{
		display: flex;
		background-color: #f6f6f6;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
	}

</style>
