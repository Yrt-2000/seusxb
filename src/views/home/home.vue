<template>
  <div>
    <navbar>
      <div slot="center">首页</div>
    </navbar>
    <div class="home">
			<div class="z1h">
				<div class="m1h">
					<div class="z2">
							  <img v-if="point >=0 && point <70" src='../../assets/img/树/13.jpg' />
							  <img v-else-if="point >=70 && point <150" src='../../assets/img/树/12.jpg' />
							  <img v-else-if="point >=150 && point <210" src='../../assets/img/树/11.jpg' />
							  <img v-else src='../../assets/img/树/10.jpg' />
					</div>
						 
							<div class="m3">
								 <div class="z4">{{name}}</div>
								 <div class="z5">QQ:{{qq}}</div>
						 </div>
					<div class="z3">
						<div class="fy">
												   <section class="account">
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
												     <div class="account-item">
												       <div class="number">
												         <span class="balance">{{teampoint}}</span>分
												       </div>
												       <div class="account-info">团队积分</div>
												     </div>
														 <div class="account-item">
														   <div class="number">
														     <span class="balance">{{teamrank}}</span>位
														   </div>
														   <div class="account-info">团队排名</div>
														 </div>
												   </section>
													 </div>
									</div>
				</div>
			</div>
			<div class="others">
      <el-container direction="vertical">
        <!-- 活动规则 -->
        <el-header height="auto"></el-header>
        <div  style="background-color:#eeeeee">
          <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick" :stretch="true" style="margin:20px">
            <el-tab-pane label="任务规则" name="first">
              <div class="rule_text">请仔细阅读规则简介后方可参加活动</div>
              <el-collapse v-model="activeNames" @change="handleChange" accordion>
                <el-collapse-item title="任务分值" name="1">
                  <div class="tes">
                    不同任务，基础分值不同，且部分任务
                    <strong>每天坚持完成能额外加分</strong>（加分力度随连续天数递增，
                    <strong>中断清零</strong>）
                  </div>
                </el-collapse-item>
                <el-collapse-item title="任务提交" name="2">
                  <div class="tes">
                    1.对于
                    <strong>无需图片证明</strong>任务,点击“打卡”按钮即可。
                    <br>2.对于
                    <strong>需图片证明</strong>任务,点击按钮后将发起和“计软智学生会菌菌”的QQ对话，将
                    <strong>图片和任务编号</strong>一起发送给“菌菌”即可。
                  </div>
                </el-collapse-item>
                <el-collapse-item title="提交结果" name="3">
                  <div class="tes">任务提交后，次日可在“我的->提交记录"中查看审核结果</div>
                </el-collapse-item>
              </el-collapse>
            </el-tab-pane>
            <el-tab-pane label="团队规则" name="second">
              <div class="rule_text">请仔细阅读规则简介后方可参加活动</div>
              <el-collapse v-model="activeNamess" @change="handleChange" accordion>
                <el-collapse-item title="队伍积分" name="1">
                  <div class="tes">
                    每日我们会以
                    <strong>团队所有成员当日积分总和</strong>来排序
                  </div>
                  <div>1~ 3名加10分
                    <br>4~ 6名加 8分
                    <br>7~10名加 6分
                    <br>11~15名加 4分
                  </div>
                  <div class="tes">所以多拉一些朋友一起来吧！！</div>
                </el-collapse-item>
                <el-collapse-item title="加入/创建团队" name="2">
                  <div class="tes">
                    输入队伍名称即可加入/创建队伍(
                    <strong>加入队伍任何队伍都不需要通过审核</strong>)
                    ，不过每支队伍最多只能有
                    <strong>5</strong>个人，
                    <strong>且加入队伍后无法退出哦！</strong>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </el-tab-pane>
            <el-tab-pane label="奖品说明" name="third" >
              <div class="rule_text">请仔细阅读规则简介后方可参加活动</div>
              <el-collapse v-model="activeNamesss" @change="handleChange" accordion >
                <el-collapse-item title="达标性奖励" name="1">
                  <div class="tes">
                    <strong>第一到第十位</strong>达到X分：
                    <strong>简约电子闹钟</strong>
                  </div>
                  <div class="tes">
                    <strong>第十一到第三十位</strong>位达到X分：
                    <strong>LED创意桌面摆件</strong>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="团队前四名奖品" name="2">
                  <div class="tes">
                    <strong>24合一超大多肉拼盘</strong>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="个人前五名奖品" name="3">
                  <div class="tes">
                    <strong>第一名：音响闹钟夜灯3合1的智能音响</strong>
                  </div>
                  <div class="tes">
                    <strong>第二名：Redmi airdots 无线蓝牙耳机</strong>
                  </div>
                  <div class="tes">
                    <strong>第三名：超可爱仓鼠抱枕</strong>
                  </div>
                  <div class="tes">
                    <strong>第四名：舒适加厚软坐垫</strong>
                  </div>
                  <div class="tes">
                    <strong>第五名：可变形毛绒公仔的创易U型枕</strong>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </el-tab-pane>
						<el-tab-pane label="注意事项" name="fourth">
						  <div class="rule_text">请仔细阅读规则简介后方可参加活动</div>
						  <el-collapse v-model="activeNamess" @change="handleChange" accordion>
						    <el-collapse-item title="活动时长" name="1">
						      <div class="tes">
						        本线上打卡活动预计持续至<strong>3月27日</strong>。由于正式开学时间的不确定性，
										若在3月27日之前返校，则打卡活动将提前结束，我们可能会<strong>适当调整</strong>达标性奖励中要求的积分，
										以确保有30位同学可以拿到该奖励。
						      </div>
						    </el-collapse-item>
						    <el-collapse-item title="关于打卡" name="2">
						      <div class="tes">
						         <div>请在参与活动之前先添加“计软智学生会菌菌”为好友，否则部分打卡链接可能无法正常跳转</div>
										 <div>部分浏览器（如Chrome等）上链接可能无法跳转，请切换浏览器</div>
										 <div>每项任务一天最多打卡<strong>一次</strong>，重复打卡不计入积分</div>
						      </div>
						    </el-collapse-item>
								<el-collapse-item title="其它事项" name="3">
								  <div class="tes">
								     <div>任何恶意获取积分的行为（如利用平台漏洞篡改数据等），经查实后其所有积分无效，并保留进一步处理的权力</div>
										 <div>如在使用平台中发现任何问题，或对规则存在疑问，您可以进入“我的”界面，点击<strong>联系客服按钮</strong></div>
										 <div>活动最终解释权归计软智学生会所有。</div>
								  </div>
								</el-collapse-item>
						  </el-collapse>
						</el-tab-pane>
          </el-tabs>
          <div style="margin-bottom:20px"></div>
          <el-carousel trigger="click" height="650px" arrow="always" autoplay="false" style="margin:20px">
            <el-carousel-item v-for="id in 2 " :key="id">
              <div v-show="id==1">
                <div class="rank_title">个人排行榜</div>
                <div class="rank_text">仅展示前十名，查看自身排名请前往“我的”页面</div>
                <el-table
                  :data="array"
                  stripe
                  style="width: 100%"
                  header-align="center"
                  :default-sort="{prop: 'rank', order: 'ascending'}"
                >
                  <el-table-column prop="rank" label="排名" align="center"></el-table-column>
                  <el-table-column prop="name" label="昵称" align="center"></el-table-column>
                  <el-table-column prop="point" label="积分" align="center"></el-table-column>
                </el-table>
              </div>
              <div v-show="id==2">
                <div class="rank_title">队伍排行榜</div>
                <div class="rank_text">仅展示前十名，查看自身排名请前往“我的”页面</div>
                <el-table
                  :data="teamarray"
                  stripe
                  style="width: 100%"
                  header-align="center"
                  :default-sort="{prop: 'teamrank', order: 'ascending'}"
                >
                  <el-table-column prop="teamrank" label="排名" align="center"></el-table-column>
                  <el-table-column prop="teamname" label="名称" align="center"></el-table-column>
                  <el-table-column prop="teampoint" label="积分" align="center"></el-table-column>
                </el-table>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 排行榜 -->
      </el-container>
    </div>
		</div>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import { getRank } from "../../network/home.js";
