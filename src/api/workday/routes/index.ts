import { FastifyPluginCallback } from "fastify";
import { getWorkdayCalculator } from "../../../core/workday/service/calculator";
import { MinusRequest } from "../request/minus.request";
import { PlusRequest } from "../request/plus.request";
import { getWorkdayPlusUseCase } from "../usecase/plus.usecase";

const workdayRoutes: FastifyPluginCallback = async (fastify, opts) => {
  fastify.get("/plus", (request: PlusRequest, reply) => {
    const { date, plus } = request.query;
    const workdayPlusUseCase = getWorkdayPlusUseCase();
    const calculated = workdayPlusUseCase.execute(new Date(date), Number(plus));

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
