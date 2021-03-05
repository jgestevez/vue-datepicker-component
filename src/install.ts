import { App as Application, Plugin } from 'vue';
import RangeDatePicker from './components/range-date-picker/RangeDatePicker.vue';
import SingleDatePicker from './components/single-date-picker/SingleDatePicker.vue';
import './scss/style.scss';

interface Options {}
const VueGoogleFlightDatePicker = {
  install: (app: Application, options: Options) => {
    app.component('RangeDatePicker', RangeDatePicker);
    app.component('SingleDatePicker', SingleDatePicker);
  }
};

export default VueGoogleFlightDatePicker;
