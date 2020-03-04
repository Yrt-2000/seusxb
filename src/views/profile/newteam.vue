<template>
  <div>
    <newbar>我的团队</newbar>
    <background></background>
    <div id="team">
      <div class="heightlight">{{teamname}}</div>
      <div class="title-decoration"></div>

      <div class="light">排名:{{teamrank}} 积分:{{teampoint}}</div>

      <div class="info">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item  v-for="(item,index) in info" :key="index" :name="item.name">
            <template slot="title">
              <div class="name">{{item.name}}</div>
            </template>
            <div class="text">
              <div>积分：<strong>{{item.point}}</strong> </div>
              <div class="tes">最近3条完成记录</div>
              <div v-for="(task,index2) in item.doneList" :key="index2">
                <span>{{task.time.substr(0,10)+" "+task.taskNum+ " 获得 "+task.v+"分"}}</span>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import background from "../../components/background/background.vue";
import newbar from "../../components/navbar/newbar.vue";
import { getteam } from "../../network/profile.js";
export default {
  name: "newteam",
  created() {
    this.getTeamNow();
  },
  methods: {
    getTeamNow() {
      getteam()
        .then(res => {
          if (res.success) {
            this.info = res.result.users;
            this.teampoint = res.result.teampoint;
            this.teamrank = res.result.teamrank;
            this.teamname = res.result.teamname;

            for (let i = 0; i < this.info.length; i++) {
              for (let j = 0; j < this.info[i].doneList.length; j++) {
                switch (this.info[i].doneList[j].taskNum) {
                  case "1":
                    this.info[i].doneList[j].taskNum = "6:30早起";
                    break;
                  case "2":
                    this.info[i].doneList[j].taskNum = "东南学工";
                    break;
                  case "3":
                    this.info[i].doneList[j].taskNum = "按时吃早餐";
                    break;
                  case "4":
                    this.info[i].doneList[j].taskNum = "卫生习惯";
                    break;
                  case "5":
                    this.info[i].doneList[j].taskNum = "帮做家务";
                    break;
                  case "6":
                    this.info[i].doneList[j].taskNum = "完成当日作业";
                    break;
                  case "7":
                    this.info[i].doneList[j].taskNum = "整理当天学习内容";
                    break;
                  case "8":
                    this.info[i].doneList[j].taskNum = "线上答疑";
                    break;
                  case "9":
                    this.info[i].doneList[j].taskNum = "做运动";
                    break;
                  case "10":
                    this.info[i].doneList[j].taskNum = "关注时事";
                    break;
                  case "11":
                    this.info[i].doneList[j].taskNum = "每日练字";
                    break;
                  case "12":
                    this.info[i].doneList[j].taskNum = "阅读课外书籍";
                    break;
                  case "13":
                    this.info[i].doneList[j].taskNum = "阅读英语美文";
                    break;
                  case "14":
                    this.info[i].doneList[j].taskNum = "英语听力口语训练";
                    break;
                  case "15":
                    this.info[i].doneList[j].taskNum = "背单词";
                    break;
                  case "16":
                    this.info[i].doneList[j].taskNum = "额外专业知识学习";
                    break;
                  case "17":
                    this.info[i].doneList[j].taskNum = "每日编程";
                    break;
                  case "18":
                    this.info[i].doneList[j].taskNum = "11点前睡觉";
                    break;
                }
                console.log(this.info[i].doneList[j]);
                console.log(this.info[i].doneList[j].taskNum);
              }
            }
            console.log(this.info);
          } else {
            Message({
              showClose: true,
              message: res.reason,
              type: "warning",
              duration: 1500
            });
            if (res.reason == "登陆过期,请重新登陆") {
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
    }
  },
  data() {
    return {
      info: [],
      teampoint: "",
      teamrank: "",
      teamname: ""
    };
  },
  components: {
    newbar,
    background
  }
};
</script>

<style lang="less" scoped>
#team {
  position: fixed;
  top: 200px;
  width: 100%;
  overflow: scroll;
}
.light {
  text-align:center;
  color:  #615e5e;
  font-weight: 1000;
  font-size: 26px;
  animation:  fadeIn 1.5s;
  margin-bottom: 2%
}
.tes{
  font-weight: 800;
}
.heightlight {
  text-align:center;
  color: #55aa7f;
  font-weight: 1000;
  font-size: 26px;
  animation:  fadeIn 1.5s;
  margin-bottom: 2%
}
.name {
  margin-left: 5%;
  font-weight: 700;
  color: #55aa7f;
  font-size: 18px;
}
.text {
  color: #615e5e;
  margin-left: 6%;
  font-size: 16px;
}
.all{
  position: fixed;
  overflow: scroll;
}

.title-decoration{
  animation: line-extract 1s;
  height: 2px; 
  font-size:24px; 
  width: 7em; 
  background:rgb(16, 54, 45);
  margin:0 auto;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
}
@keyframes line-extract {
  from {
    width: 0;
  }
  to {
    width: 7em;
  }
}
</style>