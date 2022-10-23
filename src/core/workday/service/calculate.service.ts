import { WorkdayCalculator } from "./calculator";

function WorkdayCalculateService(): WorkdayCalculator {
  function plus(date: Date, days: number): Date {
    const next = new Date(date);
    next.setDate(date.getDate() + days);
    return next;
  }

  function minus(date: Date, days: number): Date {
    const next = new Date(date);
    next.setDate(date.getDate() - days);
    return next;
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
