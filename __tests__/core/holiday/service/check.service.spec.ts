import { HolidayCheckService } from "../../../../src/core/holiday/service/check.service";
import { HolidayCacheSpy } from "../double/cache.spy";

describe("HolidayCheckService", () => {
  describe("isHoliday 함수는", () => {
    const holidayCacheSpy = HolidayCacheSpy();
    const sut = HolidayCheckService(holidayCacheSpy);

    test("공휴일인 경우, true 를 반환한다.", () => {
      // given
      const 삼일절 = new Date("2022-03-01");
      const 광복절 = new Date("2022-08-15");
      const 신정 = new Date("2022-01-01");
      const 공휴일들 = [삼일절, 광복절, 신정];
      // when & then
      공휴일들.map(async (공휴일) => {
        const result = await sut.isHoliday(공휴일);
        expect(result).toBe(true);
      });
    });

    test("공휴일이 아닌 경우, false 를 반환한다.", async () => {
      // given
      const 평일 = new Date("2022-10-28");
      // when
      const result = await sut.isHoliday(평일);
      // then
      expect(result).toBe(false);
    });
  });
});
