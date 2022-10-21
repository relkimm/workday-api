import { FastifyPluginCallback } from "fastify";
import { getHolidayReader } from "../../../core/holiday/service/reader";
import { getHolidayMigrator } from "../../../external/holiday/service/migrator";

const holidayRoutes: FastifyPluginCallback = async (fastify, opts) => {
  fastify.get("/", async (request, reply) => {
    const holidayReader = getHolidayReader();
    const holidays = await holidayReader.get();
    return reply.send({
      holidays,
    });
  });

  fastify.get("/migrate", async (request, reply) => {
    const holidayMigrator = getHolidayMigrator();
    holidayMigrator.execute(2022, 100);
  });
};

export default holidayRoutes;
