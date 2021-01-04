import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import { installAllElementPlus, installElementPlus } from './plugins/element'
import { installAllElementPlus } from './plugins/element'

const app = createApp(App)

// installElementPlus(app) // 按需引入
installAllElementPlus(app) // 全局引入

app
  .use(store)
  .use(router)
  .mount('#app')
