<template>
  <div
    :class="[
      'calendar-wrapper',
      {
        single: singleCalendar
      }
    ]"
    ref="containerRef"
    @keydown="onKeyDown"
  >
    <div
      :class="[
        'calendar-content',
        {
          isAnimating: translateAmount !== 0,
          single: singleCalendar
        }
      ]"
      :style="{ transform: `translateX(${translateAmount}px)` }"
    >
      <MonthCalendar
        v-for="(date, dateIndex) in monthArray"
        :key="dateIndex"
        :hidden="dateIndex === 0 && translateAmount <= 0"
        :isAnimating="dateIndex === 0 && translateAmount > 0"
        :month="dayjs(date).get('month')"
        :year="dayjs(date).get('year')"
        :onSelectDate="onSelectDate"
        :onHoverDate="onHoverDate"
        :fromDate="fromDate"
        :toDate="toDate"
        :hoverDate="hoverDate"
        :startWeekDay="startWeekDay"
        :minDate="minDate"
        :maxDate="maxDate"
        :weekDayFormat="weekDayFormat"
        :monthFormat="monthFormat"
        :isSingle="isSingle"
        :highlightToday="highlightToday"
        :singleCalendar="singleCalendar"
      />
    </div>
    <div class="calendar-flippers">
      <div
        :class="[
          'flipper-button',
          {
            disabled: disablePrev
          }
        ]"
        @click="decreaseCurrentMonth"
        @keydown="onBackButtonKeyDown"
        role="button"
        tabIndex="0"
      >
        <PrevIcon viewBox="0 0 24 24" />
      </div>
      <div
        :class="[
          'flipper-button',
          {
            disabled: disableNext
          }
        ]"
        @click="increaseCurrentMonth"
        @keydown="onNextButtonKeyDown"
        role="button"
        tabIndex="0"
        @blur="focusOnCalendar"
      >
        <NextIcon viewBox="0 0 24 24" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import dayjs from 'dayjs';
import MonthCalendar from './MonthCalendar.vue';
import PrevIcon from './icons/PrevIcon.vue';
import NextIcon from './icons/NextIcon.vue';

