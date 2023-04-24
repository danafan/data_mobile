import Vue from 'vue'
import Router from 'vue-router'

const index = resolve=>System.import('@/pages/index')
const performance_analysis = resolve=>System.import('@/pages/PerformanceAnalysis/index')
const performance_detail= resolve=>System.import('@/pages/PerformanceAnalysis/detail')

Vue.use(Router);

const router = new Router({
	routes: [
	{
		path: '/index',
		name:"店铺业绩",
		component: index
	},{
		path: '/performance_analysis',
		name:"业绩分析",
		component: performance_analysis,
		meta:{
			keepAlive:true
		}
	},{
		path: '/performance_detail',
		name:"详情",
		component: performance_detail
	}
	]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

export default router;
