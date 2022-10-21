/*
  Warnings:

  - You are about to alter the column `name` on the `Holiday` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE "Holiday" ALTER COLUMN "name" SET DATA TYPE VARCHAR(50);
