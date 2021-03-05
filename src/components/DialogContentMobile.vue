<template>
  <div style="height: 100%">
    <div class="calendar-wrapper">
      <div class="calendar-content">
        <div class="weekdays mobile">
          <div v-for="(day, index) in arrWeekDay" class="weekday" :key="index">{{ day }}</div>
        </div>
        <RecycleScroller ref="listRef" class="scroller" :items="row" key-field="index">
          <template v-slot="{ item }">
            <div>
              <MonthCalendar
                :month="item.month"
                :year="item.year"
                :onSelectDate="onSelectDate"
                :fromDate="fromDate"
                :toDate="toDate"
                :hoverDate="hoverDate"
                :startWeekDay="startWeekDay"
                :minDate="minDate"
                :maxDate="maxDate"
                :monthFormat="monthFormat"
                :isSingle="isSingle"
                :highlightToday="highlightToday"
                :key="item.index"
              />
            </div>
          </template>
        </RecycleScroller>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { getMonthInfo, getWeekDay } from '@/helpers';
import dayjs from 'dayjs';
import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import { RecycleScroller } from 'vue3-virtual-scroller';
import 'vue3-virtual-scroller/dist/vue3-virtual-scroller.css';
import MonthCalendar from './MonthCalendar.vue';

const DialogContentMobile = defineComponent({
  // eslint-disable-next-line vue/no-unused-components
  components: { RecycleScroller, MonthCalendar },
  props: {
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
    onSelectDate: {
      type: Function,
      default: () => {}
    },
    // onHoverDate: {
    //   type: Function,
    //   default: () => {}
    // },
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
    isSingle: {
      type: Boolean,
      default: false
    },
    complsOpen: {
      type: Boolean,
      default: false
    },
    // dateChanged: {
    //   type: Object as () => dayjs.Dayjs,
    //   default: null
    // },
    highlightToday: {
      type: Boolean,
      default: false
    },
    // singleCalendar: {
    //   type: Boolean,
    //   default: false
    // },
    weekDayFormat: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  computed: {
    list() {
      const data = [] as any;
      for (let i = 0; i < 100; i++) {
        data.push({
          id: i + 1,
          text: 'text' + i
        });
      }
      return data;
    }
  },
  setup(props) {
    const rowCount = ref(2400);
    const setRowCount = (val: number) => {
      rowCount.value = val;
    };
    const minYear = computed(() => (props.minDate ? dayjs(props.minDate).year() : 1900));
    const minMonth = computed(() => (props.minDate ? dayjs(props.minDate).month() : 0));
    const listRef = ref();
    const arrWeekDay = computed(() => getWeekDay(props.startWeekDay, props.weekDayFormat));

    const complsOpenWatchingFnc = () => {
      const { fromDate, complsOpen, minDate } = props;
      if (listRef.value && complsOpen) {
        const date = fromDate ? dayjs(fromDate) : dayjs();
        let monthDiff = date.diff(dayjs('1900-01-01'), 'month');

        if (minDate) {
          monthDiff = date.diff(dayjs(minDate), 'month');
        }
        // listRef.value.scrollToItem(monthDiff + 1, 'smart')
        listRef.value.scrollToItem(monthDiff, 'smart');
      }
    };

    watch(
      () => props.complsOpen,
      () => {
        complsOpenWatchingFnc();
      }
    );

    onMounted(() => {
      const { maxDate, minDate } = props;
      if (maxDate) {
        const _minDate = minDate ? dayjs(minDate) : dayjs('1900-01-01');
        setRowCount(dayjs(maxDate).diff(_minDate, 'month') + 1);
      }
      complsOpenWatchingFnc();
    });

    const getMonthYearFromIndex = (index: number) => {
      const _index = index + minMonth.value;
      const year = minYear.value + Math.floor(_index / 12);
      const month = _index % 12;

      return { year, month };
    };

    function getItemSize(index: number) {
      const { year, month } = getMonthYearFromIndex(index);
      const { totalWeek } = getMonthInfo(year, month, 'monday');

      return totalWeek.length * 48 + 34;
    }

    const row = computed(() => {
      const data = [];
      for (let index = 0; index < rowCount.value; index++) {
        const { year, month } = getMonthYearFromIndex(index);
        const size = getItemSize(index);
        data.push({ year, month, index, size });
      }
      return data;
    });

    return {
      minYear,
      rowCount,
      minMonth,
      listRef,
      getMonthYearFromIndex,
      // getWeekDay,
      arrWeekDay,
      getItemSize,
      row
    };
  }
});
export default DialogContentMobile;
</script>
<style>
.scroller {
  height: 100%;
}
</style>
