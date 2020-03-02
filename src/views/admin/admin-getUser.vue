<template>
	<div class="admin-getUser">
		<el-table
			:data="result"
			stripe
			style="width: 100%"
			header-align="center"
			:default-sort="{prop: 'rank', order: 'ascending'}"
		>
			<el-table-column prop="rank" label="排名" align="center"></el-table-column>
			<el-table-column prop="num" label="一卡通" align="center"></el-table-column>
			<el-table-column prop="QQ" label="QQ" align="center"></el-table-column>
			<el-table-column prop="name" label="昵称" align="center"></el-table-column>
			<el-table-column prop="point" label="积分" align="center"></el-table-column>
		</el-table>
	</div>
</template>

<script>
import { Message } from "element-ui";
import { user } from "../../network/admin.js";
import { Table } from "element-ui";
export default {
  name: "admin-getUser",
  created() {
    this.getInfo();
    console.log(this.result);
  },
  methods: {
    getInfo() {
      user()
        .then(res => {
          if (res.success) {
            this.result = res.result;
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
    }
  },
  data() {
    return {
      result: []
    };
  }
};
</script>

<style scoped>
.admin-getUser {
  padding-top: 50px;
  padding: 10px;
}
</style>
