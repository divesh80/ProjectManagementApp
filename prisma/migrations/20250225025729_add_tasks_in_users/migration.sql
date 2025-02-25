/*
  Warnings:

  - You are about to drop the column `assignedTo` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `assignedToId` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "assignedTo",
ADD COLUMN     "assignedToId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
