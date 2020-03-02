<template>
	<div class="admin-getTeam">
		<el-table
			:data="result"
			stripe
			style="width: 100%"
			header-align="center"
			:default-sort="{prop: 'teamrank', order: 'ascending'}"
		>
			<el-table-column prop="teamrank" label="排名" align="center"></el-table-column>
			<el-table-column prop="teamname" label="名称" align="center"></el-table-column>
			<el-table-column prop="teampoint" label="积分" align="center"></el-table-column>
		</el-table>
	</div>
</template>

<script>
import { Message } from "element-ui";
import { team } from "../../network/admin.js";
import { Table } from "element-ui";
export default {
  name: "admin-getTeam",
  components: {
    "el-table": Table
  },
  created() {
    this.getteam();
  },
  data() {
    return {
      result: []
    };
  },
  methods: {
    getteam() {
      team()
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
  }
};
</script>

<style scoped>
.admin-getTeam {
  padding-top: 50px;
  padding: 10px;
}
</style>
