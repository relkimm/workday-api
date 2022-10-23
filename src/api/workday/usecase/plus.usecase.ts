import {
  getHolidayChecker,
  HolidayChecker,
} from "../../../core/holiday/service/checker";
import {
  getWeekendChecker,
  WeekendChecker,
} from "../../../core/weekend/service/checker";
import {
  DateCalculator,
  getDateCalculator,
} from "../../../core/date/service/calculator";

export function WorkdayPlusUseCase(
  dateCalculator: DateCalculator,
  weekendChecker: WeekendChecker,
  holdiayChecker: HolidayChecker
) {
  async function execute(date: Date, days: number): Promise<Date> {
    let willPlusDays = days;

    for (let i = 1; i <= days; i++) {
      const current = dateCalculator.plus(date, i);
      const isWeekend = weekendChecker.isWeekend(current);
      if (isWeekend) {
        ++willPlusDays;
        ++days;
        continue;
      }

      const isHoliday = await holidayChecker.isHoliday(current);
      if (isHoliday) {
        ++willPlusDays;
        ++days;
        continue;
      }
    }

    return dateCalculator.plus(date, willPlusDays);
  }

  return {
    execute,
  };
}

const dateCalculator = getDateCalculator();
const weekendChecker = getWeekendChecker();
const holidayChecker = getHolidayChecker();

const workdayPlusUseCase = WorkdayPlusUseCase(
  dateCalculator,
  weekendChecker,
  holidayChecker
);

export function getWorkdayPlusUseCase() {
  return workdayPlusUseCase;
}
