const weekendValues = [0, 6];

export function isWeekend(date: Date) {
  const dayOfWeek = date.getDay();
  return weekendValues.some((weekendValue) => weekendValue === dayOfWeek);
}

export function plusDate(date: Date, plus: number) {
  const next = new Date(date);
  next.setDate(date.getDate() + plus);
  return next;
}
