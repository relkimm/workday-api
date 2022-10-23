import { DateCalculator } from "./calculator";

function DateCalculateService(): DateCalculator {
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

const dateCalculateService = DateCalculateService();

export function getDateCalculateService() {
  return dateCalculateService;
}
