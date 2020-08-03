import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Index from '@/components/Index'
import Xiang from '@/components/Xiang'
import Fen from '@/components/Fenlei'
import One from '@/components/One'
import Two from '@/components/Two'
import Ai from '@/components/Ai'
import AXiang from '@/components/AiXiang'
import Gou from '@/components/Gouwuche'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
    	path: '/index',
      name: 'Index',
      component: Index
    },
    {
    	path: '/xiang',
      name: 'Xiang',
      component: Xiang
    },
    {
    	path: '/fenlei',
      name: 'Fen',
      component: Fen,
      children:[
          {
          		path: '/',
				      component:One,
          },
          {
          		path: '/fenlei/one',
				      component:One,
          },
           {
          		path: '/fenlei/two',
				      component:Two,
          },
      ]
    },
    {
    	path: '/ai',
      name: 'Ai',
      component: Ai
    },
     {
    	path: '/aixiang',
      name: 'AXiang',
      component: AXiang
    },
    {
    	path: '/gou',
      name: 'Gou',
      component: Gou
    },
  ]
})
