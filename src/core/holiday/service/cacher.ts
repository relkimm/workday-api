import { Holiday } from "../entity/holiday";
import { getHolidayCacheService } from "./cache.service";

export interface HolidayCacher {
  get: () => Promise<Holiday[]>;
  getByYear: (year: number) => Promise<Holiday[]>;
}

export function getHolidayCacher(): HolidayCacher {
  return getHolidayCacheService();
}
