import { Holiday, PrismaClient } from "@prisma/client";

interface HolidayReader {
  get: () => Promise<Holiday[]>;
}

export function HolidayReadService(): HolidayReader {
  const prisma = new PrismaClient();

  async function get(): Promise<Holiday[]> {
    return prisma.holiday.findMany();
  }

  return {
    get,
  };
}

export function HolidayCacheService(readService: HolidayReader): HolidayReader {
  let cache: Holiday[];
  async function get(): Promise<Holiday[]> {
    if (cache === undefined) {
      const holidays = await readService.get();
      cache = holidays;
    }
    return cache;
  }

  return {
    get,
  };
}

const holidayReadService = HolidayReadService();
const holidayCacheService = HolidayCacheService(holidayReadService);

export function getHolidayReader(): HolidayReader {
  return holidayCacheService;
}
