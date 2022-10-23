import { Holiday } from "@prisma/client";
import { getHolidayCacheService } from "./cache.service";

export interface HolidayCacher {
  get: () => Promise<Holiday[]>;
}

export function getHolidayCacher(): HolidayCacher {
  return getHolidayCacheService();
}
