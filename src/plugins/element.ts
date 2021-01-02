/**
 * 按需加载 element-ui 组件
 * @description
 * [参考官网 - 按需加载](https://element.eleme.cn/#/zh-CN/component/quickstart#an-xu-yin-ru)
 */
// import Vue from "vue"

// // 方式一：按需加载
// import {
//   Button,
//   Loading,
//   Message,
//   Dialog,
//   Upload,
//   Input,
//   Autocomplete,
//   Tooltip,
//   Select,
//   Option,
//   Form,
//   FormItem,
//   Card,
//   Cascader,
//   Table,
//   TableColumn,
//   Tree,
//   TimePicker
// } from 'element-ui'

// Vue.use(Button)
// Vue.use(Dialog)
// Vue.use(Upload)
// Vue.use(Input)
// Vue.use(Autocomplete)
// Vue.use(Tooltip)
// Vue.use(Select)
// Vue.use(Option)
// Vue.use(Form)
// Vue.use(FormItem)
// Vue.use(Card)
// Vue.use(Cascader)
// Vue.use(Table)
// Vue.use(TableColumn)
// Vue.use(Tree)
// Vue.use(TimePicker)

// Vue.prototype.$loading = Loading.service
// Vue.prototype.$message = Message

// 方式二：完整加载方式
// import ElementUI from "element-ui"
// import "element-ui/lib/theme-chalk/index.css"

// Vue.use(ElementUI)

// const oldArrayFunc = Array.prototype
// const proto = Object.create(oldArrayFunc)

// const arrFunc = ['push', 'unshift', 'pop']

// arrFunc.forEach(method => {
//   proto[method] = (method) => {
//     updated() // 更新视图
//     oldArrayFunc[method]
//   }
// })
