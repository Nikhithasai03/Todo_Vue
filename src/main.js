import { createApp } from 'vue'; // Import createApp from Vue 3

import App from './App.vue';
import store from './store';

const app = createApp(App); // Create a Vue 3 app instance

app.config.productionTip = false; // Set configuration options if needed

app.use(store); // Register the Vuex store

app.mount('#app'); // Mount the app to the element with id 'app'
