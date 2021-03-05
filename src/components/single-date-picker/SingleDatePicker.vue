<template>
  <div class="react-google-flight-datepicker">
    <div
      :class="[
        'date-picker',
        className,
        {
          disabled: disabled
        }
      ]"
      ref="containerRef"
    >
      <DateInputGroup
        :handleClickDateInput="handleClickDateInput"
        showCalendarIcon
        :fromDate="fromDate"
        :minDate="minDate"
        :maxDate="maxDate"
        :handleChangeDate="onSelectDate"
        :startDatePlaceholder="startDatePlaceholder"
        :dateFormat="dateFormat"
        :onFocus="onDateInputFocus"
        isSingle
      />
      <DialogWrapper :isMobile="isMobile">
        <Dialog
          :complsOpen="complsOpen"
          :toggleDialog="toggleDialog"
          :handleClickDateInput="handleClickDateInput"
          inputFocus="from"
          :onSelectDate="onSelectDate"
          :onHoverDate="onHoverDate"
          :fromDate="fromDate"
          :hoverDate="hoverDate"
          :handleReset="handleReset"
          :handleChangeDate="onSelectDate"
          :startDatePlaceholder="startDatePlaceholder"
          :startWeekDay="startWeekDay"
          :minDate="minDate"
          :maxDate="maxDate"
          :dateFormat="dateFormat"
          :monthFormat="monthFormat"
          :isMobile="isMobile"
          :highlightToday="highlightToday"
          isSingle
          :weekDayFormat="weekDayFormat"
          :singleCalendar="singleCalendar"
        />
      </DialogWrapper>
    </div>
  </div>
</template>
<script lang="ts">
import { useResize } from '@/helpers/useResize';
import dayjs from 'dayjs';
import { defineComponent, onBeforeUnmount, onMounted, watch } from 'vue';
import DateInputGroup from '../DateInputGroup.vue';
import Dialog from '../Dialog.vue';
import DialogWrapper from '../DialogWrapper.vue';
import { propsSchema } from '../single-date-picker/SingleDatePicker';
import { useSingleDatePicker } from './SingleDatePicker';

const SingleDatePicker = defineComponent({
  components: { DateInputGroup, DialogWrapper, Dialog },
  props: propsSchema,
  setup(props) {
    const {
      complsOpen,
      isFirstTime,
      containerRef,
      fromDate,
      fromDateRef,
      hoverDate,
      notifyChange,
      debounceNotifyChange,
      updateFromDate,
      handleClickDateInput,
      setIsFirstTime,
      setHoverDate,
      handleDocumentClick,
      onSelectDate,
      onHoverDate,
      handleReset,
      onDateInputFocus,
      setComplsOpen,
      setFromDate,
      toggleDialog
    } = useSingleDatePicker(props);
    const { isMobile } = useResize();

    const startDateWatchingFnc = () => {
      const { startDate } = props;
      const _startDateJs = startDate ? dayjs(startDate) : null;
      fromDateRef.value = _startDateJs!;
      setFromDate(_startDateJs!);
    };
    watch(
      () => props.startDate,
      () => {
        startDateWatchingFnc();
      }
    );

    const complsOpenWatchingFnc = () => {
      if (!complsOpen && isFirstTime) {
        props.onCloseCalendar(props.startDate);
      }
    };
    watch(complsOpen, () => {
      complsOpenWatchingFnc();
    });

    const isOpenWatchingFnc = () => {
      setComplsOpen(props.isOpen);
    };
    watch(
      () => props.isOpen,
      () => {
        isOpenWatchingFnc();
      }
    );

    onMounted(() => {
      setComplsOpen(props.isOpen);
      setIsFirstTime(true);
      if (props.startDate) {
        updateFromDate(dayjs(props.startDate), false);
      }
      startDateWatchingFnc();
      complsOpenWatchingFnc();
      isOpenWatchingFnc();

      document.addEventListener('click', handleDocumentClick);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('click', handleDocumentClick);
    });

    return {
      complsOpen,
      isFirstTime,
      containerRef,
      fromDate,
      fromDateRef,
      hoverDate,
      notifyChange,
      debounceNotifyChange,
      updateFromDate,
      handleClickDateInput,
      setIsFirstTime,
      setHoverDate,
      handleDocumentClick,
      onSelectDate,
      onHoverDate,
      handleReset,
      onDateInputFocus,
      setComplsOpen,
      setFromDate,
      toggleDialog,
      isMobile
    };
  }
});
export default SingleDatePicker;
</script>
