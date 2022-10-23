import { HolidayChecker } from "../../../core/holiday/service/checker";
import { WeekendChecker } from "../../../core/weekend/service/checker";
import { WorkdayCalculator } from "../../../core/workday/service/calculator";

export function WorkdayMinusUseCase(
  workdayCalculator: WorkdayCalculator,
  weekendChecker: WeekendChecker,
  holidayChecker: HolidayChecker
) {
  async function execute(date: Date, days: number): Promise<void> {
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

    workdayCalculator.minus(date, willMinusDays);
  }
}
