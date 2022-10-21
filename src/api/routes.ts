import { FastifyPluginCallback } from "fastify";
import holidayRoutes from "./holiday/routes";
import workdayRoutes from "./workday/routes";

const apiRoutes: FastifyPluginCallback = async (fastify, opts) => {
  fastify.register(holidayRoutes, {
    prefix: "/holiday",
  });
  fastify.register(workdayRoutes, {
    prefix: "/workday",
  });
};

export default apiRoutes;
