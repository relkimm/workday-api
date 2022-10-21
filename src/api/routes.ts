import { FastifyPluginCallback } from "fastify";
import holidayRoutes from "./holiday/routes";

const apiRoutes: FastifyPluginCallback = async (fastify, opts) => {
  fastify.register(holidayRoutes, {
    prefix: "/holiday",
  });
};

export default apiRoutes;
