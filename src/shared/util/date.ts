const weekendValues = [0, 6];

export function isWeekend(date: Date) {
  const dayOfWeek = date.getDay();
  return weekendValues.some((weekendValue) => weekendValue === dayOfWeek);
}