import navbar from "../../components/navbar/navbar.vue";
import maintabbar from "../../components/tab-bar/maintabbar.vue";
import { Message } from "element-ui";
import { getdata} from '../../network/profile.js'
export default {
  name: "home",
  components: {
    navbar,
    maintabbar
  },
  data() {
    return {
      activeName: "first",
      screenWidth: document.body.clientWidth,
      array: [],
      teamarray: [],
      activeNames: [],
      activeNamess: [],
      activeNamesss: [],
			qq:'',
			name:'',
			teamname:'',
			point:'',
			teampoint:'',
			rank:'',
			teamrank:''
    };
  },
  created() {
    this.getRanknow();
		this.getdatanow()
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
            this.teamarray = res.result.teams;
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
            message: "排行榜数据获取失败",
            type: "error",
            duration: 1500
          });
        });
    },
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
		}
  }
};
</script>

<style >
	.z3{
		position: absolute;
		top: 110px;
		left: 10px;
		right: 10px;
		background-color: #eeeeee;
		bottom: 10px;
	}
	
	.fy{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	
	.z4{
		font-size: 25px;
		color: #42B983;
		padding-top: 15px;
	}
	
	.z5{
		font-size: 13px;
		color: gray;
		padding-top: 5px;
	}
	
 .z1h{
	 position: absolute;
	 top: 0;
	 width: 100%;
	 height: 200px;
	 background-color:#eeeeee;
 }
 
 .m1h{
	 position: absolute;
	 top:20px;
	 left: 20px;
	 right: 20px;
	 background-color: #FFFFFF;
	 height: 180px;
 }
  
 .z2{
	 position: absolute;
	 top: 10px;
	 left: 10px;
 }

 .z2 img{
	 	border-radius: 11.5vw;
	 	width: 23vw;
	 	height: 23vw;
		border: 1px #eeeeee solid;
	 }
  .m3{
		width: 55vw;
		height: 23vw;
		position: absolute;
		top: 10px;
		right: 10px;
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
	
	
.el-header,
.el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: auto;
}
.el-carousel {
  background-color: white;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #d3dce6;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.home {
  position: fixed;
  top: 44px;
  bottom: 49px;
  overflow: scroll;
  width: 100%;
}
.others{
	padding-top: 200px;
}
.el-tabs__item {
  color: gray !important;
}
.el-tabs__item.is-active {
  color: #55aa7f !important;
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

.rule_title {
  font-weight: 900;
  font-size: 20px;
}
.rule_text {
  text-align: center;
  font-size: 10px;
  color: gray;
  margin-bottom: 10px;
  background-color: white;
  text-align: center;
}
.rank_title {
  text-align: center;
  font-weight: 900;
  font-size: 20px;
  padding: 15px;
  color: #55aa7f;
  background-color: white;
}
.rank_text {
  font-size: 10px;
  text-align: center;
  color: gray;
  padding: 10 0;
  background-color: white;
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

.tes {
  text-align: left;
}
</style>