import { FastifyPluginCallback } from "fastify";
import { getWorkdayCalculator } from "../../core/workday/service/calculator";
import { MinusRequest } from "./request/minus.request";
import { PlusRequest } from "./request/plus.request";

const workdayRoutes: FastifyPluginCallback = async (fastify, opts) => {
  fastify.get("/plus", (request: PlusRequest, reply) => {
    const { date, plus } = request.query;
    const workdayCalculator = getWorkdayCalculator();
    const calculated = workdayCalculator.plus(new Date(date), Number(plus));

    return reply.send({
      date: calculated,
    });
  });

  fastify.get("/minus", (request: MinusRequest, reply) => {
    const { date, minus } = request.query;
    const workdayCalculator = getWorkdayCalculator();
    const calculated = workdayCalculator.minus(new Date(date), Number(minus));

    return reply.send({
      date: calculated,
    });
  });
};

export default workdayRoutes;
