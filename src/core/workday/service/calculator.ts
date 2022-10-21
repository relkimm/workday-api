import { getWorkdayCalculateService } from "./calculate.service";

export interface WorkdayCalculator {
  plus: (date: Date, days: number) => Date;
  minus: (date: Date, days: number) => Date;
}

export function getWorkdayCalculator(): WorkdayCalculator {
  return getWorkdayCalculateService();
}
