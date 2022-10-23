import { isWeekend } from "../../../shared/util/date";
import { WeekendChecker } from "./checker";

function WeekendCheckService(): WeekendChecker {
  return {
    isWeekend: isWeekend,
  };
}

const weekendCheckService = WeekendCheckService();

export function getWeekendCheckService() {
  return weekendCheckService;
}
