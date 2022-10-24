import { Holiday } from "../entity/holiday";
import { HolidayCacher } from "./cacher";
import { getHolidayReadService } from "./read.service";
import { HolidayReader } from "./reader";

function HolidayCacheService(holidayReader: HolidayReader): HolidayCacher {
  let cache: Holiday[];

  async function get(): Promise<Holiday[]> {
    if (cache === undefined) {
      const holidays = await holidayReader.get();
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
