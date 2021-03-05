<template>
  <div class="react-google-flight-datepicker">
    <div
      :class="[
        'date-picker',
        {
          disabled: disabled
        }
      ]"
      ref="containerRef"
    >
      <DateInputGroup
        :handleClickDateInput="handleClickDateInput"
        :showCalendarIcon="true"
        :fromDate="fromDate"
        :toDate="toDate"
        :minDate="minDate"
        :maxDate="maxDate"
        :handleChangeDate="handleChangeDate"
        :startDatePlaceholder="startDatePlaceholder"
        :endDatePlaceholder="endDatePlaceholder"
        :dateFormat="dateFormat"
        @focus="onDateInputFocus"
        :nonFocusable="complsOpen"
        :dateInputSeperator="dateInputSeperator"
        :inputFocus="inputFocus"
      />

      <DialogWrapper :isMobile="isMobile">
        <Dialog
          :complsOpen="complsOpen"
          :toggleDialog="toggleDialog"
          :handleClickDateInput="handleClickDateInput"
          :inputFocus="inputFocus"
          :setInputFocus="setInputFocus"
          :onSelectDate="onSelectDate"
          :onHoverDate="onHoverDate"
          :fromDate="fromDate"
          :toDate="toDate"
          :hoverDate="hoverDate"
          :handleReset="handleReset"
          :handleChangeDate="handleChangeDate"
          :startDatePlaceholder="startDatePlaceholder"
          :endDatePlaceholder="endDatePlaceholder"
          :startWeekDay="startWeekDay"
          :minDate="minDate"
          :maxDate="maxDate"
          :weekDayFormat="weekDayFormat"
          :dateFormat="dateFormat"
          :monthFormat="monthFormat"
          :isMobile="isMobile"
          :highlightToday="highlightToday"
          :hideDialogHeader="hideDialogHeader"
          :hideDialogFooter="hideDialogFooter"
          :dateInputSeperator="dateInputSeperator"
        />
      </DialogWrapper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, watch } from 'vue';
import { propsSchema, useRangeDatePicker } from './RangeDatePicker';
import dayjs from 'dayjs';
import DateInputGroup from '../DateInputGroup.vue';
import DialogWrapper from '../DialogWrapper.vue';
import Dialog from '../Dialog.vue';
import { useResize } from '../../helpers/useResize';
import { Direction } from '@/types/types';

const RangeDatePicker = defineComponent({
  props: propsSchema,
  components: { DateInputGroup, DialogWrapper, Dialog },
  setup(props) {
    const {
      complsOpen,
      containerRef,
      inputFocus,
      fromDate,
      toDate,
      fromDateRef,
      toDateRef,
      hoverDate,
      isFirstTime,
      setComplsOpen,
      setInputFocus,
      setFromDate,
      setToDate,
      setHoverDate,
      setIsFirstTime,
      handleDocumentClick,
      notifyChange,
      updateFromDate,
      updateToDate,
      toggleDialog,
      handleClickDateInput,
      onSelectDate,
      onHoverDate,
      handleReset,
      handleChangeDate,
      onDateInputFocus
    } = useRangeDatePicker(props);

    const { isMobile } = useResize();

    const startDateWatchingFnc = () => {
      const { startDate } = props;
      const _startDateJs = startDate ? dayjs(startDate) : null;
      fromDateRef.value = _startDateJs!;
      updateFromDate(_startDateJs, false);
    };
    watch(
      () => props.startDate,
      () => {
        startDateWatchingFnc();
      }
    );

    const endDateWatchingFnc = () => {
      const { endDate } = props;
      const _endDateJs = endDate ? dayjs(endDate) : null;
      toDateRef.value = _endDateJs!;
      updateToDate(_endDateJs, false);
    };
    watch(
      () => props.endDate,
      () => {
        endDateWatchingFnc();
      }
    );

    const complsOpenWatchingFnc = () => {
      if (!complsOpen && isFirstTime) {
        const { startDate, endDate } = props;
        props.onCloseCalendar(startDate, endDate);
      }
    };
    watch(complsOpen, (complsOpen, oldVal) => {
      complsOpenWatchingFnc();
    });

    watch(inputFocus, (inputFocus) => {
      if (isFirstTime) {
        const { onFocus } = props;
        const input = inputFocus === Direction.from ? 'Start Date' : inputFocus === Direction.to ? 'End Date' : '';
        onFocus(input);
      }
    });

    onMounted(() => {
      setIsFirstTime(true);
      document.addEventListener('click', handleDocumentClick);
    });

    onMounted(() => {
      const { endDate, isOpen, startDate } = props;
      setComplsOpen(isOpen);

      startDateWatchingFnc();
      endDateWatchingFnc();
      // complsOpenWatchingFnc()
    });

    onBeforeUnmount(() => {
      document.removeEventListener('click', handleDocumentClick);
    });

    return {
      complsOpen,
      containerRef,
      inputFocus,
      fromDate,
      toDate,
      fromDateRef,
      toDateRef,
      hoverDate,
      isFirstTime,
      isMobile,
      setComplsOpen,
      setInputFocus,
      setFromDate,
      setToDate,
      setHoverDate,
      setIsFirstTime,
      handleDocumentClick,
      notifyChange,
      updateFromDate,
      updateToDate,
      toggleDialog,
      handleClickDateInput,
      onSelectDate,
      onHoverDate,
      handleReset,
      handleChangeDate,
      onDateInputFocus
    };
  }
});
export default RangeDatePicker;
</script>

<style scoped lang="scss"></style>
