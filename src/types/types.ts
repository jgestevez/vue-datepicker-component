export enum Action {
  next = 'next',
  prev = 'prev'
}

export enum Direction {
  from = 'from',
  to = 'to'
}
export interface DOMEvent<T extends EventTarget> extends Event {
  target: T;
}

export enum DateLabel {
  start = 'Start Date',
  end = 'End date',
  date = 'DATE'
}

export enum StartWeekDay {
  monday = 'monday',
  sunday = 'sunday'
}

export enum WeekDayFormat {
  dd = 'dd'
}

export enum Format {
  'day' = 'day'
}
