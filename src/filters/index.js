import Vue from 'vue'
import moment from 'moment'
Vue.filter('dateTime' ,function(value,formatStr){
    return moment(value).format(formatStr || 'YYYY-MM-DD HH:mm:ss')
})