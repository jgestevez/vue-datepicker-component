<template>
  <div
    :class="[
      'dialog-date-picker',
      {
        open: complsOpen,
        hide: !complsOpen && hideAnimation,
        single: singleCalendar && !isMobile
      }
    ]"
    ref="containerRef"
  >
    <div v-if="!hideDialogHeader" class="dialog-header">
      <button type="button" class="btn-outline back-button" @click="toggleDialog">
        <BackIcon viewBox="0 0 492 492" />
      </button>
      <DateInputGroup
        :inputFocus="inputFocus"
        :handleClickDateInput="handleClickDateInput"
        :fromDate="fromDate"
        :toDate="toDate"
        :minDate="minDate"
        :maxDate="maxDate"
        :handleChangeDate="onChangeDate"
        :startDatePlaceholder="startDatePlaceholder"
        :endDatePlaceholder="endDatePlaceholder"
        :dateFormat="dateFormat"
        :isSingle="isSingle"
        :nonFocusable="!complsOpen"
        :dateInputSeperator="dateInputSeperator"
      />
      <button type="button" class="btn-outline reset-button" @click="handleReset">
        Reset
      </button>
    </div>

    <div class="dialog-content">
      <DialogContentMobile
        v-if="isMobile"
        :fromDate="fromDate"
        :toDate="toDate"
        :hoverDate="hoverDate"
        :onSelectDate="onSelectDate"
        :startWeekDay="startWeekDay"
        :minDate="minDate"
        :maxDate="maxDate"
        :dateFormat="dateFormat"
        :weekDayFormat="weekDayFormat"
        :monthFormat="monthFormat"
        :complsOpen="complsOpen"
        :isSingle="isSingle"
        :highlightToday="highlightToday"
      />

      <DialogContentDesktop
        v-else
        :fromDate="fromDate"
        :toDate="toDate"
        :hoverDate="hoverDate"
        :onSelectDate="onSelectDate"
        :onHoverDate="onHoverDate"
        :startWeekDay="startWeekDay"
        :minDate="minDate"
        :maxDate="maxDate"
        :dateFormat="dateFormat"
        :weekDayFormat="weekDayFormat"
        :monthFormat="monthFormat"
        :isSingle="isSingle"
        :complsOpen="complsOpen"
        :dateChanged="dateChanged"
        :highlightToday="highlightToday"
        :singleCalendar="singleCalendar"
      />
    </div>

    <div v-if="!hideDialogFooter" class="dialog-footer">
      <button type="button" class="submit-button" @click="toggleDialog" tabIndex="0">
        Done
      </button>
      <button type="button" class="btn-outline reset-button mobile" @click="handleReset">
        Reset
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import BackIcon from './icons/BackIcon.vue';
import DateInputGroup from './DateInputGroup.vue';
import DialogContentDesktop from './DialogContentDesktop.vue';
import DialogContentMobile from './DialogContentMobile.vue';
import dayjs from 'dayjs';

const Dialog = defineComponent({
  components: { DateInputGroup, DialogContentMobile, DialogContentDesktop, BackIcon },
  props: {
    complsOpen: {
      type: Boolean,
      default: false
    },
    inputFocus: {
      type: String,
      default: null
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
    toggleDialog: {
      type: Function,
      default: () => {}
    },
    handleClickDateInput: {
      type: Function,
      default: () => {}
    },
    onSelectDate: {
      type: Function,
      default: () => {}
    },
    onHoverDate: {
      type: Function,
      default: () => {}
    },
    handleReset: {
      type: Function,
      default: () => {}
    },
    handleChangeDate: {
      type: Function,
      default: () => {}
    },
    startDatePlaceholder: {
      type: String,
      default: null
    },
    endDatePlaceholder: {
      type: String,
      default: null
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
    dateFormat: {
      type: String,
      default: ''
    },
    monthFormat: {
      type: String,
      default: ''
    },
    isSingle: {
      type: Boolean,
      default: false
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    highlightToday: {
      type: Boolean,
      default: false
    },
    weekDayFormat: {
      type: String,
      default: ''
    },
    hideDialogHeader: {
      type: Boolean,
      default: false
    },
    hideDialogFooter: {
      type: Boolean,
      default: false
    },
    dateInputSeperator: {
      type: Object as () => HTMLElement,
      default: null
    },
    singleCalendar: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const hideAnimation = ref(false);
    const dateChanged = ref();
    const containerRef = ref();

    const setHideAnimation = (val: boolean) => {
      hideAnimation.value = val;
    };
    const setDateChanged = (val: dayjs.Dayjs) => {
      dateChanged.value = val;
    };

    const onChangeDate = (date: dayjs.Dayjs, value: dayjs.Dayjs) => {
      setDateChanged(date);
      props.handleChangeDate(date, value);
    };

    const complsOpenWatchingFnc = () => {
      if (props.complsOpen && !hideAnimation.value) {
        setHideAnimation(true);
      }
      if (props.complsOpen) {
        setTimeout(() => {
          if (containerRef.value && containerRef.value.getElementById) {
            const startDateInput = containerRef.value.getElementById('start-date-input-button');
            if (startDateInput) {
              startDateInput.focus();
            }
          }
        }, 50);
      }
    };

    watch(
      () => props.complsOpen,
      (complsOpen) => {
        complsOpenWatchingFnc();
      }
    );

    onMounted(() => {
      complsOpenWatchingFnc();
    });

    return { containerRef, onChangeDate, hideAnimation, dateChanged, setHideAnimation };
  }
});
export default Dialog;
</script>
