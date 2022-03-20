import { createRouter, createWebHistory } from 'vue-router'
import Cabinet from '../views/Cabinet.vue'
import CabinetById from '../views/CabinetById.vue'
import CabinetEdit from '../views/CabinetEdit.vue'


const routes = [
  {
    path: '/',
    name: 'Cabinet',
    component: Cabinet,
  },
  {
    path: '/CabinetById/:id',
    name: 'CabinetById',
    component: CabinetById,
  },
  {
    path: '/CabinetEdit/:id',
    name: 'CabinetEdit',
    component: CabinetEdit,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
