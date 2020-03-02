<template>
	<div>
		<newbar>
			<slot name="title1"></slot>
		</newbar>
		<div class="up">
			<slot name="img"></slot>
			<div class="text">
				<div style="color:#42b983;font-size:20px;font-weight:bold">
					<slot name="title2"></slot>
				</div>
				<el-divider></el-divider>
				<div style="font-weight:bold">打卡规则:</div>
				<p>
					<slot name="text"></slot>
				</p>
			</div>
		</div>
		<bottomBar :taskid="taskid"></bottomBar>
	</div>
</template>

<script>
import newbar from "../../../components/navbar/newbar.vue";
import bottomBar from "../../../components/bottom-bar/bottom-bar.vue";
import { Divider } from "element-ui";
export default {
  name: "detail-base",
  components: {
    newbar,
    bottomBar,

    "ek-divider": Divider
  },
  props: {
    taskid: String
  }
};
</script>

<style>
.up {
  position: fixed;
  top:40px;
  bottom: 0px;
  overflow: scroll;
  background-color: #f1ffef;
}

.up img {
  width: 100%;
  height: auto;
}

.text {
  color: #555555;
  padding: 7px;
  margin: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
