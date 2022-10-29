import { Holiday } from "../../../../src/core/holiday/entity/holiday";
import { HolidayCacheService } from "../../../../src/core/holiday/service/cache.service";
import { getHolidayReader } from "../../../../src/core/holiday/service/reader";
import { HolidayFixture } from "../fixture/holiday.fixture";

describe("HolidayCacheService", () => {
  describe("get 함수는", () => {
    const mockHolidayReader = getHolidayReader();
    const sut = HolidayCacheService(mockHolidayReader);

    test("캐싱하고 있는 holidays 를 반환한다.", async () => {
      // given
      const holidays = HolidayFixture().getAll();
      mockHolidayReader.get = jest.fn().mockResolvedValue(holidays);

      // when 3번 호출
      await sut.get();
      await sut.get();
      const result = await sut.get();

      // then
      expect(mockHolidayReader.get).toBeCalledTimes(1);
      expect(result).toStrictEqual(holidays);
    });
  });

  describe("getByYear 함수는", () => {
    const mockHolidayReader = getHolidayReader();
    const sut = HolidayCacheService(mockHolidayReader);

    test("해당 년도의 캐싱하고 있는 holidays 를 반환한다.", async () => {
      // given
      const holidays: Holiday[] = [
        {
          id: 0,
          name: "신정",
          year: 2022,
          month: 1,
          date: new Date("2022-01-01"),
          isWeekend: true,
        },
        {
          id: 0,
          name: "신정",
          year: 2021,
          month: 1,
          date: new Date("2022-01-01"),
          isWeekend: true,
        },
        {
          id: 0,
          name: "신정",
          year: 2020,
          month: 1,
          date: new Date("2022-01-01"),
          isWeekend: true,
        },
      ];
      mockHolidayReader.get = jest.fn().mockResolvedValue(holidays);

      // when
      await sut.getByYear(2022);
      await sut.getByYear(2022);
      const result = await sut.getByYear(2022);

      // then
      expect(mockHolidayReader.get).toBeCalledTimes(1);
      expect(result).toHaveLength(1);
      const 공휴일_2022 = holidays.filter((holiday) => holiday.year === 2022);
      expect(result).toStrictEqual(공휴일_2022);
    });
  });
});
