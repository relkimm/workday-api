const weekendValues = [0, 6];

export function isWeekend(date: Date) {
  const dayOfWeek = date.getDay();
  return weekendValues.some((weekendValue) => weekendValue === dayOfWeek);
}

export function isSameDate(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
