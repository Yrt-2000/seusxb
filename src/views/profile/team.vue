<template>
  <div class="all">
    <newbar>加入团队</newbar>
    <background></background>
    <div id="team">
      <input v-model="team" placeholder="请输入要加入或创建团队的名称" />
      <div class="b1" @click="b1click">加入团队</div>
      <div class="b2" @click="b2click">创建团队</div>
      <p>
        说明：每团队上限为5人；如需创建团队，可在输入框内填写要创建团队的名称，点击灰色“创建团队按钮”即可。其它成员想加入时，只需在输入框内
        输入您创建团队的名称，点击绿色“加入团队”按钮，当团队人数在5人以下时，可以成功加入；如需加入团队，请输入想要加入团队的名称，点击绿色按钮，
        若该团队未满员则可以加入。每天各团队有机会获得若干团队分，活动结束时团队积分前4名的团队可领取多肉盆栽套装一份。由于活动准备时间仓促，
        可能存在平台卡慢、活动规则不周全等问题，敬请理解。活动最终解释权归计软智学生会所有。
      </p>
      <!-- 大概意思：若该团队名已存在，则直接加入该团队；若不存在，则创建团队。团队有人数限制 -->
    </div>
  </div>
</template>

<script>
import background from "../../components/background/background.vue";
import newbar from "../../components/navbar/newbar.vue";
import { joininteam } from "../../network/profile.js";
import { createteam } from "../../network/profile.js";
import { Message } from "element-ui";
export default {
  name: "team",
  components: {
    newbar,
    background
  },
  data() {
    return {
      team: ""
    };
  },
  methods: {
    b2click() {
      createteam(this.team.substr(0,15))
        .then(res => {
          if (res.success) {
            Message({
              showClose: true,
              message: "操作成功",
              type: "success",
              duration: 1000
            }),
              this.$router.replace("/profile");
            // this.$store.state.isrefresh = true
          } else {
            Message({
              showClose: true,
              message: res.reason,
              type: "warning",
              duration: 1000
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
            message: "操作失败",
            type: "error",
            duration: 1000
          });
        });
    },
    b1click() {
      joininteam(this.team)
        .then(res => {
          if (res.success) {
            Message({
              showClose: true,
              message: "操作成功",
              type: "success",
              duration: 1500
            });
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
            message: "操作失败",
            type: "error",
            duration: 1500
          });
        });
    }
  }
};
</script>
	
	<style scoped>
#team {
  position: fixed;
  top: 244px;
  /* overflow: scroll; */
  width: 100%;
}

.all{
  overflow: scroll;
}

input {
  height: 30px;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 30px;
}

.b1 {
  margin: 18px;
  border-radius: 5px;
  background-color: #55aa7f;
  color: white;
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  padding: 10px;
}

.b2 {
  margin: 18px;
  border-radius: 5px;
  background-color: #97aa9f;
  color: white;
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  padding: 10px;
}

p {
  background-color: #f1ffef;
  padding: 15px;
  margin: 18px;
  border-radius: 5px;
  color: #adafb0;
  font-size: 13px;
  margin-left: 10%;
  margin-right: 10%;
}
</style>
	