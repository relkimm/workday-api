import { FastifyRequest } from "fastify";

export type PlusRequest = FastifyRequest<{
  Querystring: {
    date: string;
    plus: string;
  };
}>;
