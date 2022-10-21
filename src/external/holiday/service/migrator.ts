import { Holiday, PrismaClient } from "@prisma/client";
import { getHolidayClient } from "../api";
import { HolidayItemResponse, parseLocdate } from "../api/model";

type HolidayCreateData = Omit<Holiday, "id">;

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
        const createData = mapToCreate(item);

        const result = await prisma.holiday.createMany({
          data: createData,
        });

        console.info("result", result);
      });
  }

  function mapToCreate(items: HolidayItemResponse[]): HolidayCreateData[] {
    return items.map((item) => {
      const { dateName, locdate } = item;

      const date = parseLocdate(locdate);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      return {
        name: dateName,
        year,
        month,
        date,
        isWeekend,
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
