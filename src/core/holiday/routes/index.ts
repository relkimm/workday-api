import { FastifyPluginCallback } from "fastify";
import { getHolidayReader } from "../service/reader";

const holidayRoutes: FastifyPluginCallback = async (fastify, opts) => {
  fastify.get("/", async (request, reply) => {
    const holidayReader = getHolidayReader();
    const holidays = await holidayReader.get();
    return reply.send({
      holidays,
    });
  });
};

export default holidayRoutes;
