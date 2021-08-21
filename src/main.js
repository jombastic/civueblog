import Vue from 'vue';
import App from './App.vue';
import router from './routes.js';
import { store } from './store/store.js'
import { guest } from './plugins/axios.js';

Vue.config.productionTip = false

new Vue({
	store,
	router,
	guest,
	render: h => h(App),
}).$mount('#app')
