import { ref, defineProps } from 'vue';
import dayjs from 'dayjs';
import { DOMEvent, DateLabel, StartWeekDay, WeekDayFormat } from '@/types/types';
import { debounce } from '@/helpers';

export const propsSchema = {
  startDate: {
    type: Object as () => Date,
    default: null
  },
  startDatePlaceholder: {
    type: String,
    default: DateLabel.date
  },
  className: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  onChange: {
    type: Function,
    default: () => {}
  },
  onFocus: {
    type: Function,
    default: () => {}
  },
  startWeekDay: {
    type: String as () => StartWeekDay,
    default: StartWeekDay.monday
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
  weekDayFormat: {
    type: String,
    default: WeekDayFormat.dd
  },
  highlightToday: {
    type: Boolean,
    default: false
  },
  isOpen: {
    type: Boolean,
    default: false
  },
  onCloseCalendar: {
    type: Function,
    default: () => {}
  },
  singleCalendar: {
    type: Boolean,
    default: false
  }
};
const PropsType = defineProps(propsSchema);
interface Options {}
export const useSingleDatePicker = (props: Options & typeof PropsType) => {
  const complsOpen = ref(false);
  const containerRef = ref<HTMLDivElement>();
  const fromDate = ref();
  const fromDateRef = ref<dayjs.Dayjs>();
  const hoverDate = ref();
  const isFirstTime = ref(false);

  const setComplsOpen = (val: boolean) => {
    complsOpen.value = val;
  };

  const setFromDate = (val: dayjs.Dayjs) => {
    fromDate.value = val;
  };

  const setHoverDate = (val: dayjs.Dayjs) => {
    hoverDate.value = val;
  };
  const setIsFirstTime = (val: boolean) => {
    isFirstTime.value = val;
  };

  const handleDocumentClick = (e: Event) => {
    if (containerRef.value && containerRef.value.contains(e.target as Element) === false && window.innerWidth >= 768) {
      setComplsOpen(false);
    }
  };

  const notifyChange = () => {
    const _startDate = fromDateRef.value ? fromDateRef.value.toDate() : null;
    props.onChange(_startDate);
  };

  const debounceNotifyChange = debounce(notifyChange, 20);

  const updateFromDate = (dateValue: dayjs.Dayjs, shouldNotifyChange = false) => {
    setFromDate(dateValue);
    fromDateRef.value = dateValue;
    if (shouldNotifyChange) {
      debounceNotifyChange();
    }
  };

  const handleClickDateInput = () => {
    if (props.disabled) return;

    if (!complsOpen.value) {
      setComplsOpen(true);
    }

    props.onFocus(DateLabel.start);
  };

  const onSelectDate = (date: dayjs.Dayjs) => {
    const { minDate, maxDate } = props;
    if ((minDate && dayjs(minDate).isAfter(date, 'date')) || (maxDate && dayjs(maxDate).isBefore(date, 'date'))) {
      return;
    }
    updateFromDate(date, true);
  };

  const onHoverDate = (date: dayjs.Dayjs) => {
    setHoverDate(date);
  };

  const handleReset = () => {
    updateFromDate(null as any, true);
    setHoverDate(null as any);
  };

  const onDateInputFocus = () => {
    handleClickDateInput();
  };

  const toggleDialog = () => {
    setComplsOpen(!complsOpen.value);
  };

  return {
    complsOpen,
    containerRef,
    fromDate,
    fromDateRef,
    hoverDate,
    isFirstTime,
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
  };
};
