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
const review = () => import('../views/detail/review.vue')
const answerQuestion = () => import('../views/detail/answerQuestion.vue')
const homework = () => import('../views/detail/homework.vue')
const housework = () => import('../views/detail/housework.vue')
const program = () => import('../views/detail/program.vue')
const extraLearning = () => import('../views/detail/extraLearning.vue')
const practice = () => import('../views/detail/practice.vue')
const reading = () => import('../views/detail/reading.vue')
const readEnglish = () => import('../views/detail/readEnglish.vue')
const listenAndSpeakEng = () => import('../views/detail/listenAndSpeakEng.vue')
const words = () => import('../views/detail/words.vue')
const health = () => import('../views/detail/health.vue')
const breakfast = () => import('../views/detail/breakfast.vue')
const sport = () => import('../views/detail/sport.vue')
const news = () => import('../views/detail/news.vue')
const sleep = () => import('../views/detail/sleep.vue')
const seuxg = () => import('../views/detail/seuxg.vue')


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
	{ path:'/detail/review',component:review},
	{ path:'/detail/answerQuestion',component:answerQuestion},
	{ path:'/detail/homework',component:homework},
	{ path:'/detail/housework',component:housework},
	{ path:'/detail/program',component:program},
	{ path:'/detail/extraLearning',component:extraLearning},
	{ path:'/detail/practice',component:practice},
	{ path:'/detail/reading',component:reading},
	{ path:'/detail/readEnglish',component:readEnglish},
	{ path:'/detail/listenAndSpeakEng',component:listenAndSpeakEng},
	{ path:'/detail/words',component:words},
	{ path:'/detail/health',component:health},
	{ path:'/detail/breakfast',component:breakfast},
	{ path:'/detail/sport',component:sport},
	{ path:'/detail/news',component:news},
	{ path:'/detail/sleep',component:sleep},
	{ path:'/detail/seuxg',component:seuxg},
	{ path:'/profile/team',component:team},
	{ path:'/profile/recordList',component:recordList}
]


const router = new VueRouter({
  	routes,
	mode:'history'
	
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
// 	  let token = localStorage.getItem('Authorization');
// 		if (token != null && token != ''){
// 			next('/home');
// 		}else{
//     next();
// 		}
//   } else {
//     let token = localStorage.getItem('Authorization');
 
//     if (token === null || token === '') {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });


export default router