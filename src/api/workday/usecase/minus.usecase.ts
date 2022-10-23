import {
  getHolidayChecker,
  HolidayChecker,
} from "../../../core/holiday/service/checker";
import {
  getWeekendChecker,
  WeekendChecker,
} from "../../../core/weekend/service/checker";
import {
  getWorkdayCalculator,
  WorkdayCalculator,
} from "../../../core/workday/service/calculator";

function WorkdayMinusUseCase(
  workdayCalculator: WorkdayCalculator,
  weekendChecker: WeekendChecker,
  holidayChecker: HolidayChecker
) {
  async function execute(date: Date, days: number): Promise<Date> {
    let willMinusDays = days;

    for (let i = 1; i < days; i++) {
      const current = new Date(date.getDate() - i);
      const isWeekend = weekendChecker.isWeekend(current);
      if (isWeekend) {
        ++willMinusDays;
        continue;
      }

      const isHoliday = await holidayChecker.isHoliday(current);
      if (isHoliday) {
        ++willMinusDays;
        continue;
      }
    }

    return workdayCalculator.minus(date, willMinusDays);
  }

  return {
    execute,
  };
}

const workdayCalculator = getWorkdayCalculator();
const weekendChecker = getWeekendChecker();
const holidayChecker = getHolidayChecker();
const workdayMinusUseCase = WorkdayMinusUseCase(
  workdayCalculator,
  weekendChecker,
  holidayChecker
);

export function getWorkdayMinusUseCase() {
  return workdayMinusUseCase;
}
