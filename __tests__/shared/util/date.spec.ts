import { isSameDate } from "../../../src/shared/util/date";

describe("isSameDate 함수는", () => {
  const sut = isSameDate;

  test("같은 날짜인 경우, true 를 반환한다.", () => {
    // given
    const dateA = new Date("2022-10-28");
    const dateB = new Date("2022-10-28");
    // when
    const result = sut(dateA, dateB);
    // then
    expect(result).toBe(true);
  });

  test("다른 날짜인 경우, false 를 반환한다", () => {
    // given
    const dateA = new Date("2022-10-28");
    const dateB = new Date("2022-09-28");
    // when
    const result = sut(dateA, dateB);
    // then
    expect(result).toBe(false);
  });
});
