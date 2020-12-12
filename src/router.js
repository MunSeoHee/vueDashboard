import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import DashboardLayout from './components/DashboardLayout.vue'
import NotFound from './views/NotFound.vue'

import Dashboard from './views/Dashboard.vue'
import PersonalInfo from './views/PersonalInfo.vue'
import HealthInfo from './views/HealthInfo.vue'
import Prediction from './views/Prediction.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardLayout,
      redirect : "/maindashboard",
      children:[
        {
          path: "/maindashboard",
          name: "maindashboard",
          component: Dashboard
        },
        {
          path: "/info",
          name: "info",
          component: PersonalInfo
        },
        {
          path: "/healthinfo",
          name: "healthinfo",
          component: HealthInfo
        },
        // {
        //   path: "/prediction",
        //   name: "prediction",
        //   component: Prediction
        // }
      ]
    },
    {
      path: "*", component: NotFound
    }
  ]
})
