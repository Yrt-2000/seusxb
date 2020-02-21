<template>
	<div class="item" @click="press">
			<div v-if="!isactive"><slot name="picture"></slot></div>
		<div v-else class="blue"><slot name="active"></slot></div>
		<div :class="{blue:isactive}"><slot name="text"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'tab-bar-item',
		props:{    
			path:String
		},
		data(){
			return{
				
			}
		},
		methods:{
			press(){
				this.$router.replace(this.path)
			}
		},
		computed:{
			isactive(){
				return this.$route.path.indexOf(this.path) !== -1
				//indexOf的作用是返回某个字符串在字符串中首次出现的位置。
				
			}
		}
	}
</script>

<style>
	.item {
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;

	}
	.item img {
		width: 22px;
		height: 22px;
		margin-top: 3px;
		vertical-align: middle;
		margin-bottom: 1.5px;
	}
	.blue {
		color:#55aa7f
	}
</style>
