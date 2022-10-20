import "./config";
import AppConfig from "./config";
import fastify, { FastifyListenOptions } from "fastify";
import { getHolidayClient } from "./external/holiday/api";

const app = fastify();
const appConfig = AppConfig();

const options: FastifyListenOptions = {
  port: appConfig.port,
};

app.get("/", async (request, reply) => {
  const holidayClient = getHolidayClient();
  const result = await holidayClient.getHolidays({
    year: 2022,
    limit: 100,
  });
  reply.send(result);
});

app.listen(options, (error, address) => {
  console.log(`App is running on PORT ${options.port}`);
});
