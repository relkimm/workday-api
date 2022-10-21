import { FastifyRequest } from "fastify";

export type MinusRequest = FastifyRequest<{
  Querystring: {
    date: string;
    minus: string;
  };
}>;
