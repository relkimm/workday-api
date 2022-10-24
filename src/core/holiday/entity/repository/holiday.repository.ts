import { PrismaClient } from "@prisma/client";
import { CreateData } from "../../../../shared/type/prisma";
import { Holiday } from "../holiday";
import { HolidayRepository } from "./holiday";

function HolidayPrismaRepository(): HolidayRepository {
  const prisma = new PrismaClient();

  async function findAll(): Promise<Holiday[]> {
    return prisma.holiday.findMany();
  }

  async function saveAll(data: CreateData<Holiday>[]): Promise<void> {
    prisma.holiday
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
