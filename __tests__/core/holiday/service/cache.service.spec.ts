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
});
