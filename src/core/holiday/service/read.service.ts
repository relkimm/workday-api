import { Holiday, PrismaClient } from "@prisma/client";
import { HolidayReader } from "./reader";

function HolidayReadService(): HolidayReader {
  const prisma = new PrismaClient();

  async function get(): Promise<Holiday[]> {
    return prisma.holiday.findMany();
  }

  return {
    get,
  };
}

const holidayReadService = HolidayReadService();

export function getHolidayReadService() {
  return holidayReadService;
}
