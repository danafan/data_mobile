import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import './plugin.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'

Vue.use(ElementUI);

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')
