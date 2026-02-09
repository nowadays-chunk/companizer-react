-- Source: frontend\src\components\Management\LogisticsSupplyChain\Shipping\FreightManagement.js
DROP TABLE IF EXISTS `freight_management`;
CREATE TABLE IF NOT EXISTS `freight_management` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `freight_id` VARCHAR(255) DEFAULT NULL,
    `carrier_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `mode` VARCHAR(100) DEFAULT NULL,
    `weight_kg` INT DEFAULT NULL,
    `volume_cbm` INT DEFAULT NULL,
    `origin` VARCHAR(255) DEFAULT NULL,
    `destination` VARCHAR(255) DEFAULT NULL,
    `estimated_cost` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
