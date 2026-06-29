-- CreateTable
CREATE TABLE `Perfil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rut` VARCHAR(12) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `perfilId` INTEGER NOT NULL,

    UNIQUE INDEX `Usuario_rut_key`(`rut`),
    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoVehiculo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `valorDiario` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vehiculo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patente` VARCHAR(10) NOT NULL,
    `estado` VARCHAR(20) NOT NULL,
    `fotoUrl` VARCHAR(255) NOT NULL,
    `tipoId` INTEGER NOT NULL,

    UNIQUE INDEX `Vehiculo_patente_key`(`patente`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Arriendo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaInicio` DATETIME(3) NOT NULL,
    `fechaTermino` DATETIME(3) NOT NULL,
    `fechaEntrega` DATETIME(3) NULL,
    `fechaRecepcion` DATETIME(3) NULL,
    `fotosEntrega` TEXT NULL,
    `fotosRecepcion` TEXT NULL,
    `clienteRut` VARCHAR(12) NOT NULL,
    `clienteNombre` VARCHAR(100) NOT NULL,
    `vehiculoId` INTEGER NOT NULL,
    `usuarioId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_perfilId_fkey` FOREIGN KEY (`perfilId`) REFERENCES `Perfil`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vehiculo` ADD CONSTRAINT `Vehiculo_tipoId_fkey` FOREIGN KEY (`tipoId`) REFERENCES `TipoVehiculo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Arriendo` ADD CONSTRAINT `Arriendo_vehiculoId_fkey` FOREIGN KEY (`vehiculoId`) REFERENCES `Vehiculo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Arriendo` ADD CONSTRAINT `Arriendo_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
