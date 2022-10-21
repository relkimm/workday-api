/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `Holiday` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Holiday_date_key" ON "Holiday"("date");
