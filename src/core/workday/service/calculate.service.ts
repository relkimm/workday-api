import { WorkdayCalculator } from "./calculator";
import { minusDays, plusDays } from "../../../shared/util/date";

function WorkdayCalculateService(): WorkdayCalculator {
  function plus(date: Date, days: number): Date {
    return plusDays(date, days);
  }

  function minus(date: Date, days: number): Date {
    return minusDays(date, days);
  }

  return {
    plus,
    minus,
  };
}

const workdayCalculateService = WorkdayCalculateService();

export function getWorkdayCalculateService() {
  return workdayCalculateService;
}
