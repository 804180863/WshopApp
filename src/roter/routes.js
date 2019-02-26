/*
包含应用中所有路由的数组模块
 */
import MSite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'


export default [
  {
    path: '/msite',
    component: MSite,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      showFooter: false
    }
  },
  {
    path:'/shop',
    component:Shop,
    children:[
      {
        path:'/shop/goods',
        component:ShopGoods
      },
      {
        path:'/shop/shopinfo',
        component:ShopInfo
      },
      {
        path: '/shop/ratings',
        component: ShopRatings
      },
      {
        path: '',
        redirect: '/shop/goods'
      }
    ]
  },
  {
    path: '/',
    redirect: '/msite'
  }
]