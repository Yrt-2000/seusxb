<template>
  <div class="list" @click="click(taskName)">
    <el-container>
      <el-aside width="55px">
        <div class="imga">
          <slot name="imga"></slot>
        </div>
      </el-aside>
      <div>
        <div class="largesize">
          <slot name="large"></slot>
        </div>
        <div class="smallsize">
          <slot name="small"></slot>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "taskitem",
  methods: {
    click(taskName) {
      this.$router.push(`/detail/${taskName}`);
    }
  },
  props: {
    taskName: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.list {
  margin: 7px 3.5px;
  padding: 10px 5px;
}
.largesize {
  text-align:left;
  margin-left:10px;
  margin-top:5px;
  font-weight: bold;
  font-size: 16px;
  color: #42b983;
}
.smallsize {
  text-align:left;
  font-size: 0.7em;
  margin-left:10px;
  margin-left:10px;
  margin-top: 3px;
  color: #adafb0;
}

.el-aside,
.el-container {
  padding: 0;
}
</style>
