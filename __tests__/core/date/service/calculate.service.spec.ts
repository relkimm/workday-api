import { getDateCalculateService } from "../../../../src/core/date/service/calculate.service";

describe("DateCalculateService", () => {
  const sut = getDateCalculateService();

  describe("plus 함수는", () => {
    test("플러스한 날짜를 반환한다.", () => {
      // given
      const dates = [
        new Date("2022-10-01"),
        new Date("2022-10-03"),
        new Date("2022-10-10"),
      ];

      const expects = [
        new Date("2022-10-03"),
        new Date("2022-10-05"),
        new Date("2022-10-12"),
      ];

      // when & then
      dates.map((date, index) => {
        const result = sut.plus(date, 2);
        const expected = expects[index];
        expect(result).toStrictEqual(expected);
      });
    });
  });

  describe("minus 함수는", () => {
    test("마이너스한 날짜를 반환한다.", () => {
      // given
      const dates = [
        new Date("2022-10-12"),
        new Date("2022-10-07"),
        new Date("2022-10-01"),
      ];

      const expects = [
        new Date("2022-10-09"),
        new Date("2022-10-04"),
        new Date("2022-09-28"),
      ];

      // when & then
      dates.map((date, index) => {
        const result = sut.minus(date, 3);
        const expected = expects[index];
        expect(result).toStrictEqual(expected);
      });
    });
  });
});
