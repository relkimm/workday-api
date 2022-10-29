import { PrismaClient } from "@prisma/client";
import { CreateData } from "../../../../shared/type/prisma";
import { Holiday } from "../holiday";
import { HolidayRepository } from "./holiday";

export function HolidayPrismaRepository(): HolidayRepository {
  const prisma = new PrismaClient();

  function findAll(): Promise<Holiday[]> {
    return prisma.holiday.findMany();
  }

  function saveAll(data: CreateData<Holiday>[]): Promise<void> {
    return prisma.holiday
      .createMany({
        data,
        skipDuplicates: true,
      })
      .then((result) => {
        console.info(
          "Saving of All Holiday Data is Success.",
          "result:",
          result
        );
      })
      .catch((error) => {
        console.error("Saving of All Holiday Data is Failed.", "error:", error);
      });
  }

  return {
    findAll,
    saveAll,
  };
}

const holidayPrismaRepository = HolidayPrismaRepository();

export function getHolidayPrismaRepository() {
  return holidayPrismaRepository;
}
