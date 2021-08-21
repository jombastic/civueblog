import Vue from 'vue';
import axios from 'axios';
import { store } from '../store/store.js';

const guest = axios.create({
	baseURL: 'http://codeigniter-4-restapi-tutorial/user',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'X-Requested-With': 'XMLHttpRequest',
	},
});

const api = axios.create({
	baseURL: 'http://codeigniter-4-restapi-tutorial',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'X-Requested-With': 'XMLHttpRequest',
	},
});

api.interceptors.request.use(config => {
	const token = localStorage.getItem('token')
	if(token) 
		config.headers['Authorization'] = 'Bearer ' + token

	return config;
});

api.interceptors.response.use(response => response, error => {
	if (error.response.status == 401)
		store.dispatch('logout')
	else
		return Promise.reject(error);
})

Vue.prototype.$guest = guest;
Vue.prototype.$api = api;

export { guest, api };