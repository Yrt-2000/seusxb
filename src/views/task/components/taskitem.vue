<template>
  <div class="list" @click="click(taskName)">
    <el-container>
      <el-aside width="55px">
        <div class="imga">
          <slot name="imga"></slot>
        </div>
      </el-aside>
      <el-main>
        <div class="largesize">
          <slot name="large"></slot>
        </div>
        <div class="smallsize">
          <slot name="small"></slot>
        </div>
      </el-main>
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

<style>
.list {
  margin: 7px 3.5px;
  padding: 10px 5px;
}
.largesize {
  font-size: 1em;
  color: #42b983;
}
.smallsize {
  font-size: 0.7em;
  margin-top: 3px;
  color: #adafb0;
  padding-top: 8px;
}

.el-aside,
.el-main {
  padding: 0;
  margin: 0;
  background: 0 0;
  min-height: 40px;
}

.el-container {
  padding: 0;
}
</style>
