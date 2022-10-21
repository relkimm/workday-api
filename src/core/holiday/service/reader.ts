import { Holiday } from "@prisma/client";
import { getHolidayCacheService } from "./cache.service";

export interface HolidayReader {
  get: () => Promise<Holiday[]>;
}

export function getHolidayReader(): HolidayReader {
  return getHolidayCacheService();
}
