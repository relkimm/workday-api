import { Holiday } from "../entity/holiday";
import { HolidayCacher } from "./cacher";
import { getHolidayReadService } from "./read.service";
import { HolidayReader } from "./reader";

type HolidayCache = Record<number, Holiday[]>;

export function HolidayCacheService(
  holidayReader: HolidayReader
): HolidayCacher {
  let cache: HolidayCache;

  async function get(): Promise<Holiday[]> {
    if (cache === undefined) {
      await fillCache();
    }

    return Object.keys(cache).reduce<Holiday[]>((holidays, key) => {
      const numberKey = Number(key);
      const holidaysOfYear = cache[numberKey];
      return holidays.concat(holidaysOfYear);
    }, []);
  }

  async function getByYear(year: number): Promise<Holiday[]> {
    if (cache === undefined) {
      await fillCache();
    }
    const holidaysOfYear = cache[year];
    return holidaysOfYear || [];
  }

  async function fillCache() {
    const holidays = await holidayReader.get();
    cache = holidays.reduce<HolidayCache>((cache, holiday) => {
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
