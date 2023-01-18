import dayjs from 'dayjs';

export function generateDatesFromYearBeginning(): Date[] {
  const firstDayOfTheYear = dayjs().startOf('year');
  const today = new Date();

  const dates: Date[] = [];
  let compareDate = firstDayOfTheYear;

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, 'day');
  }

  return dates;
}
