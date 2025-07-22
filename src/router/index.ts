import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResidencialView from '../views/ResidencialView.vue'
import GamerView from '../views/GamerView.vue'
import TelevisionView from '../views/TelevisionView.vue'
import NegociosView from '../views/NegociosView.vue'
import PymesView from '../views/PymesView.vue'
import EmpresarialView from '../views/EmpresarialView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomeView,
    meta: { title: 'INBTEL | Inicio' },
  },
  {
    path: '/residencial',
    component: ResidencialView,
    meta: { title: 'Internet Residencial | INBTEL' },
  },
  {
    path: '/gamer',
    component: GamerView,
    meta: { title: 'Internet para Gamers | INBTEL' },
  },  
  {
    path: '/television',
    component: TelevisionView,
    meta: { title: 'Televisión | INBTEL' },
  },
  {
    path: '/negocios',
    component: NegociosView,
    meta: {title: 'Internet para Negocios | INBTEL'}
  }, 
  {
    path: '/pymes',
    component: PymesView,
    meta: {title: 'Internet para Pymes | INBTEL'}
  },  
  {
    path: '/empresarial',
    component: EmpresarialView,
    meta: {title: 'Internet para Pymes | INBTEL'}
  },   
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, _savedPosition) {
    return { top: 0 } // Siempre hace scroll al inicio
  }
})


router.afterEach((to) => {
  document.title = (to.meta.title as string) || 'INBTEL';
});

export default router