import { getHoldiayCheckService } from "./check.service";

export interface HolidayChecker {
  isHoliday: (date: Date) => Promise<boolean>;
}

export function getHolidayChecker(): HolidayChecker {
  return getHoldiayCheckService();
}
