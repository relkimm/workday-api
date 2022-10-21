import "./config";
import AppConfig from "./config";
import Fastify, { FastifyListenOptions } from "fastify";
import { getHolidayMigrator } from "./external/holiday/service/migrator";

const app = Fastify({
  logger: true,
});
const appConfig = AppConfig();

const options: FastifyListenOptions = {
  host: appConfig.host,
  port: appConfig.port,
};

app.get("/migrate/holiday", async (request, reply) => {
  const holidayMigrator = getHolidayMigrator();
  holidayMigrator.execute(2022, 100);
});

app.listen(options, (error, address) => {
  console.log(`App is running on ${options.host}:${options.port}`);
});
