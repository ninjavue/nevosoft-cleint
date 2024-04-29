import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTheMask from 'vue-the-mask'
import { createVuestic, createIconsConfig } from "vuestic-ui"
import i18n from './i18n'
import "vuestic-ui/css"
import './index.css'
import "material-design-icons-iconfont/dist/material-design-icons.min.css";




createApp(App).use(store).use(router).use(createVuestic()).use(createIconsConfig).use(i18n).use(VueTheMask).mount('#ns');
