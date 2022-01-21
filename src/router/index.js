import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import WeatherPage from '../views/WeatherPage'
import CurratePage from "../views/CurrencyPage";

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/weather',
    name: 'WeatherPage',
    component: WeatherPage
  },
  {
    path: '/currency',
    name: 'CurratePage',
    component: CurratePage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
