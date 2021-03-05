<template>
  <div class="date-picker-input">
    <CalendarIcon v-if="showCalendarIcon" class="icon-calendar mobile" viewBox="0 0 24 24" />
    <div class="date-picker-date-group">
      <DateInput
        :handleClickDateInput="handleClickFromInput"
        :showIcon="true"
        :tabIndex="nonFocusable ? '-1' : '0'"
        :isFocus="inputFocus === Direction.from"
        :value="fromDate"
        :placeholder="startDatePlaceholder"
        :handleChangeDate="handleChangeFromDate"
        :dateFormat="dateFormat"
        :isSingle="isSingle"
        name="START_DATE"
        @focus="onFocus"
        :nonFocusable="nonFocusable"
        :minDate="minDate"
        :maxDate="maxDate"
      />
      <div v-if="!isSingle && dateInputSeperator" class="date-input-separator">{{ dateInputSeperator }}</div>

      <DateInput
        v-if="!isSingle"
        :handleClickDateInput="handleClickToInput"
        tabIndex="0"
        :isFocus="inputFocus === Direction.to"
        :value="toDate"
        :placeholder="endDatePlaceholder"
        :handleChangeDate="handleChangeToDate"
        :dateFormat="dateFormat"
        name="END_DATE"
        :nonFocusable="nonFocusable"
        :minDate="minDate"
        :maxDate="maxDate"
        :fromDate="fromDate"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted, watch } from 'vue';
import dayjs from 'dayjs';
import CalendarIcon from './icons/CalendarIcon.vue';
import DateInput from './DateInput.vue';
import { Action, Direction } from '../types/types';

const DateInputGroup = defineComponent({
  components: { DateInput, CalendarIcon },
  props: {
    handleClickDateInput: {
      type: Function,
      default: () => {}
    },
    showCalendarIcon: {
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
    minDate: {
      type: Object as () => Date,
      default: null
    },
    maxDate: {
      type: Object as () => Date,
      default: null
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
    dateFormat: {
      type: String,
      default: ''
    },
    isSingle: {
      type: Boolean,
      default: false
    },
    onFocus: {
      type: Function,
      default: () => {}
    },
    nonFocusable: {
      type: Boolean,
      default: false
    },
    dateInputSeperator: {
      type: Object as () => HTMLElement,
      default: null
    }
  },
  setup(props) {
    const handleClickFromInput = () => {
      props.handleClickDateInput(Direction.from);
    };

    const handleClickToInput = () => {
      props.handleClickDateInput(Direction.to);
    };

    const getDateFromValue = (action: Action, value: string) => {
      if (action === Action.prev) {
        return dayjs(value).subtract(1, 'day');
      }

      return dayjs(value).add(1, 'day');
    };

    const handleChangeFromDate = (action: Action, value: string) => {
      const date = getDateFromValue(action, value);
      props.handleChangeDate(date, Direction.from);
    };

    const handleChangeToDate = (action: Action, value: string) => {
      const date = getDateFromValue(action, value);
      props.handleChangeDate(date, Direction.to);
    };

    return {
      handleClickFromInput,
      handleClickToInput,
      handleChangeFromDate,
      handleChangeToDate,
      Direction
    };
  }
});
export default DateInputGroup;
</script>
