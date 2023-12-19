import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import IniciView from '../views/IniciView.vue'
import AboutView from '../views/AboutView.vue'
import Contables from '../views/contables.vue'
import Laboral from '../views/laboral.vue'
import crea from '../views/crea.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Inici',
    component: IniciView
  },
  {
    path: '/Contacte',
    name: 'Contacte',
    component: AboutView
  },
  {
    path: '/contables',
    name: 'Contables',
    component: Contables,
  },
  {
    path: '/laboral',
    name: 'Laboral',
    component: Laboral,
  },
  {
    path: '/crea',
    name: 'crea',
    component: crea,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
