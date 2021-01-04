/**
 * input输入限制文件
 */
import { debounce } from './public'
import { Message } from 'element-plus'

const addListener = function(el, type, fn) {
  el.addEventListener(type, fn, false)
}

// 限制只能输入整数和小数（适用于价格类、最多两位小数）
const priceFilter = function(el) {
  addListener(
    el,
    'keyup',
    debounce(() => {
      // 添加防抖 方便添加小数点
      el.value = el.value.match(/^\d*(\.?\d{0,2})/g)[0] || null
      if (isNaN(el.value)) {
        el.value = ''
      }
      // 格式化去掉却没有输入小数位的小数点
      el.value = +el.value
      // 触发input事件
      el.dispatchEvent(new Event('input'))
    })
  )
}

// 限制只能输入字母数字（适用于运单号）
const integerLetterFilter = function(el) {
  addListener(el, 'keyup', () => {
    el.value = el.value.replace(/[\W]/g, '')
    el.dispatchEvent(new Event('input'))
  })
}

// 限制只能输入正数、负数和两位小数
const numFilter = el => {
  addListener(
    el,
    'keyup',
    debounce(() => {
      // 添加防抖 方便添加小数点
      el.value = el.value.match(/^[-]?\d*(\.?\d{0,2})/g)[0] || null
      if (isNaN(el.value)) {
        el.value = ''
      }
      // // 格式化去掉却没有输入小数位的小数点
      el.value = +el.value
      // 触发input事件
      el.dispatchEvent(new Event('input'))
    })
  )
}

const rulesMap = new Map([
  ['price', priceFilter],
  ['integerLetter', integerLetterFilter],
  ['number', numFilter],
  ['default', () => Message.warning('未知指令类型')]
])

export default {
  bind(el, binding) {
    // 使用slot可能造成el不是input，所以得判断后重新选中
    if (el.tagName.toLowerCase() !== 'input') {
      el = el.getElementsByTagName('input')[0]
    }
    return (rulesMap.get(binding.arg) || rulesMap.get('default'))(el)
  }
}
