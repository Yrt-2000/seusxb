<template>
	<div class="list" @click="click(taskName)">
		<div class="largesize"><slot name="large"></slot></div>
		<div class="smallsize"><slot name="small"></slot></div>
	</div>
</template>

<script>
	export default{
		name:"taskitem",
		methods:{
			click(taskName){
				this.$router.push(`/detail/${taskName}`)
			}
		},
		props:{
			taskName:{
				type:String,
				default:""
			}
		}
	}
</script>

<style>
	.list{
		background-color: aliceblue;
		margin: 5px 3.5px;
		padding: 5px 3px;
		border-radius:5px
	}
	.largesize{
		font-size: 1em;
		color: #42B983;
	}
	.smallsize{
		font-size: 0.7em;
		margin-top: 3px;
	}
</style>
