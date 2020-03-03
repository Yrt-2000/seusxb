<template>
  <div>
    <!-- <navbar>
      <div slot="center">“播种季”计软智学生会线上打卡</div>
    </navbar>-->
    
    <div class="bg">
      
      <img class="bg1" src="../../assets/img/newbg/b1.gif" />
      <img class="bg1" src="../../assets/img/newbg/b3.gif" />
      <img class="bg2" src="../../assets/img/newbg/b2.gif" />
      <img class="bg2" src="../../assets/img/newbg/b4.gif" />
      <img class="bd"  src="../../assets/img/newbg/bd.gif" />
      <img class="bgs" src="../../assets/img/newbg/bg-.gif" />
    </div>
    <div class="logos">
      <img class="cse-logo" src="../../assets/img/logo/logo.gif"/>
      <div></div>
      <!-- <img class="bzj-logo" src="../../assets/img/logo/bzj.png"> -->
    </div>
    <div class="signin">
      <div class="box" >
        <h2>欢迎登录</h2>
        <el-input v-model="loginForm.num" placeholder="一卡通号" style="margin-bottom:15px" />
        <el-input v-model="loginForm.QQ" placeholder="QQ账号(唯一联系方式,请仔细填写)" />
        <div class="click" @click="login">登录</div>
        <div class="hint">首次登录将自动创建账户</div>
      </div>
    </div>
    <div class="copyright">
      <p>版权所有 © 东南大学"计软智"学生会</p>
    </div>
  </div>
</template>

<script>
import axios from "../../network/axios.js";
import { mapMutations } from "vuex";
import navbar from "../../components/navbar/navbar.vue";
import { Message, Input } from "element-ui";
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

<style lang="less" scoped>
.bg {
  z-index: -10;
  position: fixed;
  width: 100%;
  .bgs {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    animation: m 3s;
  }
  .bd {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    animation: d 4s;
  }
  .bg3 {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    animation: m3 1.5s;
  }
  .bg2 {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    animation: m2 1.5s;
  }
  .bg1 {
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    animation: m1 1.5s;
  }
  @keyframes d {
    from {
      opacity: 0;
    }
    to {
      opacity: 100;
    }
  }
  @keyframes m {
    from {
      opacity: 0;
    }
    to {
      opacity: 100;
    }
  }
  @keyframes m1 {
    from {
      right:  -500px;
      top: 1000px;
    }
    to {
      right: 0px;
      top: 0px;
    }
  }
  @keyframes m2 {
    from {
      left:  -500px;
      bottom: 1000px;
    }
    to {
      left: 0px;
      bottom: 0px;
    }
  }
  @keyframes m3 {
    from {
      bottom:  -600px;
    }
    to {
      bottom :  0px;
    }
  }
}

.signin {
  z-index: 9;
  background-color: #ffffff;
  overflow: fixed;
  position: fixed;
  top: 44px;
  width: 100%;
}
.copyright{
    position: fixed;
    bottom: 10px;
    text-align:center;
    width: 100%;
    animation: slideIn 2s;
    p {
      margin: 3px;
      font-size:24px;
    }
    @keyframes slideIn {
      from {
        bottom: -30px;
        opacity: 0;
      }
      to {
        bottom: 10px;
        opacity: 100;
      }
    }
  }
// img {
//   height: calc(100vh - 44px);
//   width: auto;
//   overflow: hidden;
//   position: fixed;
//   left: 0;
//   right: 0;
// }
.hint {
  font-size: 15px;
  color: gray;
  text-align: center;
  margin-bottom: 10px;
}
.box {
  background-color: white;
  border-color: #333333;
  opacity: 0.8;
  z-index: 5;
  padding-left: 30px;
  padding-right: 30px;
  position: absolute;
  top: 180px;
  left: 6.5%;
  right: 6.5%;
  border-radius: 7px;
  animation: fad 2s;

  @keyframes fad {
    from {
      opacity: 0;
      top: 700px;
    }
    to {
      opacity: 0.8;
      top: 180px;
    }
  }
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
.logos {
  position: fixed;
  top:7%;
  width:100%;
  text-align: center;
  animation: fadeIn 2s;
  .bzj-logo {
    width: 80%;
    border-radius:30px;
    background-color:  rgba(243, 236, 135, 0.4);
    margin-top: 10px;
  }
  .cse-logo {
    width: 80%;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @keyframes fadeIn {
    from {
      top: -100px;
      opacity: 0;
    }
    to {
      top: 7%;
      opacity: 100;
    }
  }

}


.copyright {
  position: fixed;
  bottom: 10px;
  text-align: center;
  width: 100%;
  animation: slideIn 1s;
  p {
    margin:3px;
    font-size:10px;
  } 
  @keyframes slideIn {
    from {
      bottom: -30px;
      opacity: 0;
    }
    to {
      bottom: 10px;
      opacity: 100;
    }
  }
}
</style>
