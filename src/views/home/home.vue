<template>
	<el-container direction="vertical">
  <div class="home">
    <navbar>
      <div slot="center">首页</div>
    </navbar>

		<!-- 活动规则 -->

		<el-header height=auto>
			<!-- <div class="rule_title">
				活动规则
			</div> -->
		</el-header>
		<el-main height=auto>
			<el-tabs v-model="activeName" type="border-card"  @tab-click="handleClick" stretch="true" >
				<el-tab-pane label="任务规则" name="first" >
						<el-collapse v-model="activeNames" @change="handleChange" accordion>
							<el-collapse-item title="任务分值" name="1">
								<div class="tes">不同任务，基础分值不同，且同一任务<strong>每天坚持完成能额外加分</strong>（加分力度随连续天数递增，<strong>中断清零</strong>）</div>
							</el-collapse-item>
							<el-collapse-item title="任务提交" name="2">
								<div class="tes"> 
									1.对于<strong>无需图片证明</strong>任务,点击“打卡”按钮即可。<br>
									2.对于<strong>需图片证明</strong>任务,点击按钮后将发起和“计软智学生会菌菌”的QQ对话，将<strong>图片和任务编号</strong>一起发送给“菌菌”即可。
								</div>
							</el-collapse-item>
						<el-collapse-item title="提交结果" name="3">
							<div class="tes">任务提交后，次日可在“我的->提交记录"中查看审核后的结果</div>
						</el-collapse-item>
					</el-collapse>	

				</el-tab-pane>
				<el-tab-pane label="团队规则" name="second">
					<el-collapse v-model="activeNamess" @change="handleChange" accordion>
							<el-collapse-item title="队伍积分" name="1">
								<div class="tes"> 
									每日我们会以<strong>团队所有成员积分总和</strong>排序
								</div>
								<div > 
									 1~ 3名加10分<br>
									 4~ 6名加 8分<br>
									 7~10名加 6分<br>
									11~15名加 4分  
								</div> 
								<div class="tes"> 
									所以多拉一些朋友一起来吧！！
								</div>
						</el-collapse-item>
						<el-collapse-item title="加入/创建团队" name="2">
								<div class="tes">输入队伍名称即可加入/创建队伍(<strong>加入队伍任何队伍都不需要通过审核</strong>)
								，不过每支队伍最多只能有<strong>5</strong>个人，<strong>且加入队伍后无法退出哦！</strong></div>
						</el-collapse-item>
					</el-collapse>	
				</el-tab-pane>
					
				
			</el-tabs>	
		</el-main>
		

		<!-- 排行榜 -->
		<el-main height=auto>
			<el-carousel trigger="click" height="700px" interval="5000">
				<el-carousel-item v-for="id in 2 " :key="id">
					<div v-show="id==1">
						<div class="rank_title">
							个人排名
						</div>
						<el-table :data="array" stripe style="width: 100%" header-align="center">
							<el-table-column prop="rank" label="排名" align="center"></el-table-column>
							<el-table-column prop="name" label="昵称" align="center"></el-table-column>
							<el-table-column prop="point" label="积分" align="center"></el-table-column>
						</el-table>
					</div>
					<div v-show="id==2">
						<div class="rank_title">
							队伍排名
						</div>
						<el-table :data="teamarray" stripe style="width: 100%" header-align="center">
							<el-table-column prop="teamrank" label="排名" align="center"></el-table-column>
							<el-table-column prop="teamname" label="名称" align="center"></el-table-column>
							<el-table-column prop="teamname" label="积分" align="center"></el-table-column>
						</el-table>
					</div>
				</el-carousel-item>
			</el-carousel>
		</el-main>

  </div>
	
	</el-container>
</template>

<script>
import { getRank } from "../../network/home.js";
import navbar from "../../components/navbar/navbar.vue";
import { Message } from "element-ui";
export default {
  name: "home",
  components: {
    navbar
  },
  data() {
    return {
      activeName: "first",
      screenWidth: document.body.clientWidth,
      array: [],
			teamarray: [],
			activeNames: [],
			activeNamess: []
    };
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  created() {
    this.getRanknow();
  },
  methods: {
		handleChange(val) {
        console.log(val);
		},
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getRanknow() {
      getRank()
        .then(res => {
          if (res.success) {
            this.array = res.result.users;
            this.team = res.result.teams;
          } else {
            Message({
              showClose: true,
              message: res.reason,
              type: "warning",
              duration: 1500
            });
          }
        })
        .catch(err => {
          Message({
            showClose: true,
            message: "排行榜数据获取失败",
            type: "error",
            duration: 1500
          });
        });
    }
  }
};
</script>

<style scoped>
.el-main {
	font-size: 18px;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: auto;
}

.el-header,
.el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: auto;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.home {
  margin-top: 44px;
  overflow: scroll;
  height: calc(100vh - 44px - 49px);
}

.notice1 {
  background-color: aliceblue;
  margin: 10px;
  border-radius: 7px;
  font-size: 13.8px;
}

.notice2 {
  width: 100%;
  text-align: center;
  font-size: 20px;
  border-bottom: 1px solid #55aa7f;
  padding: 3px 0;
  overflow-x: hidden;
}

.important {
  color: red;
}

.rule_title{
		font-weight:900;
		font-size: 20px;
	  padding:25px 50px;
}

.rank_title{
		font-weight:900;
		font-size: 20px;
	  padding:25px 50px;
}

.a {
  padding-left: 10px;
}

.b {
  padding-left: 20px;
}

.c {
  padding-left: 20px;
}

.tes{
	text-align:left
}
.pes div{
	text-align:left
}


</style>