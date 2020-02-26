<template>
	<div id="profile">
	<navbar>
		<div slot="center">我的</div>
	</navbar>
	<section class="account">
	  <div class="account-item">
	    <div class="number">
	      <span class="balance">{{teampoint}}</span>分
	    </div>
	    <div class="account-info">团队积分</div>
	  </div>
		  <div class="account-item">
	    <div class="number">
	      <span class="balance">{{point}}</span>分
	    </div>
	    <div class="account-info">我的积分</div>
	  </div>
	  <div class="account-item">
	    <div class="number">
	      <span class="balance">{{rank}}</span>位
	    </div>
	    <div class="account-info">我的排名</div>
	  </div>
	</section>
	  <div class="team" v-if="teamname"><i class="el-icon-news"></i> 团队名称：{{teamname}},团队排名：{{teamrank}}</div>
	  <div class="team" @click="buttonclick2" v-else><i class="el-icon-news"></i> 现在没有加入团队，点击加入团队</div>
		<div class="qq"><i class="el-icon-link"></i> 我绑定的QQ号：{{qq}}</div>
	  <div class="name" @click="buttonclick"><i class="el-icon-lollipop"></i> 我在活动中的昵称：{{name}},点击此处改名</div>
		<div class="record" @click="buttonclick3"><i class="el-icon-document-checked"></i> 打卡审核通过记录</div>
		<div class="tree"><i class="el-icon-picture-outline"></i>
			我的积分树 <div>
		<img v-if="point >=0 && point <70" src="../../assets/img/tree/tree1.png" />
		<img v-else-if="point >=70 && point <150" src="../../assets/img/tree/tree2.gif"/>
		<img v-else-if="point >=150 && point <210" src="../../assets/img/tree/tree3.gif" />
		<img v-else src="../../assets/img/tree/tree4.gif" />
		</div>

		
	</div>
	</div>
</template>

<script>
	import navbar from '../../components/navbar/navbar.vue'
  import {getdata} from '../../network/profile.js'
	import {Message} from 'element-ui'
	export default{
		name:"profile",
		// created(){
		// 	this.getdatanow()
		// },
		data(){
			return{
				qq:"",
				name:"",
				teamname:"",
				rank:"",
				teamrank:"",
				point:"",
				teampoint:""
			}
		},
		components: {
		navbar
		},
		methods:{
			buttonclick(){
				this.$router.push(`/profile/nameChange`)
			},
			buttonclick2(){
				this.$router.push(`/profile/team`)
			},
			buttonclick3(){
				this.$router.push(`/profile/recordList`)
			},
			//发送相关网络请求
			getdatanow(){
				getdata().then(res => {
					if (res.success){
					this.qq = res.result.QQ;
					this.name = res.result.name;
					this.teamname = res.result.teamname;
		      this.rank = res.result.rank;
					this.teamrank = res.result.teamrank;
					this.point = res.result.point;
					this.teampoint = res.result.teampoint;
					}
					else{
						Message({
						           showClose: true,
						           message: res.reason,
						           type: 'warning',
						           duration: 1500
					})
				}
			}).catch(err => {
				Message({
					           showClose: true,
					           message: "数据获取失败",
					           type: 'error',
					           duration: 1500
				})
			})
		}
	},
	}
</script>

<style>
	#profile {
	  background-color: #f2f2f2;
		margin-top: 44px;
	}
	
	
	.account {
	  display: flex;
	}
	
	.account-item {
	  width: 100%;
	  background-color: #fff;
	  margin-right: 1px;
	  text-align: center;
	}
	
	.account-item:last-of-type {
	  margin-right: 0;
	}
	
	.account-item {
	  color: #666;
	  font-size: 13px;
	  padding: 18px;
	}
	
	.account-item .balance {
	  font-size: 24px;
	  font-weight: 700;
	  color:#42B983
	}
	
	.account-info {
	  margin-top: 6px;
	}
	
	.order-list, .service-list {
	  margin-top: 12px;
	}
	
	
	.name,.qq,.team,.record{
		margin: 3px 0;
		padding:10px 5px;
		background-color:white;
		overflow: hidden;
		font-size: 14px;
		height: 30px;
	}
	
	.name i,.qq i,.team i,.record i,.tree i{
		color: #55AA7F;
		font-size: 25px;
	}
	
	.tree{
		margin: 3px 0;
		padding:10px 5px;
		background-color:white;
		overflow: hidden;
		font-size: 14px;
		}
		
	.tree img{
		padding: 20px  50px;
		width: 40%;
		height: auto;
	}
	

</style>
