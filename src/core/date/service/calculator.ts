import { getDateCalculateService } from "./calculate.service";

export interface DateCalculator {
  plus: (date: Date, days: number) => Date;
  minus: (date: Date, days: number) => Date;
}

export function getDateCalculator(): DateCalculator {
  return getDateCalculateService();
}
