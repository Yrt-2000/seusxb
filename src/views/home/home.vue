<template>
  <div>
    <navbar>
      <div slot="center">首页</div>
    </navbar>
    <div class="home">
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
                    不同任务，基础分值不同，且同一任务
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
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import { getRank } from "../../network/home.js";
import navbar from "../../components/navbar/navbar.vue";
import maintabbar from "../../components/tab-bar/maintabbar.vue";
import { Message } from "element-ui";
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
      activeNamesss: []
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
    }
  }
};
</script>

<style >
/* .demo-table-expand {
    font-size: 0;
    padding: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    padding: 0;
    margin-right: 0;
    margin-left: -0;
    margin-bottom: -0;
    margin-top: -0;
    width: 100%;
  } */


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