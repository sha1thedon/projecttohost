/*
  Warnings:

  - You are about to drop the column `flashcardsetId` on the `Flashcard` table. All the data in the column will be lost.
  - Added the required column `flashcardSetId` to the `Flashcard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Flashcard` DROP COLUMN `flashcardsetId`,
    ADD COLUMN `flashcardSetId` VARCHAR(191) NOT NULL;
