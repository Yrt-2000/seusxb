<template>
  <div class="admin-check">
    <div class="first">
      <h4>图片审核通过录入</h4>打卡人QQ号
      <input v-model="QQ" placeholder="打卡人QQ号" />
      <br />打卡任务的id
      <input v-model="task" placeholder="打卡任务id" />
      <br />
      <button @click="click1">将该条数据录入数据库</button>
    </div>
	<br>
	<br>
    <button @click="click2">更新排名</button>
	<br>
	<br>
    <div class="second">
      <h4>当日所有任务全部审核完成后，点击此按钮</h4>
      <button @click="click5(),click2(),click2()">结算今天的队伍积分</button>
      <h5>请注意：上面那个按钮每天只能点击一次！请确认当日任务全部审核完成后再点击此按钮！</h5>
    </div>
    <div class="third">
      <h5>以下三个按钮正常审核打卡记录的时候可以不需要使用</h5>
      <button @click="click3">获取所有队伍数据</button>
      <button @click="click4">获取所有个人数据</button>
    </div>
  </div>
</template>

<script>
import { record, update, teamupdate} from "../../network/admin.js";
import { Message } from "element-ui";
export default {
  name: "admin-check",
  methods: {
    click1() {
      record(this.QQ, this.task)
        .then(res => {
          if (res.success) {
            Message({
              showClose: true,
              message: "操作成功",
              type: "success",
              duration: 1500
            }),
              (this.task = "");
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
            message: "后端链接失败",
            type: "error",
            duration: 1500
          });
        });
    },
    click2() {
      update()
        .then(res => {
          if (res.success) {
            Message({
              showClose: true,
              message: "更新成功",
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
            message: "后端链接失败",
            type: "error",
            duration: 1500
          });
        });
    },
    click3() {
      this.$router.push("/admin/getTeam");
    },
    click4() {
      this.$router.push("/admin/getUser");
	},
	click5() {
      teamupdate()
        .then(res => {
          if (res.success) {
            Message({
              showClose: true,
              message: "更新成功",
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
            message: "后端链接失败",
            type: "error",
            duration: 1500
          });
        });
    },
  },
  data() {
    return {
      QQ: "",
      task: ""
    };
  }
};
</script>

<style scoped>
.admin-check {
  padding-top: 50px;
  padding: 10px;
}

h5 {
  color: red;
}

.first .second .third {
  padding: 30px;
}

input {
  padding: 5px;
  margin: 5px;
  width: 80%;
}

.first {
  background-color: #f0f8ff;
}

.second {
  background-color: #f2f2f2;
}

.third {
  background-color: #f1ffef;
}
</style>
