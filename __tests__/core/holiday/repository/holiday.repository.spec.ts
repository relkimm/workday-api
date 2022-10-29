import { Holiday } from "../../../../src/core/holiday/entity/holiday";
import { HolidayPrismaRepository } from "../../../../src/core/holiday/entity/repository/holiday.repository";
import { getPrismaClient } from "../../../../src/infra/prisma/client";
import { CreateData } from "../../../../src/infra/prisma/type";
import { HolidayFixture } from "../fixture/holiday.fixture";

describe("HolidayPrismaRepository", () => {
  const prisma = getPrismaClient();

  afterEach(async () => {
    await prisma.holiday.deleteMany({});
  });

  describe("saveAll 함수는", () => {
    const sut = HolidayPrismaRepository();

    test("holiday 테이블에 공휴일 데이터를 여러 개 저장할 수 있다.", async () => {
      // given
      const createData: CreateData<Holiday>[] = HolidayFixture().getAll();
      // when
      await sut.saveAll(createData);
      // then
      const result = await sut.findAll();
      expect(result).toHaveLength(3);
    });
  });

  describe("findAll 함수는", () => {
    const sut = HolidayPrismaRepository();

    test("holiday 테이블의 모든 공휴일 데이터를 조회한다.", async () => {
      // given
      const createData: CreateData<Holiday>[] = HolidayFixture().getAll();
      await sut.saveAll(createData);
      // when
      const result = await sut.findAll();
      // then
      expect(result).toHaveLength(3);
    });
  });
});
