import { LightMyRequestResponse } from "fastify";
import app from "../../src/app";
import { Holiday } from "../../src/core/holiday/entity/holiday";
import { getPrismaClient } from "../../src/infra/prisma/client";
import { CreateData } from "../../src/infra/prisma/type";
import { HolidayFixture } from "../core/holiday/fixture/holiday.fixture";

export function 모든_공휴일을_저장하고_있다() {
  const prisma = getPrismaClient();
  const createData: CreateData<Holiday>[] = HolidayFixture().getAll();

  return prisma.holiday.createMany({
    data: createData,
  });
}

export function 모든_공휴일을_조회한다() {
  return app.inject({
    method: "GET",
    url: "/api/holiday",
  });
}

export function 모든_공휴일_조회_성공함(response: LightMyRequestResponse) {
  expect(response.statusCode).toBe(200);
  expect(response.body).not.toHaveLength(0);
}
