// Composables
import { createRouter, createWebHashHistory } from 'vue-router'
import Logistics from '../views/Logistics.vue'
import Content from '../views/Content.vue'
import Syllabus from '../views/Syllabus.vue'
import Policies from '../views/Policies.vue'
import OfficeHours from '../views/OfficeHours.vue'
import Staff from '../views/Staff.vue'

const routes = [
  {
    path: '/',
    component: Logistics
  },
  {
    path: '/logistics',
    component: Logistics
  },
  {
    path: '/content',
    component: Content,
  },
  {
    path: '/syllabus',
    component: Syllabus,
  },
  {
    path: '/policies',
    component: Policies,
  },
  {
    path: '/officehours',
    component: OfficeHours,
  }, {
    path: '/staff',
    component: Staff
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
