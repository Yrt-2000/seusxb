<template>
  <div>
    <navbar>
      <div slot="center">“播种季”计软智学生会线上打卡</div>
    </navbar>
    <div class="signin">
      <img src="../../assets/img/login.jpg" />
      <div class="box">
        <h2>欢迎登录</h2>
        <el-input v-model="loginForm.num" placeholder="一卡通号" style="margin-bottom:15px"/>
        <el-input v-model="loginForm.QQ" placeholder="QQ账号" />
        <div class="click" @click="login">登录</div>
        <div class="hint">首次登录将自动创建账户</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../network/axios.js";
import { mapMutations } from "vuex";
import navbar from "../../components/navbar/navbar.vue";
import { Message,Input } from "element-ui";
export default {
  name: "login",
  components: {
    navbar,
    "el-input": Input
  },
  data() {
    return {
      loginForm: {
        QQ: "",
        num: ""
      },
      token: ""
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    login() {
      let _this = this;
      if (this.loginForm.QQ === "" || this.loginForm.num === "") {
        Message({
          showClose: true,
          message: "qq和一卡通号不能为空",
          type: "error",
          duration: 1000
        });
      } else {
        return axios({
          method: "get",
          url: "/user/login",
          params: _this.loginForm
        })
          .then(res => {
            if (res.success) {
              console.log(res.result.token); //token打印
              _this.token = res.result.token;
              //把token放到vuex里面
              _this.changeLogin({ Authorization: _this.token });
              _this.$router.replace("/home");
              Message({
                showClose: true,
                message: res.result.message,
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
              message: "登录失败",
              type: "error",
              duration: 1500
            });
            console.log(err);
          });
      }
    }
  }
};
</script>

<style scoped>
.signin {
  z-index: 9;
  background-color: #ffffff;
  overflow: fixed;
	position: fixed;
	top:44px;
	width: 100%;
}

img {
  width: 100%;
  height: calc(100vh - 44px);
  overflow: hidden;
  position: fixed;
	top: 44px;
	left: 0;
	right: 0;
}
.hint{
  font-size: 15px;
  color: gray;
  text-align:center;
  margin-bottom:10px;
}
.box {
  background-color: white;
  border-color: #333333;
  opacity: 0.8;
  z-index: 5;
  padding-left:15px;
 padding-right:15px;
  position: absolute;
  top: 60px;
  left: 15px;
  right: 15px;
  border-radius: 7px;
}

h2 {
  color: #42b983;
  text-align: center;
}

input {
  height: 25px;
  margin: 10px;
  width: 93%;
}

.click {
  margin: 15px;
  margin-bottom: 5px;
  border-radius: 5px;
  background-color: #55aa7f;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>
