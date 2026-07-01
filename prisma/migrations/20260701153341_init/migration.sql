/*
  Warnings:

  - Added the required column `valorArriendo` to the `Arriendo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `arriendo` ADD COLUMN `valorArriendo` INTEGER NOT NULL;
