<template>
  <div
    :class="[
      'month-calendar',
      {
        isAnimating,
        hidden,
        single: singleCalendar
      }
    ]"
    :data-month-index="month + 1"
  >
    <div class="month-name">
      {{ monthFormat ? dayjs(`${year}-${month + 1}-1`).format(monthFormat) : dayjs(`${year}-${month + 1}-1`).format('MMMM - YYYY') }}
    </div>
    <div class="weekdays">
      <div v-for="(day, index) in arrWeekDay" class="weekday" :key="index">
        {{ day }}
      </div>
    </div>
    <div class="week-container">
      <Week
        v-for="(week, index) in monthInfo.totalWeek"
        :key="index"
        :week="week"
        :month="month"
        :year="year"
        :isFirst="index === 0"
        :onSelectDate="onSelectDate"
        :onHoverDate="onHoverDate"
        :fromDate="fromDate"
        :toDate="toDate"
        :hoverDate="hoverDate"
        :totalDay="monthInfo.totalDay"
        :minDate="minDate"
        :maxDate="maxDate"
        :isSingle="isSingle"
        :weekIndex="index"
        :highlightToday="highlightToday"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { getMonthInfo, getWeekDay } from '../helpers';
import { computed, defineComponent } from 'vue';
import dayjs from 'dayjs';
import Week from './Week.vue';

const MonthCalendar = defineComponent({
  components: { Week },
  props: {
    month: {
      type: Number,
      default: null
    },
    year: {
      type: Number,
      default: null
    },
    onSelectDate: {
      type: Function,
      default: () => {}
    },
    onHoverDate: {
      type: Function,
      default: () => {}
    },
    fromDate: {
      type: Object as () => Date,
      default: null
    },
    toDate: {
      type: Object as () => Date,
      default: null
    },
    hoverDate: {
      type: Object as () => Date,
      default: null
    },
    hidden: {
      type: Boolean,
      default: false
    },
    isAnimating: {
      type: Boolean,
      default: false
    },
    startWeekDay: {
      type: String,
      default: null
    },
    minDate: {
      type: Object as () => Date,
      default: null
    },
    maxDate: {
      type: Object as () => Date,
      default: null
    },
    monthFormat: {
      type: String,
      default: ''
    },
    weekDayFormat: {
      type: String,
      default: ''
    },
    isSingle: {
      type: Boolean,
      default: false
    },
    highlightToday: {
      type: Boolean,
      default: false
    },
    singleCalendar: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const arrWeekDay = computed(() => getWeekDay(props.startWeekDay, props.weekDayFormat));
    const monthInfo = computed(() => getMonthInfo(props.year, props.month, props.startWeekDay) || {});

    return { arrWeekDay, monthInfo, dayjs };
  }
});
export default MonthCalendar;
</script>
