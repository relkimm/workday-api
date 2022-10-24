import { Holiday } from "../holiday";
import { getHolidayPrismaRepository } from "./holiday.repository";

export interface HolidayRepository {
  findAll: () => Promise<Holiday[]>;
}

const holidayPrismaRepository = getHolidayPrismaRepository();

export function getHolidayRepository(): HolidayRepository {
  return holidayPrismaRepository;
}
