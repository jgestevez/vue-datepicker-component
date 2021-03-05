<template>
  <div
    :class="[
      'day',
      {
        selected,
        hovered,
        disabled,
        highlight,
        end: isEndDay
      }
    ]"
    @click="selectDate"
    @mouseenter="handleHoverDate"
    role="button"
    tabIndex="-1"
    :data-day-index="dateIndex"
    :data-date-value="dateValue"
  >
    <div
      v-if="hovered && !(isEndDay && dateIndex === totalDay) && !(dateIndex === 1 && selected && !isEndDay)"
      :class="[
        'background-day',
        {
          'first-day': dateIndex === 1,
          'last-day': dateIndex === totalDay
        }
      ]"
    />
    <div class="text-day">{{ dateIndex }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import dayjs from 'dayjs';

const Day = defineComponent({
  props: {
    dateIndex: {
      type: Number,
      default: null
    },
    dateValue: {
      type: Object as () => dayjs.Dayjs,
      default: null
    },
    isEndDay: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    hovered: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onSelectDate: {
      type: Function,
      default: () => {}
    },
    onHoverDate: {
      type: Function,
      default: () => {}
    },
    totalDay: {
      type: Number,
      default: null
    },
    highlight: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const selectDate = (e: Event) => {
      const { disabled, onSelectDate, dateValue } = props;
      e.stopPropagation();
      e.preventDefault();

      if (disabled) return;
      onSelectDate(dateValue);
    };

    const handleHoverDate = () => {
      const { disabled, onHoverDate, dateValue } = props;
      if (disabled || !onHoverDate) return;
      onHoverDate(dateValue);
    };

    return { selectDate, handleHoverDate };
  }
});
export default Day;
</script>
