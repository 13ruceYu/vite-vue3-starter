import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import Home from '@/views/Home.vue'
import Vuex from '@/views/Vuex.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
