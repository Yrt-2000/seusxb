<template>
	<navbar>
		<i class="el-icon-arrow-left" slot="left" @click="back"></i>
		<div slot="center"><slot></slot></div>
	</navbar>
</template>

<script>
	import navbar from './navbar.vue'
	export default{
		name:"newbar",
		components:{
			navbar
		},
		methods:{
			back(){
				history.back()
			}
		}
	}
</script>

<style>
</style>
