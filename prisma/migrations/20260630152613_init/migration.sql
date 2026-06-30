/*
  Warnings:

  - Added the required column `anio` to the `Vehiculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marca` to the `Vehiculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelo` to the `Vehiculo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `vehiculo` ADD COLUMN `anio` INTEGER NOT NULL,
    ADD COLUMN `marca` VARCHAR(50) NOT NULL,
    ADD COLUMN `modelo` VARCHAR(50) NOT NULL;
