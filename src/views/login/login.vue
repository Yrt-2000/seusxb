<template>
  <div>
    <navbar>
      <div slot="center">“播种季”计软智学生会线上打卡</div>
    </navbar>
    <div class="signin">
      <img src="../../assets/img/login.jpg" />
      <div class="box">
        <h2>欢迎登录</h2>
        <input v-model="loginForm.num" placeholder="一卡通号" />
        <input v-model="loginForm.QQ" placeholder="QQ账号" />
        <div class="click" @click="login">登录（首次登录将自动创建账户）</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../network/axios.js";
import { mapMutations } from "vuex";
import navbar from "../../components/navbar/navbar.vue";
import { Message } from "element-ui";
export default {
  name: "login",
  components: {
    navbar
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

<style>
.signin {
  position: relative;
  z-index: 9;
  background-color: #ffffff;
  height: calc(100vh - 44px);
  overflow: scroll;
  margin-top: 44px;
}

img {
  width: 100%;
  height: calc(100vh - 44px);
  overflow: hidden;
  position: relative;
  z-index: 2;
}

.box {
  background-color: white;
  border-color: #333333;
  opacity: 0.7;
  z-index: 5;
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
  margin: 18px;
  border-radius: 5px;
  background-color: #55aa7f;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>
