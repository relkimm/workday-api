import { FastifyPluginCallback } from "fastify";
import holidayRoutes from "./core/holiday/routes";
import { getHolidayMigrator } from "./external/holiday/service/migrator";

const appRoutes: FastifyPluginCallback = async (fastify, opts) => {
  fastify.get("/migrate/holiday", (request, reply) => {
    const holidayMigrator = getHolidayMigrator();
    holidayMigrator.execute(2022, 100);
  });
  fastify.register(holidayRoutes, {
    prefix: "/holiday",
  });
};

export default appRoutes;
