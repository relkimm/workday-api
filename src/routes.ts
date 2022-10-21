import { FastifyPluginCallback } from "fastify";
import { getHolidayMigrator } from "./external/holiday/service/migrator";

const appRoutes: FastifyPluginCallback = async (fastify, opts) => {
  fastify.get("/migrate/holiday", (request, reply) => {
    const holidayMigrator = getHolidayMigrator();
    holidayMigrator.execute(2022, 100);
  });
};

export default appRoutes;
