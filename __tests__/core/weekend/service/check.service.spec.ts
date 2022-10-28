import { getWeekendCheckService } from "../../../../src/core/weekend/service/check.service";

describe("WeekendCheckService", () => {
  describe("isWeekend 함수는", () => {
    const sut = getWeekendCheckService();

    test("주말인 경우, true 를 반환한다.", () => {
      // given
      const 토요일 = new Date("2022-10-29");
      const 일요일 = new Date("2022-10-30");
      const 주말들 = [토요일, 일요일];
      // when & then
      주말들.map((주말) => {
        const result = sut.isWeekend(주말);
        expect(result).toBe(true);
      });
    });

    test("평일인 경우, false 를 반환한다.", () => {
      // given
      const 목요일 = new Date("2022-10-27");
      const 금요일 = new Date("2022-10-28");
      const 평일들 = [목요일, 금요일];
      // when & then
      평일들.map((평일) => {
        const result = sut.isWeekend(평일);
        expect(result).toBe(false);
      });
    });
  });
});
