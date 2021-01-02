/**
 * vue自定义指令文件
 */

import Vue from 'vue'
import inputFilter from './inputFilter.js'

Vue.directive('inputFilter', inputFilter)

Vue.directive('blue', {
  bind(el) {
    el.style.backgroundColor = '#409EFF'
  }
})
