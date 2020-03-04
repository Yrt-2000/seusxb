<template>
  <div>
    <newbar>我的团队</newbar>
    <background></background> 
	<!-- <div>{{teamname}}</div>
    <div id="newteam">
      <div class="great">
      <div></div>
      <div>{{teamname}}</div>
      <!-- <div class="ko">
          <section class="account">
            <div class="account-item">
              <div class="number">
                <span class="balance">{{teampoint}}</span>分
              </div>
              <div class="account-info">团队积分</div>
            </div>
            <div class="account-item">
              <div class="number">
                <span class="balance">{{teamrank}}</span>名
              </div>
              <div class="account-info">团队排名</div>
            </div>
          </section>
      </div>-->
      <!-- </div> -->

      <!-- <div class="other">
        <el-collapse v-for="(item,index) in info" :key="index" accordion>
          <el-collapse-item :title="item.name">
            <div>积分：{{item.point}}</div>
            <div>最近3条完成任务记录：</div>
            <div>{{item.doneList[0].taskNum}}</div>
            <div>{{item.doneList[1].taskNum}}</div>
            <div>{{item.doneList[2].taskNum}}</div>
          </el-collapse-item>
        </el-collapse>-->
      </div>
    </div>
  </div>
</template>

<script>
import background from "../../components/background/background.vue";
import { getteam } from "../../network/profile.js";
import newbar from "../../components/navbar/newbar.vue";
export default {
  name: "newteam",
  created() {
    this.getTeamNow();
  },
  methods: {
    getTeamNow() {
      getteam()
        .then(res => {
		  console.log(res);

          if (res.success) {
            this.info = res.result.users;
            this.teampoint = res.result.teampoint
            this.teamrank = res.result.teamrank
            this.teamname = res.result.teamname 
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
              }
			}
			console.log(this.teamname);

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

<style scoped>
.el-collapse {
  padding-left: 20px;
}

#newteam {
  position: fixed;
  top: 244px;
  overflow: scroll;
  width: 100%;
}

.lala img {
  z-index: -1;
  width: 100%;
  height: 200px;
}
.great {
  /* position: absolute; */
  top: 70px;
  left: 5vw;
  right: 5vw;
  width: 90vw;
  background-color: #c0c0c0;
  z-index: 11;
  height: 80px;
}

.ki {
  position: absolute;
  left: 5vw;
  font-size: 22px;
  color: #55aa7f;
  width: 45vw;
  top: 43px;
}

.ko {
  position: absolute;
  left: 40vw;
  width: 50vw;
  top: -5vw;
}

.account {
  display: flex;
}

.account-item {
  width: 100%;
  background-color: #fff;
  margin-right: 15px;
  text-align: center;
  border: #333333 1px solid;
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
</style>
