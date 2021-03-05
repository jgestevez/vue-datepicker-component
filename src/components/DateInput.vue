<template>
  <div
    :class="[
      'date',
      {
        'is-focus': isFocus,
        'is-single': isSingle
      }
    ]"
    role="button"
    :tabIndex="nonFocusable ? '-1' : tabIndex"
    @click="handleClickDateInput"
    @focus="onDateInputFocus"
    :id="name === 'START_DATE' ? 'start-date-input-button' : 'end-date-input-button'"
  >
    <CalendarIcon v-if="showIcon" class="icon-calendar" viewBox="0 0 24 24" />

    <div class="selected-date">
      {{ formattedDate }}
      <div v-if="!formattedDate" class="date-placeholder">{{ placeholder }}</div>
    </div>
    <div v-if="formattedDate" class="change-date-group">
      <button class="btn-outline change-date-button" @click="prevDate" :tabIndex="nonFocusable ? '-1' : '0'" :disabled="disablePrev">
        <PrevIcon viewBox="0 0 24 24" class="icon-arrow" />
      </button>
      <button class="btn-outline change-date-button" @click="nextDate" :tabIndex="nonFocusable ? '-1' : '0'" :disabled="disableNext">
        <NextIcon viewBox="0 0 24 24" class="icon-arrow" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import dayjs from 'dayjs';
import CalendarIcon from './icons/CalendarIcon.vue';
import PrevIcon from './icons/PrevIcon.vue';
import NextIcon from './icons/NextIcon.vue';

const DateInput = defineComponent({
  components: { CalendarIcon, PrevIcon, NextIcon },
  props: {
    handleClickDateInput: {
      type: Function,
      default: () => {}
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    tabIndex: {
      type: String,
      default: ''
    },
    isFocus: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object as () => dayjs.Dayjs,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    handleChangeDate: {
      type: Function,
      default: () => {}
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
    name: {
      type: String,
      default: ''
    },
    nonFocusable: {
      type: Boolean,
      default: false
    },
    fromDate: {
      type: Object as () => dayjs.Dayjs,
      default: null
    },
    minDate: {
      type: Object as () => Date,
      default: null
    },
    maxDate: {
      type: Object as () => Date,
      default: null
    }
  },
  setup(props) {
    const formattedDate = ref<string | null>(null);
    const disablePrev = ref(false);
    const disableNext = ref(false);

    const setFormattedDate = (value: string | null) => {
      formattedDate.value = value;
    };
    const setDisablePrev = (value: boolean) => {
      disablePrev.value = value;
    };
    const setDisableNext = (value: boolean) => {
      disableNext.value = value;
    };

    const fromDateAndValueWatchingFnc = () => {
      if (props.value) {
        const { dateFormat, minDate, fromDate, name, maxDate } = props;
        let text = props.value.format('ddd, DD MMM');
        if (dateFormat) {
          text = props.value.format(dateFormat);
        }
        setFormattedDate(text);

        if (
          (minDate &&
            dayjs(minDate)
              .add(1, 'day')
              .isAfter(props.value, 'date')) ||
          (name === 'END_DATE' && props.value.isBefore(fromDate.add(1, 'day'), 'date'))
        ) {
          setDisablePrev(true);
        } else {
          setDisablePrev(false);
        }

        if (
          maxDate &&
          dayjs(maxDate)
            .subtract(1, 'day')
            .isBefore(props.value, 'date')
        ) {
          setDisableNext(true);
        } else {
          setDisableNext(false);
        }
      } else {
        setFormattedDate(null);
      }
    };

    watch([() => props.value, () => props.fromDate], ([value]) => {
      fromDateAndValueWatchingFnc();
    });

    const prevDate = (e: Event) => {
      const { value, handleChangeDate } = props;
      e.stopPropagation();
      handleChangeDate('prev', value);
    };

    const nextDate = (e: Event) => {
      const { value, handleChangeDate } = props;
      e.stopPropagation();
      handleChangeDate('next', value);
    };

    const onDateInputFocus = () => {
      const { onFocus } = props;
      if (onFocus) onFocus(name);
    };

    onMounted(() => {
      fromDateAndValueWatchingFnc();
    });

    return { disablePrev, disableNext, formattedDate, onDateInputFocus, nextDate, prevDate };
  }
});
export default DateInput;
</script>