const DialogContentDesktop = defineComponent({
  components: { MonthCalendar, NextIcon, PrevIcon },
  props: {
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
    onSelectDate: {
      type: Function,
      default: () => {}
    },
    onHoverDate: {
      type: Function,
      default: () => {}
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
    isSingle: {
      type: Boolean,
      default: false
    },
    complsOpen: {
      type: Boolean,
      default: false
    },
    dateChanged: {
      type: Object as () => dayjs.Dayjs,
      default: null
    },
    highlightToday: {
      type: Boolean,
      default: false
    },
    singleCalendar: {
      type: Boolean,
      default: false
    },
    weekDayFormat: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const containerRef = ref();
    const translateAmount = ref(0);
    const monthArray = ref<unknown[]>([]);
    const focusDate = ref(dayjs().clone());
    const disablePrev = ref(false);
    const disableNext = ref(false);
    const wrapperWidth = ref(0);

    const setTranslateAmount = (val: number) => {
      translateAmount.value = val;
    };
    const setMonthArray = (val: unknown[]) => {
      monthArray.value = val;
    };
    const setFocusDate = (val: dayjs.Dayjs) => {
      focusDate.value = val;
    };
    const setDisablePrev = (val: boolean) => {
      disablePrev.value = val;
    };
    const setDisableNext = (val: boolean) => {
      disableNext.value = val;
    };
    const setWrapperWidth = (val: number) => {
      wrapperWidth.value = val;
    };

    const getArrayMonth = (date: dayjs.Dayjs, singleCalendar: boolean) => {
      const prevMonth = dayjs(date).subtract(1, 'month');
      const nextMonth = dayjs(date).add(1, 'month');
      const futureMonth = dayjs(date).add(2, 'month');

      if (singleCalendar) {
        return [prevMonth, focusDate.value, nextMonth];
      } else {
        return [prevMonth, focusDate.value, nextMonth, futureMonth];
      }
    };
    const containerRefWatchingFnc = () => {
      if (containerRef.value) {
        const style = window.getComputedStyle(containerRef.value);
        const _translateAmount = props.singleCalendar
          ? containerRef.value.offsetWidth + parseInt(style.marginLeft) - 8
          : containerRef.value.offsetWidth / 2;
        setWrapperWidth(_translateAmount);
      }
    };
    watch(containerRef, () => {
      containerRefWatchingFnc();
    });

    const complsOpenWatchingFnc = () => {
      setFocusDate(props.fromDate || dayjs());
    };
    watch(
      () => props.complsOpen,
      () => {
        complsOpenWatchingFnc();
      }
    );

    const focusDateWatchingFnc = () => {
      const { minDate, maxDate, singleCalendar } = props;
      if (minDate && focusDate.value.isBefore(dayjs(minDate).add(1, 'month'), 'month')) {
        setDisablePrev(true);
      } else {
        setDisablePrev(false);
      }

      if (maxDate && focusDate.value.isAfter(dayjs(maxDate).subtract(2, 'month'), 'month')) {
        setDisableNext(true);
      } else {
        setDisableNext(false);
      }

      const arrayMonth = getArrayMonth(focusDate.value, singleCalendar);
      setMonthArray(arrayMonth);
    };
    watch(focusDate, () => {
      focusDateWatchingFnc();
    });

    const increaseFocusDate = (date?: dayjs.Dayjs) => {
      if (dayjs.isDayjs(date)) {
        setFocusDate(date);
      } else {
        const nextDate = dayjs(focusDate.value).add(1, 'month');
        setFocusDate(nextDate);
      }
    };

    const decreaseFocusDate = (date?: dayjs.Dayjs) => {
      if (dayjs.isDayjs(date)) {
        setFocusDate(date);
      } else {
        const prevDate = dayjs(focusDate.value).subtract(1, 'month');
        setFocusDate(prevDate);
      }
    };

    const increaseCurrentMonth = (date?: dayjs.Dayjs) => {
      if (disableNext.value) return;

      setTranslateAmount(-wrapperWidth.value);
      setTimeout(() => {
        increaseFocusDate(date);
        setTranslateAmount(0);
      }, 200);
    };

    const decreaseCurrentMonth = (date?: dayjs.Dayjs) => {
      if (disablePrev.value) return;

      setTranslateAmount(wrapperWidth.value);
      setTimeout(() => {
        decreaseFocusDate(date);
        setTranslateAmount(0);
      }, 200);
    };

    const dateChangedWatchingFnc = () => {
      const { dateChanged } = props;
      if (dateChanged) {
        if (dayjs(dateChanged).isBefore(focusDate.value, 'month')) {
          decreaseCurrentMonth(dateChanged);
        }
        if (dayjs(dateChanged).isAfter(focusDate.value.add(1, 'month'), 'month')) {
          increaseCurrentMonth(dayjs(dateChanged).subtract(1, 'month'));
        }
      }
    };
    watch(
      () => props.dateChanged,
      (dateChanged) => {
        dateChangedWatchingFnc();
      }
    );

    const onBackButtonKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 32 || e.keyCode === 13) {
        e.preventDefault();
        decreaseCurrentMonth();

        return false;
      }
    };

    const onNextButtonKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 32 || e.keyCode === 13) {
        e.preventDefault();
        increaseCurrentMonth();

        return false;
      }
    };

    const focusOnCalendar = () => {
      if (containerRef.value) {
        let selectedButton = containerRef.value.querySelector('.day.selected');
        if (!selectedButton) {
          selectedButton = containerRef.value.querySelector('.month-calendar:not(.hidden) .day:not(.disabled)');
        }
        if (selectedButton) {
          selectedButton.focus();
        }
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const { maxDate, minDate } = props;
      const allowKeyCodes = [9, 32, 37, 38, 39, 40];
      const target = e.target as HTMLElement;
      if (allowKeyCodes.indexOf(e.keyCode) === -1 || !target.getAttribute('data-day-index')) {
        return true;
      }

      e.preventDefault();

      const calendarContainer = target.parentElement!.parentElement!.parentElement!.parentElement;
      const dayIndex = parseInt(target.getAttribute('data-day-index')!);
      const dateValue = target.getAttribute('data-date-value')!;
      const date = dayjs(dateValue);
      const lastDateOfMonth = date
        .add(1, 'month')
        .set('date', 0)
        .get('date');
      let nextDayIndex = -1;
      let increaseAmount = 0;

      switch (e.keyCode) {
        case 9: {
          const doneButton = calendarContainer!.parentElement!.parentElement!.parentElement!.querySelector('.submit-button') as HTMLElement;
          if (doneButton) {
            doneButton.focus();

            return true;
          }
          break;
        }
        case 32:
          target.click();
          break;
        case 37:
          increaseAmount = -1;
          break;
        case 38:
          increaseAmount = -7;
          break;
        case 39:
          increaseAmount = 1;
          break;
        case 40:
          increaseAmount = 7;
          break;
        default:
          break;
      }

      nextDayIndex = dayIndex + increaseAmount;
      if (nextDayIndex > 0 && nextDayIndex <= lastDateOfMonth) {
        const selector = `.day[data-day-index="${nextDayIndex}"]`;
        const dayElement = target?.parentElement?.parentElement?.querySelector(selector) as HTMLElement;
        if (dayElement) {
          dayElement.focus();
        }
      } else {
        const nextDate = date.add(increaseAmount, 'day');
        if (increaseAmount > 0 && Math.ceil(nextDate.diff(focusDate.value, 'month', true)) > 1) {
          if (maxDate && dayjs(nextDate).isAfter(maxDate, 'month')) return false;
          increaseCurrentMonth();
        } else if (increaseAmount < 0 && Math.ceil(focusDate.value.diff(nextDate, 'month', true)) > 0) {
          if (minDate && dayjs(nextDate).isBefore(minDate, 'month')) return false;
          decreaseCurrentMonth();
        }
        setTimeout(() => {
          const query = `.month-calendar[data-month-index="${nextDate.get('month') + 1}"] .day[data-day-index="${nextDate.get('date')}"]`;
          const dayElement = calendarContainer?.querySelector(query) as HTMLElement;
          if (dayElement) {
            dayElement.focus();
          }
        }, 200);
      }

      return false;
    };

    onMounted(() => {
      containerRefWatchingFnc();
      complsOpenWatchingFnc();
      focusDateWatchingFnc();
      dateChangedWatchingFnc();
    });

    return {
      getArrayMonth,
      increaseFocusDate,
      decreaseFocusDate,
      increaseCurrentMonth,
      decreaseCurrentMonth,
      onBackButtonKeyDown,
      onNextButtonKeyDown,
      focusOnCalendar,
      onKeyDown,
      monthArray,
      dayjs,
      translateAmount,
      focusDate,
      disablePrev,
      disableNext,
      wrapperWidth,
      containerRef
    };
  }
});
export default DialogContentDesktop;
</script>
