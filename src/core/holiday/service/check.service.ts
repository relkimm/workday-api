import { isSameDate } from "../../../shared/util/date";
import { getHolidayCacher, HolidayCacher } from "./cacher";
import { HolidayChecker } from "./checker";

export function HolidayCheckService(
  HolidayCacher: HolidayCacher
): HolidayChecker {
  async function isHoliday(date: Date): Promise<boolean> {
    const year = date.getFullYear();
    const holidays = await HolidayCacher.getByYear(year);
    return holidays.some((holiday) => isSameDate(holiday.date, date));
  }

  return {
    isHoliday,
  };
}

const holidayCacher = getHolidayCacher();
const holidayCheckService = HolidayCheckService(holidayCacher);

export function getHoldiayCheckService() {
  return holidayCheckService;
}
