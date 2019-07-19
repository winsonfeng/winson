import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'
import {Header} from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios)
//全局配置axios路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/';
Vue.component(Header.name, Header);



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
