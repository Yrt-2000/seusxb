<template>
  <div class="home">
     <navbar>
			 <div slot='center'>首页</div>
		 </navbar>
  </div>
</template>

<script>
import navbar from '../../components/navbar/navbar.vue'
export default {
  name: 'home',
  components: {
    navbar
  }
}
</script>

<style>
	.home{
		margin-top: 44px;
	}
</style>