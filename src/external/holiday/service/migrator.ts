import { Holiday, PrismaClient } from "@prisma/client";
import { CreateData } from "../../../shared/type/prisma";
import { isWeekend } from "../../../shared/util/date";
import { getHolidayClient } from "../api";
import { HolidayItemResponse, parseLocdate } from "../api/model";

function HolidayMigrator() {
  const prisma = new PrismaClient();
  const holidayClient = getHolidayClient();

  function execute(year: number, limit: number) {
    holidayClient
      .getHolidays({
        year,
        limit,
      })
      .then(async (response) => {
        const { item } = response.response.body.items;
        const createData = getCreateData(item);

        prisma.holiday
          .createMany({
            data: createData,
            skipDuplicates: true,
          })
          .then((result) => {
            console.info(
              "Migration of Holiday Data is Success.",
              "result:",
              result
            );
          })
          .catch((error) => {
            console.error(
              "Migration of Holiday Data is Failed.",
              "error:",
              error
            );
          });
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

const hilidayMigrator = HolidayMigrator();

export function getHolidayMigrator() {
  return hilidayMigrator;
}
