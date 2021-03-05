<template>
  <div
    :class="[
      'week',
      {
        first: isFirst
      }
    ]"
  >
    <Day
      v-for="(day, index) in daysInfo"
      :key="index"
      :dateIndex="day.dateIndex"
      :dateValue="day.dateValue"
      :hoverDate="hoverDate"
      :onSelectDate="onSelectDate"
      :onHoverDate="onHoverDate"
      :selected="day.selected"
      :hovered="day.hovered"
      :highlight="day.highlight"
      :disabled="day.disabled"
      :isEndDay="day.isEndDate"
      :totalDay="totalDay"
      :weekDayIndex="day.index"
      :weekIndex="weekIndex"
    />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, watch } from 'vue';
import dayjs from 'dayjs';
import Day from './Day.vue';

const Week = defineComponent({
  components: { Day },
  props: {
    isFirst: {
      type: Boolean,
      default: false
    },
    week: {
      type: Object,
      default: () => {}
    },
    month: {
      type: Number,
      default: null
    },
    year: {
      type: Number,
      default: null
    },
    fromDate: {
      type: Object as () => dayjs.Dayjs,
      default: null
    },
    toDate: {
      type: Object as () => dayjs.Dayjs,
      default: null
    },
    hoverDate: {
      type: Object as () => dayjs.Dayjs,
      default: null
    },
    totalDay: {
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
    minDate: {
      type: Object as () => Date,
      default: null
    },
    maxDate: {
      type: Object as () => Date,
      default: null
    },
    isSingle: {
      type: Boolean,
      default: false
    },
    weekIndex: {
      type: Number,
      default: null
    },
    highlightToday: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const daysInfo = computed(() => {
      const { week, minDate, year, month, maxDate, toDate, fromDate, highlightToday, isSingle, hoverDate } = props;
      return [...Array(week.days).keys()].map((index) => {
        const dateIndex = index + week.start;
        const dateValue = dayjs(`${year}-${month + 1}-${dateIndex}`);
        const disabled = (minDate && dateValue.isBefore(minDate, 'date')) || (maxDate && dateValue.isAfter(maxDate, 'date'));
        const selected = dateValue.isSame(fromDate, 'date') || dateValue.isSame(toDate, 'date');
        let hovered = false;
        const highlight = highlightToday && dateValue.isSame(new Date(), 'date');

        if (fromDate && !fromDate.isSame(toDate, 'date') && !isSingle) {
          if (toDate && !fromDate.isAfter(dateValue, 'date') && !toDate.isBefore(dateValue, 'date')) {
            hovered = true;
          }
          if (
            !toDate &&
            !dateValue.isBefore(fromDate, 'date') &&
            !(hoverDate && hoverDate.isBefore(dateValue, 'date')) &&
            fromDate.isBefore(hoverDate, 'date')
          ) {
            hovered = true;
          }
        }

        let isEndDate = false;
        if (dateValue.isSame(toDate, 'date') || (!toDate && dateValue.isSame(hoverDate, 'date'))) {
          isEndDate = true;
        }
        return {
          index,
          dateIndex,
          dateValue,
          selected,
          hovered,
          highlight,
          disabled,
          isEndDate
        };
      });
    });

    return { daysInfo };
  }
});
export default Week;
</script>
