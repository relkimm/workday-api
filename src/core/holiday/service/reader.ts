import { Holiday } from "@prisma/client";
import { getHolidayReadService } from "./read.service";

export interface HolidayReader {
  get: () => Promise<Holiday[]>;
}

export function getHolidayReader(): HolidayReader {
  return getHolidayReadService();
}
