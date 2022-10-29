import { Holiday } from "../../../../src/core/holiday/entity/holiday";
import { HolidayCacher } from "../../../../src/core/holiday/service/cacher";
import { HolidayFixture } from "../fixture/holiday.fixture";

export function HolidayCacheSpy(): HolidayCacher {
  const holidays = HolidayFixture().getAll();

  async function get(): Promise<Holiday[]> {
    return new Promise((resolve, reject) => {
      resolve(holidays);
    });
  }

  async function getByYear(year: number): Promise<Holiday[]> {
    return new Promise((resolve, reject) => {
      const holidaysOfYear = holidays.filter(
        (holiday) => holiday.year === year
      );
      resolve(holidaysOfYear);
    });
  }

  return {
    get,
    getByYear,
  };
}
