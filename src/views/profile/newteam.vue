<template>
  <div class="sss">
    <newbar>我的团队</newbar>
    <background></background> 
		<div class="lll">
			<div class="heightlight">{{teamname}}</div>
			<span class="jifen">团队积分:{{teampoint}}  </span>   <span class="paiming">团队排名:{{teamrank}}</span>
        <el-collapse v-for="(item,index) in info" :key="index" accordion>
          <el-collapse-item :title="item.name">
            <div>积分：{{item.point}}</div>
            <div>最近3条完成任务记录：</div>
            <div>{{item.doneList[0].taskNum}}</div>
            <div>{{item.doneList[1].taskNum}}</div>
            <div>{{item.doneList[2].taskNum}}</div>
          </el-collapse-item>
        </el-collapse>
				</div>
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


.sss {
  position: fixed;
  top: 44px;
  overflow: scroll;
  width: 100%;
}

.lll{
	padding-top: 200px;
	padding-left: 6%;
	padding-right: 6%;
}

.heightlight{
	color: #55AA7F;
	font-size: 23px;
}


</style>
