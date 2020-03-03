<template>
	<div>
		<div class="bar">
			<navbar>
				<div slot="center">我的</div>
			</navbar>
		</div>
		<div id="profile">
			<div class="imgk">
				<background></background>
				<!-- <img src="../../assets/img/bg/profile.gif" /> -->
			</div>
			<div class="qqq">
				<div class="info2">
					<div class="fff">{{name}}</div>
					<div class="kkk">QQ:{{qq}}</div>
				</div>
				<div class="name" @click="buttonclick">
					<span class="kk" >
						<i class="el-icon-lollipop"></i>
					</span>
					<span class="tesm">昵称管理</span>
					<span class="jj">
						<i class="el-icon-arrow-right"></i>
					</span>
				</div>
				<div class="team" @click="buttonclickx" v-if="teamname">
					<span class="kk">
						<i class="el-icon-news"></i>
					</span>
					<span class="tesm">团队信息</span>
					<span class="jj">
						<i class="el-icon-arrow-right"></i>
					</span>
				</div>
				<div class="team" @click="buttonclick2" v-else>
					<span class="kk">
						<i class="el-icon-news"></i>
					</span>
					<span class="tesm">加入团队</span>
					<span class="jj">
						<i class="el-icon-arrow-right"></i>
					</span>
				</div>
				<div class="record" @click="buttonclick3">
					<span class="kk">
						<i class="el-icon-document-checked"></i>
					</span>
					<span class="tesm">审核记录</span>
					<span class="jj">
						<i class="el-icon-arrow-right"></i>
					</span>
				</div>
				<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2446078648&site=qq&menu=yes">
					<div class="kefu">
						<span class="kk">
							<i class="el-icon-user"></i>
						</span>
						<span class="tesm">联系客服</span>
						<span class="jj">
							<i class="el-icon-arrow-right"></i>
						</span>
					</div>
				</a>
			</div>
		</div>
		<div class="bottomBar">
			<maintabbar></maintabbar>
		</div>
	</div>
</template>

<script>
import background from "../../components/background/background.vue";
import { mapMutations } from "vuex";
import navbar from "../../components/navbar/navbar.vue";
import { getdata } from "../../network/profile.js";
import { Message } from "element-ui";
import maintabbar from "../../components/tab-bar/maintabbar.vue";
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
    maintabbar,
    background
  },
  methods: {
    buttonclick() {
      this.$router.push(`/profile/nameChange`);
      console.log("dj");
    },
    buttonclick2() {
      this.$router.push(`/profile/team`);
    },
    buttonclick3() {
      this.$router.push(`/profile/recordList`);
    },
    buttonclickx() {
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
            console.log(this.teamname);
          } else {
            Message({
              showClose: true,
              message: res.reason,
              type: "warning",
              duration: 1500
            });
            if (res.reason === "登陆过期，请重新登陆") {
              localStorage.removeItem("Authorization");
              this.$router.push("/login");
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
    shuaxin() {
      console.log(this.$store.state.isrefresh);
      if (this.$store.state.isrefresh === true) {
        location.reload();
        this.$store.state.isrefresh === false;
      }
      console.log(this.$store.state.isrefresh);
    }
  }
};
</script>

<style scoped>
.bar {
  z-index: 10;
}
.info2 {
  margin: 0;
  padding: 10px 5px;
  background-color: white;
  overflow: hidden;
  font-size: 15px;
  height: 60px;
  padding-left: 10px;
}

.fff {
  color: #55aa7f;
  font-size: 27px;
}

.kkk {
  padding-top: 5px;
}

#profile {	
  background-color: white;
  z-index: 8;
  position: fixed;
  top: 44px;
  bottom: 49px;
  overflow: fixed;
  width: 100%;
}

a {
  text-decoration: none;
}
.bottomBar{
	z-index: 8;
	position:absolute
}
.qqq {
  position: fixed;

  margin: 0 auto;
  top: 250px;
  left: 20px;
  right: 20px;
  background-color: #eeeeee;
  width: 90%;
}

.imgk {
  position: relative;

  top: 0;
  left: 0;
  right: 0;
  height: calc(100vh - 44px -49px);
  overflow: hidden;
}

.imgk img {
  width: 100%;
  height: calc(100vh -44px -49px);
}

.name,
.qq,
.team,
.record,
.kefu {
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
.tree i,
.kefu i {
  color: #55aa7f;
  font-size: 25px;
}

.kk {
  padding: 5px;
}
.jj {
  padding-right: 0px;
  position: absolute;
  right: 15px;
}
.tesm {
  position: relative;
  padding-top: 5px;
  color: black;
}
</style>
