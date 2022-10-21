const weekendValues = [0, 6];

export function isWeekend(date: Date) {
  const dayOfWeek = date.getDay();
  return weekendValues.some((weekendValue) => weekendValue === dayOfWeek);
}

export function plusDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(date.getDate() + days);
  return next;
}
