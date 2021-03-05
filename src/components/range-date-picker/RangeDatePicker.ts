import { ref, defineProps } from 'vue';
import { debounce } from '../../helpers';
import dayjs from 'dayjs';
import { Direction, DOMEvent, StartWeekDay } from '@/types/types';

export const propsSchema = {
  startDate: {
    type: Object as () => Date,
    default: null
  },
  endDate: {
    type: Object as () => Date,
    default: null
  },
  startDatePlaceholder: {
    type: String,
    default: 'Start date'
  },
  endDatePlaceholder: {
    type: String,
    default: 'End date'
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
  highlightToday: {
    type: Boolean,
    default: false
  },
  dateInputSeperator: {
    type: Object as () => HTMLElement,
    default: null
  },
  hideDialogHeader: {
    type: Boolean,
    default: false
  },
  hideDialogFooter: {
    type: Boolean,
    default: false
  },
  weekDayFormat: {
    type: String,
    default: 'dd'
  },
  hideDialogAfterSelectEndDate: {
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
  }
};
const PropsType = defineProps(propsSchema);
interface Options {}
export const useRangeDatePicker = (props: Options & typeof PropsType) => {
  const complsOpen = ref(false);
  const containerRef = ref<HTMLDivElement>();
  const inputFocus = ref<string | null>();
  const fromDate = ref();
  const toDate = ref<dayjs.Dayjs>();
  const fromDateRef = ref<dayjs.Dayjs>();
  const toDateRef = ref<dayjs.Dayjs>();
  const hoverDate = ref();
  const isFirstTime = ref(false);

  const setComplsOpen = (val: boolean) => {
    complsOpen.value = val;
  };
  const setInputFocus = (val: string | null) => {
    inputFocus.value = val;
  };
  const setFromDate = (val: dayjs.Dayjs) => {
    fromDate.value = val;
  };
  const setToDate = (val: dayjs.Dayjs) => {
    toDate.value = val;
  };
  const setHoverDate = (val: dayjs.Dayjs | null) => {
    hoverDate.value = val as dayjs.Dayjs;
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
    const _endDate = toDateRef.value ? toDateRef.value.toDate() : null;
    props.onChange(_startDate, _endDate);
  };

  const debounceNotifyChange = debounce(notifyChange, 20);

  const updateFromDate = (dateValue: dayjs.Dayjs | null, shouldNotifyChange = false) => {
    setFromDate(dateValue!);
    fromDateRef.value = dateValue!;
    if (shouldNotifyChange) {
      debounceNotifyChange();
    }
  };

  const updateToDate = (dateValue: dayjs.Dayjs | null, shouldNotifyChange = false) => {
    setToDate(dateValue!);
    toDateRef.value = dateValue!;
    if (shouldNotifyChange) {
      debounceNotifyChange();
    }
  };

  const toggleDialog = () => {
    setComplsOpen(!complsOpen.value);
  };

  const handleClickDateInput = (inputFocus: string) => {
    if ((inputFocus === Direction.to && !fromDate.value) || props.disabled) {
      return;
    }

    if (!complsOpen.value) {
      setComplsOpen(true);
    }

    setInputFocus(inputFocus);
  };

  const onSelectDate = (date: dayjs.Dayjs) => {
    if (inputFocus.value) {
      if (inputFocus.value === Direction.from || (fromDate.value && date.isBefore(fromDate.value, 'date'))) {
        updateFromDate(date, true);
        if (toDate.value && date.isAfter(toDate.value, 'date')) {
          updateToDate(null, true);
        }
        setInputFocus(Direction.to);
      } else {
        updateToDate(date, true);
        setInputFocus(null);
        if (props.hideDialogAfterSelectEndDate) {
          setTimeout(() => {
            setComplsOpen(false);
          }, 50);
        }
      }
    } else {
      updateFromDate(date, true);
      setInputFocus(Direction.to);
      if (toDate.value && date.isAfter(toDate.value, 'date')) {
        updateToDate(null, true);
      }
    }
  };

  const onHoverDate = (date: dayjs.Dayjs) => {
    setHoverDate(date);
  };

  const handleReset = () => {
    setInputFocus(Direction.from);
    setHoverDate(null);
    updateFromDate(null, true);
    updateToDate(null, true);
  };

  const handleChangeDate = (value: dayjs.Dayjs, input: Direction) => {
    const { minDate, maxDate } = props;
    if ((minDate && dayjs(minDate).isAfter(value, 'date')) || (maxDate && dayjs(maxDate).isBefore(value, 'date'))) {
      return;
    }

    if (input === Direction.from) {
      setInputFocus(Direction.from);
      updateFromDate(value, true);
      if (value > toDate.value!) {
        updateToDate(null, true);
      }
    } else {
      setInputFocus(Direction.to);
      updateToDate(value, true);
    }
  };

  const onDateInputFocus = () => {
    handleClickDateInput(Direction.from);
  };

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
};
