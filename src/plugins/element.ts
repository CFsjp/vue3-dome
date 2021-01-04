// 方式一：全局引入
import ElementPlus from 'element-plus'
import '../style/element-variables.scss'
import locale from 'element-plus/lib/locale/lang/zh-cn'

export const installAllElementPlus = (app: any) => {
  app.use(ElementPlus, { locale })
}

// 方式二：按需引入
