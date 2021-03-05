import { createApp } from 'vue';
import App from './App.vue';
import VueGoogleFlightDatePicker from './install';
// import VueGoogleFlightDatePicker from 'vue-google-flight-datepicker';
// import 'vue-google-flight-datepicker/vue-google-flight-datepicker.css';

const app = createApp(App);
app.use(VueGoogleFlightDatePicker);
app.mount('#app');
