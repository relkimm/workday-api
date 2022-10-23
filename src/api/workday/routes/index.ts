import { FastifyPluginCallback } from "fastify";
import { MinusRequest } from "../request/minus.request";
import { PlusRequest } from "../request/plus.request";
import { getWorkdayMinusUseCase } from "../usecase/minus.usecase";
import { getWorkdayPlusUseCase } from "../usecase/plus.usecase";

const workdayRoutes: FastifyPluginCallback = async (fastify, opts) => {
  fastify.get("/plus", async (request: PlusRequest, reply) => {
    const { date, plus } = request.query;
    const workdayPlusUseCase = getWorkdayPlusUseCase();
    const calculated = await workdayPlusUseCase.execute(
      new Date(date),
      Number(plus)
    );

    return reply.send({
      date: calculated,
    });
  });

  fastify.get("/minus", async (request: MinusRequest, reply) => {
    const { date, minus } = request.query;
    const workdayMinusUseCase = getWorkdayMinusUseCase();
    const calculated = await workdayMinusUseCase.execute(
      new Date(date),
      Number(minus)
    );

    return reply.send({
      date: calculated,
    });
  });
};

export default workdayRoutes;
