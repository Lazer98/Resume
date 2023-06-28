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
        key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
        libraries: 'places',
    },
}),



app.use(vuetify);
app.use(router);
app.use(store);





app.mount('#app');
