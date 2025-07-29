import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResidencialView from '../views/ResidencialView.vue'
import GamerView from '../views/GamerView.vue'
import TelevisionView from '../views/TelevisionView.vue'
import NegociosView from '../views/NegociosView.vue'
import PymesView from '../views/PymesView.vue'
import EmpresarialView from '../views/EmpresarialView.vue'
import DistribuidorView from '../views/DistribuidorView.vue'
import VendedorView from '../views/VendedorView.vue'
import ContactoView from '../views/ContactoView.vue'
import PdfViewer from '../components/PdfViewer.vue'
import AvisoPrivacidadView from '../views/AvisoPrivacidadView.vue'
import TerminosCondicionesView from '../views/TerminosCondicionesView.vue'

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
    meta: {title: 'Internet Empresarial | INBTEL'}
  },
  {
    path: '/distribuidor-autorizado',
    component: DistribuidorView,
    meta: {title: 'Distribuidor Autorizado | INBTEL'}
  },
  {
    path: '/vendedor-comisionista',
    component: VendedorView,
    meta: {title: 'Vendedor Comisionista | INBTEL'}
  },  
  {
    path: '/contacto',
    component: ContactoView,
    meta: {title: 'Contacto | INBTEL'}
  },
  {
    path: '/aviso-de-privacidad',
    component: AvisoPrivacidadView,
    meta: {title: 'Aviso de Privacidad | INBTEL'}
  },
  {
    path: '/terminos-y-condiciones',
    component: TerminosCondicionesView,
    meta: {title: 'Términos y Condiciones | INBTEL'}
  },
    // Rutas para PDFs (con iframe nativo)
  {
    path: '/codigo-gestion-trafico',
    component: PdfViewer,
    meta: {
      title: 'Código de Política de Gestión de Tráfico | INBTEL',
      pdfFile: 'Gestion_de_Trafico.pdf',
    },
  },
  {
    path: '/lineamientos-de-informacion',
    component: PdfViewer,
    meta: {
      title: 'Lineamientos de información | INBTEL',
      pdfFile: 'Lineamientos.pdf',
    },
  },
  {
    path: '/contrato-dobleplay',
    component: PdfViewer,
    meta: {
      title: 'Contrato PROFECO DoblePlay | INBTEL',
      pdfFile: '20240416-INBTEL-registro-contrato-de-adhesion-doble-play.pdf',
    },
  },
  {
    path: '/contrato-tripleplay',
    component: PdfViewer,
    meta: {
      title: 'Contrato PROFECO TriplePlay | INBTEL',
      pdfFile: '20240227-INBTEL-registro-contrato-de-adhesion-triple-play.pdf',
    },
  },
  {
    path: '/derechos-usuarios',
    component: PdfViewer,
    meta: {
      title: 'Derechos de los usuarios | INBTEL',
      pdfFile: 'derechos.pdf',
    },
  },
  {
    path: '/cod-practicas-comerciales',
    component: PdfViewer,
    meta: {
      title: 'Código de Prácticas Comerciales | INBTEL',
      pdfFile: 'practicas_2021.pdf',
    },
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