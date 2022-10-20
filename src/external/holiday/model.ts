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
      items: ItemResponse[];
      numOfRows: number;
      pageNo: number;
      totalCount: number;
    };
  };
}

interface ItemResponse {
  seq: number;
  locdate: string;
  dateKind: string;
  isHoliday: boolean;
  dateName: string;
}
