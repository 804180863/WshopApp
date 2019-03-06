
import Vue from 'vue'
import {
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    RECEIVE_GOODS,
    REDUCE_FOOD_COUNT,
    ADD_FOOD_COUNT,
    CLEAR_CART
  } from '../mutation-types'
  
  import {
    reqInfo,
    reqRatings,
    reqGoods
  } from '../../api'
  
  /*
  包含n个状态数据的对象
   */
  const state = {
    goods: [], // 商品列表
    ratings: [], // 商家评价列表
    info: {}, // 商家信息
    cartFoods:[],//购物车food数组
    
  }
  
  const mutations = {
    [RECEIVE_INFO](state, {info}) {
      state.info = info
    },
  
    [RECEIVE_RATINGS](state, {ratings}) {
      state.ratings = ratings
    },
  
    [RECEIVE_GOODS](state, {goods}) {
      state.goods = goods
    },
    [ADD_FOOD_COUNT](state, {food}) {
      if(food.count) {
        food.count++
      } else { 
        Vue.set(food, 'count', 1)
        //将food添加到购物车中（cartfoods）
        state.cartFoods.push(food)
      }
    },
    [REDUCE_FOOD_COUNT](state, {food}) {
      if(food.count>0) {
        food.count--
        //当food减少为0时将其从购物车中移除
        if(food.count===0){
          const index =state.cartFoods.indexOf(food)
          state.cartFoods.splice(index,1)
        }
        
      }
    },
    [CLEAR_CART](state){
      state.cartFoods.forEach(food => food.count =0)
      state.cartFoods =[]
    }
  }
  
  const actions = {
    // 异步获取商家信息
    async getShopInfo ({commit}) {
      const result = await reqInfo()
      if(result.code===0) {
        const info = result.data
        commit(RECEIVE_INFO, {info})
      }
    },
  
  
    // 异步获取商家评价列表
    async getShopRatings({commit},callback) {
      const result = await reqRatings()
      if(result.code===0) {
        const ratings = result.data
        commit(RECEIVE_RATINGS, {ratings})
        typeof callback==='function' && callback()
      }
    },
  
    // 异步获取商家商品列表
    async getShopGoods({commit}, callback) {
      const result = await reqGoods()
      if(result.code===0) {
        const goods = result.data
        commit(RECEIVE_GOODS, {goods})
        // 更新状态后立即调用回调函数
        typeof callback==='function' && callback()
      }
    },
    // 更新指定food的数量
    updateFoodCount ({commit}, {isAdd, food}) {
      if(isAdd) {
        commit(ADD_FOOD_COUNT, {food})
      } else {
        commit(REDUCE_FOOD_COUNT, {food})
      }
    },
    clearCart({commit}){
      commit(CLEAR_CART)
    }

  }
  
  const getters = {
    totalCount(state){
      return state.cartFoods.reduce((preTotal,item)=> preTotal + item.count,0)
    },
    //总价格
    totalPrice(state){
      return state.cartFoods.reduce((preTotal,item)=> preTotal + item.count*item.price,0)
    },
   // 评价总数量
  totalRatingCount (state) {
    return state.ratings.length
  },

  // 推荐的评价总数量
  totalUpRatingCount (state) {
    return state.ratings.reduce((pre, rating) => pre + (rating.rateType===0 ? 1 : 0), 0)
  }
  }
  
  export default {
    state,
    mutations,
    actions,
    getters,
  }