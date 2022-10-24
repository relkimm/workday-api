import { CreateData } from "../../../../shared/type/prisma";
import { Holiday } from "../holiday";
import { getHolidayPrismaRepository } from "./holiday.repository";

export interface HolidayRepository {
  findAll: () => Promise<Holiday[]>;
  saveAll: (data: CreateData<Holiday>[]) => Promise<void>;
}

const holidayPrismaRepository = getHolidayPrismaRepository();

export function getHolidayRepository(): HolidayRepository {
  return holidayPrismaRepository;
}
