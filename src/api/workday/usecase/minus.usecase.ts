import {
  getHolidayChecker,
  HolidayChecker,
} from "../../../core/holiday/service/checker";
import {
  getWeekendChecker,
  WeekendChecker,
} from "../../../core/weekend/service/checker";
import {
  getDateCalculator,
  DateCalculator,
} from "../../../core/date/service/calculator";

function WorkdayMinusUseCase(
  dateCalculator: DateCalculator,
  weekendChecker: WeekendChecker,
  holidayChecker: HolidayChecker
) {
  async function execute(date: Date, days: number): Promise<Date> {
    let willMinusDays = days;

    for (let i = 1; i < days; i++) {
      const current = dateCalculator.minus(date, i);
      const isWeekend = weekendChecker.isWeekend(current);
      if (isWeekend) {
        ++willMinusDays;
        ++days;
        continue;
      }

      const isHoliday = await holidayChecker.isHoliday(current);
      if (isHoliday) {
        ++willMinusDays;
        ++days;
        continue;
      }
    }

    return dateCalculator.minus(date, willMinusDays);
  }

  return {
    execute,
  };
}

const dateCalculator = getDateCalculator();
const weekendChecker = getWeekendChecker();
const holidayChecker = getHolidayChecker();
const workdayMinusUseCase = WorkdayMinusUseCase(
  dateCalculator,
  weekendChecker,
  holidayChecker
);

export function getWorkdayMinusUseCase() {
  return workdayMinusUseCase;
}
