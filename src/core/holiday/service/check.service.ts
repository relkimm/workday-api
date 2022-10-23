import { HolidayChecker } from "./checker";
import { getHolidayReader, HolidayReader } from "./reader";

function HolidayCheckService(holidayReader: HolidayReader): HolidayChecker {
  async function isHoliday(date: Date): Promise<boolean> {
    const holidays = await holidayReader.get();
    return holidays.some((holiday) => holiday.date === date);
  }

  return {
    isHoliday,
  };
}

const holidayReader = getHolidayReader();
const holidayCheckService = HolidayCheckService(holidayReader);

export function getHoldiayCheckService() {
  return holidayCheckService;
}
