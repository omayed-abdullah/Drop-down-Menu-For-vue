import { createApp } from 'vue'
import App from './App.vue'
import dropdown from './components/Dropdown.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"



const app = createApp(App);
app.component('drop-down', dropdown).mount('#app')
