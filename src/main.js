import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import VueClipboard from 'vue3-clipboard'

createApp(App)
    .use(VueClipboard,{ autoSetContainer: true, appendToBody: true })
    .mount('#app')

