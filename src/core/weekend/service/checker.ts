import { getWeekendCheckService } from "./check.service";

export interface WeekendChecker {
  isWeekend: (date: Date) => boolean;
}

export function getWeekendChecker(): WeekendChecker {
  return getWeekendCheckService();
}
