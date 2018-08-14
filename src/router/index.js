import Vue from 'vue'
import Router from 'vue-router'
import Tagihin from '@/components/Tagihin'
import Paid from '@/components/Paid'
import Overdue from '@/components/Overdue'
import Open from '@/components/Open'
import History from '@/components/History'
import TabSample from '@/components/TabSample'
import Backend from '@/components/Backend'
import Scroll from '@/components/Scroll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tagihin',
      component: Tagihin
    },
    {
      path: '/paid',
      name: 'Paid',
      component: Paid
    },
    {
      path: '/overdue',
      name: 'Overdue',
      component: Overdue
    },
    {
      path: '/open',
      name: 'Open',
      component: Open
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path : '/tab',
      name : 'TabSample',
      component : TabSample
    },
    {
      path: '/backend',
      name: 'Backend',
      component: Backend
    },
    {
      path: '/scroll',
      name: 'Scroll',
      component: Scroll
    },


  ]
})
