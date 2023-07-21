-- CreateTable
CREATE TABLE `box_tv` (
    `id` VARCHAR(191) NOT NULL,
    `serial` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `destination` VARCHAR(191) NOT NULL,
    `batch` VARCHAR(191) NOT NULL,
    `fileName` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admin` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `admin_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
