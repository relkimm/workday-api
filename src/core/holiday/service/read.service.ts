import { Holiday } from "../entity/holiday";
import {
  getHolidayRepository,
  HolidayRepository,
} from "../entity/repository/holiday";
import { HolidayReader } from "./reader";

export function HolidayReadService(
  holidayRepository: HolidayRepository
): HolidayReader {
  async function get(): Promise<Holiday[]> {
    return holidayRepository.findAll();
  }

  return {
    get,
  };
}

const holidayRepository = getHolidayRepository();
const holidayReadService = HolidayReadService(holidayRepository);

export function getHolidayReadService() {
  return holidayReadService;
}
