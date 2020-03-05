<template>
  <div class="admin-check">
    <div class="first">
      <h4>图片审核通过录入</h4>打卡人QQ号
      <el-autocomplete v-model="QQ" :fetch-suggestions="querySearch"  :trigger-on-focus="false" placeholder="打卡人QQ号"/>
      <div>打卡任务的id
      <el-input v-model="task" placeholder="打卡任务id" @change="click1" />
      </div>
      
      <el-button @click="click1">将该条数据录入数据库</el-button>
    </div>

  <el-checkbox-group v-model="taskNums">
      <el-checkbox label="3"></el-checkbox>
      <el-checkbox label="4"></el-checkbox>
      <el-checkbox label="5"></el-checkbox>
      <el-checkbox label="7"></el-checkbox>
      <el-checkbox label="8"></el-checkbox>
      <el-checkbox label="9"></el-checkbox>
      <el-checkbox label="10"></el-checkbox>
      <el-checkbox label="11"></el-checkbox>
      <el-checkbox label="12"></el-checkbox>
      <el-checkbox label="13"></el-checkbox>
      <el-checkbox label="14"></el-checkbox>
      <el-checkbox label="15"></el-checkbox>
      <el-checkbox label="16"></el-checkbox>
      <el-checkbox label="17"></el-checkbox>
    </el-checkbox-group>
    <el-button @click="click10">将这些任务打卡</el-button>
    
    <div class="second">
      <h4>当日所有任务全部审核完成后，点击此按钮</h4>
      <button @click="click5()">结算今天的队伍积分</button>
      <h5>请注意：上面那个按钮每天只能点击一次！请确认当日任务全部审核完成后再点击此按钮！</h5>
    </div>
    <div class="third">
      <h5>以下三个按钮正常审核打卡记录的时候可以不需要使用</h5>
      <button @click="click3">获取所有队伍数据</button>
      <button @click="click4">获取所有个人数据</button>
      <button @click="click6">搜索团队信息</button>
      <br>
      <button @click="click7">今天完成过某任务的个人</button>
      <button @click="click8">超过某积分的个人</button>
    </div>
  </div>
</template>

<script>
const cityOptions = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18"
];
import {
  checkTasks,
  record,
  update,
  teamupdate,
  user
} from "../../network/admin.js";
import { Message, Input, Button, Autocomplete } from "element-ui";
export default {
  name: "admin-check",
  components: {
    "el-autocomplete": Autocomplete,
    "el-input": Input,
    "el-button": Button
  },
  async created() {
    user()
      .then(res => {
        if (res.success) {
          this.autoCompleteList = res.result.map(x => {
            return {value:x.QQ};
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
          message: err.message,
          type: "error",
          duration: 1500
        });
      });
  },
  methods: {
    querySearch(queryString, cb) {
      var autoCompleteList = this.autoCompleteList;
      var results = queryString
        ? autoCompleteList.filter(x => x.value.includes(queryString))
        : autoCompleteList;
      cb(results);
    },
    click10() {
      // console.log("!1!!!!");
      // console.log(this.taskNums);
      var taskNums = this.taskNums.toList()
      checkTasks(this.QQ, this.taskNums)
        .then(res => {
          if (res.success) {
            Message({
              showClose: true,
              message: "操作成功",
              type: "success",
              duration: 1500
            }),
              (this.task = "");
            this.QQ = "";
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
    click6() {
      this.$router.push("/admin/searchTeam");
    },
    click7() {
      this.$router.push("/admin/searchUser");
    },
    click8() {
      this.$router.push("/admin/searchUser2");
    }
  },
  data() {
    return {
      QQ: "",
      task: "",
      taskNums: [],
      autoCompleteList: []
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
