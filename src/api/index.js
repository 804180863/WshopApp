/*
包含n个接口请求函数的对象模块
函数返回promise对象
 */
import ajax from './ajax'

const BASE = '/api'

//根据经纬度获取位置详情
export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`)

//获取食品分类列表
export const reqCategorys = () => ajax(BASE + '/index_category')

//根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)
export const reqShops = ({longitude, latitude}) => ajax(BASE + '/shops', {latitude, longitude})