import Vue from 'vue'
import App from './App'
import LXToast from './plugin/common/LXToast/index.js'
Vue.config.productionTip = false
Vue.use(LXToast)
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
