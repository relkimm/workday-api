import { Holiday } from "@prisma/client";
import { getHolidayReadService } from "./read.service";
import { HolidayReader } from "./reader";

function HolidayCacheService(readService: HolidayReader): HolidayReader {
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

const holidayReadService = getHolidayReadService();
const holidayCacheService = HolidayCacheService(holidayReadService);

export function getHolidayCacheService() {
  return holidayCacheService;
}
