export interface GetHolidaysRequest {
  year: number;
  limit?: number;
}

export interface GetHolidaysResponse {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: {
      items: {
        item: HolidayItemResponse[];
      };
      numOfRows: number;
      pageNo: number;
      totalCount: number;
    };
  };
}

export interface HolidayItemResponse {
  seq: number;
  locdate: number;
  dateKind: string;
  isHoliday: boolean;
  dateName: string;
}

export function parseLocdate(locdate: number): Date {
  const locdateString = locdate.toString();
  const year = locdateString.substring(0, 4);
  const month = locdateString.substring(4, 6);
  const day = locdateString.substring(6, 8);
  return new Date(`${year}-${month}-${day}`);
}
