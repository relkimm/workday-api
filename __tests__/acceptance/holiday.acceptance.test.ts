import { getPrismaClient } from "../../src/infra/prisma/client";

import {
  모든_공휴일을_저장하고_있다,
  모든_공휴일을_조회한다,
  모든_공휴일_조회_성공함,
} from "./holiday.acceptance.step";

describe("공휴일 인수 테스트", () => {
  const prisma = getPrismaClient();

  afterEach(async () => {
    await prisma.holiday.deleteMany({});
  });

  test("사용자는 모든 공휴일을 조회할 수 있다.", async () => {
    await 모든_공휴일을_저장하고_있다();
    모든_공휴일을_조회한다().then(모든_공휴일_조회_성공함);
  });
});
