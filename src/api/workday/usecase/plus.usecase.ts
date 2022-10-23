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

export function WorkdayPlusUseCase(
  workdayCalculator: WorkdayCalculator,
  weekendChecker: WeekendChecker,
  holdiayChecker: HolidayChecker
) {
  async function execute(date: Date, days: number): Promise<Date> {
    let willPlusDays = days;

    for (let i = 1; i < days; i++) {
      const current = new Date(date.getDate() + i);
      const isWeekend = weekendChecker.isWeekend(current);
      if (isWeekend) {
        willPlusDays++;
        continue;
      }

      const isHoliday = await holidayChecker.isHoliday(date);
      if (isHoliday) {
        willPlusDays++;
        continue;
      }
    }

    return workdayCalculator.plus(date, willPlusDays);
  }

  return {
    execute,
  };
}

const workdayCalculator = getWorkdayCalculator();
const weekendChecker = getWeekendChecker();
const holidayChecker = getHolidayChecker();

const workdayPlusUseCase = WorkdayPlusUseCase(
  workdayCalculator,
  weekendChecker,
  holidayChecker
);

export function getWorkdayPlusUseCase() {
  return workdayPlusUseCase;
}
