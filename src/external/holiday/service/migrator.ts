import { Holiday } from "../../../core/holiday/entity/holiday";
import {
  getHolidayRepository,
  HolidayRepository,
} from "../../../core/holiday/entity/repository/holiday";
import { CreateData } from "../../../shared/type/prisma";
import { isWeekend } from "../../../shared/util/date";
import { getHolidayApi, HolidayApi } from "../api";
import { HolidayItemResponse, parseLocdate } from "../api/model";

function HolidayMigrator(
  holidayApi: HolidayApi,
  holidayRepository: HolidayRepository
) {
  function execute(year: number, limit: number) {
    holidayApi
      .getHolidays({
        year,
        limit,
      })
      .then((response) => {
        const { item } = response.response.body.items;
        const createData = getCreateData(item);
        holidayRepository.saveAll(createData);
      });
  }

  function getCreateData(items: HolidayItemResponse[]): CreateData<Holiday>[] {
    return items.map((item) => {
      const { dateName, locdate } = item;
      const holidayDate = parseLocdate(locdate);

      return {
        name: dateName,
        year: holidayDate.getFullYear(),
        month: holidayDate.getMonth() + 1,
        date: holidayDate,
        isWeekend: isWeekend(holidayDate),
      };
    });
  }

  return {
    execute,
  };
}

const holidayApi = getHolidayApi();
const holidayRepository = getHolidayRepository();
const holidayMigrator = HolidayMigrator(holidayApi, holidayRepository);

export function getHolidayMigrator() {
  return holidayMigrator;
}
