<template>
	<div>
		<navbar>
		  <div slot="center">我的</div>
		</navbar>
  <div id="profile">
		<div class="k">
		<img src="../../assets/img/树/12.jpg">
		</div>
		<div class="a">
					 <div class="b">
						  <img v-if="point >=0 && point <70" src="../../assets/img/tree/tree1.png" />
						  <img v-else-if="point >=70 && point <150" src="../../assets/img/tree/tree2.gif" />
						  <img v-else-if="point >=150 && point <210" src="../../assets/img/tree/tree3.gif" />
						  <img v-else src="../../assets/img/tree/tree4.gif" />
							<div>我的积分树</div>
					 </div>
					 <div class="c">
						   <section class="account">
						     <div class="account-item">
						       <div class="number">
						         <span class="balance">{{point}}</span>分
						       </div>
						       <div class="account-info">我的<br>积分</div>
						     </div>
						     <div class="account-item">
						       <div class="number">
						         <span class="balance">{{rank}}</span>位
						       </div>
						       <div class="account-info">我的<br>排名</div>
						     </div>
						     <div class="account-item">
						       <div class="number">
						         <span class="balance">{{teampoint}}</span>分
						       </div>
						       <div class="account-info">团队<br>积分</div>
						     </div>
								 <div class="account-item">
								   <div class="number">
								     <span class="balance">{{teamrank}}</span>位
								   </div>
								   <div class="account-info">团队<br>排名</div>
								 </div>
						   </section>
							 <div class="f"><div class="d">{{name}} </div>
							 <div class="e">QQ:{{qq}}</div></div>
					 </div>
		</div>
		<div class="name" @click="buttonclick">
		  <span class="kk"><i class="el-icon-lollipop"></i></span>
		  <span class="tesm">昵称</span>
			<span class="jj"><i class="el-icon-arrow-right"></i></span>
		</div>
		<div class="team" @click="buttonclickx" v-if="teamname">
		  <span class="kk"><i class="el-icon-news"></i></span>
		  <span class="tesm">团队</span>
			<span class="jj"><i class="el-icon-arrow-right"></i></span>
		</div>
		<div class="team" @click="buttonclick2" v-else>
		  <span class="kk"><i class="el-icon-news"></i></span>
		  <span class="tesm">团队</span>
			<span class="jj"><i class="el-icon-arrow-right"></i></span>
		</div>
		<div class="record" @click="buttonclick3">
		  <span class="kk"><i class="el-icon-document-checked"></i></span>
			<span class="tesm">提交记录</span>
			<span class="jj"><i class="el-icon-arrow-right"></i></span>
		</div>
  </div>
	<maintabbar></maintabbar>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
import navbar from "../../components/navbar/navbar.vue";
import { getdata } from "../../network/profile.js";
import { Message } from "element-ui";
import maintabbar from '../../components/tab-bar/maintabbar.vue'
export default {
  name: "profile",
  created() {
    this.getdatanow();
  },
	activated() {
		this.shuaxin();
	},
  data() {
    return {
      qq: "",
      name: "",
      teamname: "",
      rank: "",
      teamrank: "",
      point: "",
      teampoint: ""
    };
  },
  components: {
    navbar,
		maintabbar
  },
  methods: {
    out() {
      this.$router.replace("/login");
    },
    buttonclick() {
      this.$router.push(`/profile/nameChange`);
    },
    buttonclick2() {
      this.$router.push(`/profile/team`);
    },
    buttonclick3() {
      this.$router.push(`/profile/recordList`);
    },
		buttonclickx(){
			this.$router.push(`/profile/newteam`);
		},
    //发送相关网络请求
    getdatanow() {
      getdata()
        .then(res => {
          if (res.success) {
            this.qq = res.result.QQ;
            this.name = res.result.name;
            this.teamname = res.result.teamname;
            this.rank = res.result.rank;
            this.teamrank = res.result.teamrank;
            this.point = res.result.point;
            this.teampoint = res.result.teampoint;
						this.$store.state.teamrank = this.teamrank;
						this.$store.state.teamname = this.teamname;
						this.$store.state.teampoint = this.teampoint;
						console.log(this.teamname)
          } else {
            Message({
              showClose: true,
              message: res.reason,
              type: "warning",
              duration: 1500
            });
						if (res.reason === '登陆过期，请重新登陆'){
							localStorage.removeItem('Authorization');
							 this.$router.push('/login');
						}
          }
        })
        .catch(err => {
          Message({
            showClose: true,
            message: "数据获取失败",
            type: "error",
            duration: 1500
          });
        });
    },
		//控制页面刷新
		shuaxin(){
			console.log(this.$store.state.isrefresh)
			if(this.$store.state.isrefresh === true){
			location.reload()
			this.$store.state.isrefresh === false
			}
			console.log(this.$store.state.isrefresh)
		}
  }
}
</script>

<style scoped>
	
	.a{
		position: absolute;
		top: 100px;
		left: 15px;
		right: 15px;
		height: 166px;
		background-color: #f6fff4;
		border-radius: 10px;
		z-index: 10;
	}
	.b{
		position: absolute;
		top: 10px;
		left: 10px;
		bottom: 10px;
		
		
	}
	
	.b img{
		border-radius: 11.5vw;
		width: 23vw;
		height: 23vw;
	}
	
	.b div{
		color: #55AA7F;
		text-align: center;
		padding-top: 8px;
	}
	.c{
		position: absolute;
		top: 10px;
		left: 30vw;
		right: 1vw;
		bottom: 10px;
		padding-right: 2vw;
	}
	.d{
		font-size: 22px;
		color: #42B983;
		padding-left: 10px;
	}
	.e{
		font-size: 13px;
		padding-left: 10px;
	}
	.f{
		padding: 7px;
		padding-left: 5px;
		background-color: white;
		margin-top: 2.5px;
	}
	.k img{
		width: 100%;
		height: 300px;
	}
#profile {
  background-color: #f2f2f2;
	position: fixed;
	top:44px;
	bottom: 49px;
	overflow: scroll;
	width: 100%;
}

.account {
  display: flex;
}

.account-item {
  width: 100%;
  background-color: #fff;
  margin-right: 2.5px;
  text-align: center;
}

.account-item:last-of-type {
  margin-right: 0;
}

.account-item {
  color: #666;
  font-size: 13px;
  padding: 5px;
}

.account-item .balance {
  font-size: 24px;
  font-weight: 700;
  color: #42b983;
}

.account-info {
  margin-top: 6px;
}

.order-list,
.service-list {
  margin-top: 12px;
}


	
.name,
.qq,
.team,
.record {
  margin: 3px 0;
  padding: 10px 5px;
  background-color: white;
  overflow: hidden;
  font-size: 15px;
  height: 30px;
}

.name i,
.qq i,
.team i,
.record i,
.tree i {
  color: #55aa7f;
  font-size: 25px;
}

.kk{
	padding: 5px;
}
.jj{
	padding-right: 20px;
	position: absolute;
	right: 15px;
}
.tesm{
	position: relative;
	padding-top:5px
}
</style>
