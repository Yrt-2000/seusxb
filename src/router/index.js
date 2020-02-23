import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import('../views/home/home.vue') 
const login = () => import('../views/login/login.vue')
const task = () => import('../views/task/task.vue')
const profile = () => import('../views/profile/profile.vue')
const nameChange = () => import('../views/profile/nameChange.vue')
const team = () => import('../views/profile/team.vue')
const recordList = () => import('../views/profile/recordList.vue')
const getUp = () => import('../views/detail/getUp.vue')



// 重写路由push方法,阻止重复点击报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

// 重写路由replace方法,阻止重复点击报错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

Vue.use(VueRouter)
const routes = [
	{ path:'',redirect:'/login'},
	{ path:'/home',component:home},
	{ path:'/task',component:task},
	{ path:'/login',component:login},
	{ path:'/profile',component:profile},
	{ path:'/profile/namechange',component:nameChange},
	{ path:'/detail/getUp',component:getUp },
	{ path:'/profile/team',component:team},
	{ path:'/profile/recordList',component:recordList}
]


const router = new VueRouter({
  routes,
	mode:'history'
})

export default router