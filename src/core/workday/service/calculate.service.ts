import { WorkdayCalculator } from "./calculator";
import { plusDays } from "../../../shared/util/date";

function WorkdayCalculateService(): WorkdayCalculator {
  function plus(date: Date, days: number) {
    return plusDays(date, days);
  }

  return {
    plus,
  };
}

const workdayCalculateService = WorkdayCalculateService();

export function getWorkdayCalculateService() {
  return workdayCalculateService;
}
