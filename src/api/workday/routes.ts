import { FastifyPluginCallback } from "fastify";
import { plusDate } from "../../shared/util/date";
import { PlusRequest } from "./request/plus.request";

const workdayRoutes: FastifyPluginCallback = async (fastify, opts) => {
  fastify.get("/plus", (request: PlusRequest, reply) => {
    const { date, plus } = request.query;
    const calculatedDate = plusDate(new Date(date), Number(plus));

    return reply.send({
      date: calculatedDate,
    });
  });
};

export default workdayRoutes;
