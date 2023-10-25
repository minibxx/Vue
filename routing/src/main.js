import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

const app = createApp(App);
app.use( router ); //router를 먼저 실행시켜야 새로고침 시 스타일 깨짐 없음
app.mount('#app');

