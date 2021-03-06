import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
import router from '@/router/index'
import store from '@/store/index'
import App from './App.vue'

// import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(router)
app.use(store)
// app.use(ElementPlus)

app.mount('#app')
