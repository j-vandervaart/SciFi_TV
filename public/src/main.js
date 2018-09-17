import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Shows from './shows.vue'
import Show from './show.vue'
import Episode from './episode.vue'
import About from './about.vue'
import Featured from './featured.vue'
import Story from './story.vue'

Vue.use(VueRouter);

const routesGroup = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path:'/home',
		component: Shows
	},
	{
		path:'/featured',
		component: Featured
	},
	{
		path: '/featured/:id',
		component: Story
	},
	{
		path:'/about',
		component: About
	},
	{
		path: '/shows/:id',
		component: Show
	},
	{
		path: '/eps/:id',
		component: Episode
	}
];

const scifi_router = new VueRouter({
	routes: routesGroup
});

new Vue({
  el: '#app',
  router: scifi_router,
  render: h => h(App)
})
