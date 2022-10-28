export function HolidayFixture() {
  function getAll() {
    return [
      {
        id: 0,
        name: "삼일절",
        year: 2022,
        month: 3,
        date: new Date("2022-03-01"),
        isWeekend: false,
      },
      {
        id: 1,
        name: "광복절",
        year: 2022,
        month: 3,
        date: new Date("2022-08-15"),
        isWeekend: false,
      },
      {
        id: 2,
        name: "신정",
        year: 2022,
        month: 1,
        date: new Date("2022-01-01"),
        isWeekend: true,
      },
    ];
  }

  return {
    getAll,
  };
}
