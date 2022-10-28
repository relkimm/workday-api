import { Holiday } from "../../../../src/core/holiday/entity/holiday";
import { getHolidayRepository } from "../../../../src/core/holiday/entity/repository/holiday";
import { HolidayReadService } from "../../../../src/core/holiday/service/read.service";
import { HolidayFixture } from "../fixture/holiday.fixture";

describe("HolidayReadService", () => {
  describe("get 함수는", () => {
    const mockHolidayRepository = getHolidayRepository();
    const sut = HolidayReadService(mockHolidayRepository);

    test("모든 공휴일을 조회한다.", async () => {
      // given
      const holidays = HolidayFixture().getAll();
      mockHolidayRepository.findAll = jest.fn().mockResolvedValue(holidays);
      // when
      const result = await sut.get();
      // then
      expect(result).toStrictEqual(holidays);
    });
  });
});
