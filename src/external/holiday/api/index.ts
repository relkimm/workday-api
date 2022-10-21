import axios from "axios";
import AppConfig from "../../../config";
import { GetHolidaysRequest, GetHolidaysResponse } from "./model";

interface HolidayApi {
  getHolidays: (request: GetHolidaysRequest) => Promise<GetHolidaysResponse>;
}

function HolidayClient(): HolidayApi {
  const { openApi } = AppConfig();

  function getHolidays(
    request: GetHolidaysRequest
  ): Promise<GetHolidaysResponse> {
    const { year, limit = 100 } = request;

    const url = `${openApi.url}/getRestDeInfo`;
    const params = {
      ServiceKey: openApi.key,
      solYear: year,
      numOfRows: limit,
    };

    return axios
      .get<GetHolidaysResponse>(url, {
        params,
      })
      .then((response) => response.data);
  }

  return {
    getHolidays,
  };
}

const holidayClient = HolidayClient();

export function getHolidayClient() {
  return holidayClient;
}
