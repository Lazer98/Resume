import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueGoogleMaps from '@fawmi/vue-google-maps'
import store from '../src/store/index.js';


const app = createApp(App);
const vuetify = createVuetify({
  // your Vuetify options here
});

app.use(VueGoogleMaps, {
    load: {
        key: AIzaSyC1OE5TMy42rVj4wjOXbyQSYNz7i6Hhe4c,
        libraries: 'places',
    },
}),



app.use(vuetify);
app.use(router);
app.use(store);





app.mount('#app');
