import { Holiday } from "../entity/holiday";
import { HolidayCacher } from "./cacher";
import { getHolidayReadService } from "./read.service";
import { HolidayReader } from "./reader";

type ByYearCache = Record<number, Holiday[]>;

export function HolidayCacheService(
  holidayReader: HolidayReader
): HolidayCacher {
  let allYearCache: Holiday[];
  let byYearCache: ByYearCache;

  async function get(): Promise<Holiday[]> {
    if (allYearCache === undefined) {
      await fillAllYearCache();
    }
    return allYearCache;
  }

  async function getByYear(year: number): Promise<Holiday[]> {
    if (byYearCache === undefined) {
      await fillByYearCache();
    }
    const holidaysOfYear = byYearCache[year];
    return holidaysOfYear || [];
  }

  async function fillAllYearCache() {
    const holidays = await holidayReader.get();
    allYearCache = holidays;
  }

  async function fillByYearCache() {
    const holidays = await holidayReader.get();
    byYearCache = holidays.reduce<ByYearCache>((cache, holiday) => {
      const holidaysOfYear = cache[holiday.year];
      if (holidaysOfYear === undefined) {
        cache[holiday.year] = [holiday];
      } else {
        cache[holiday.year] = holidaysOfYear.concat(holiday);
      }
      return cache;
    }, {});
  }

  return {
    get,
    getByYear,
  };
}

const holidayReadService = getHolidayReadService();
const holidayCacheService = HolidayCacheService(holidayReadService);

export function getHolidayCacheService() {
  return holidayCacheService;
}
