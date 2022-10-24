import { PrismaClient } from "@prisma/client";
import { Holiday } from "../holiday";
import { HolidayRepository } from "./holiday";

function HolidayPrismaRepository(): HolidayRepository {
  const prisma = new PrismaClient();

  async function findAll(): Promise<Holiday[]> {
    return prisma.holiday.findMany();
  }

  return {
    findAll,
  };
}

const holidayPrismaRepository = HolidayPrismaRepository();

export function getHolidayPrismaRepository() {
  return holidayPrismaRepository;
}
