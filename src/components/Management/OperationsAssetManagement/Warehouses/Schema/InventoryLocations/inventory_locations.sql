-- Source: frontend\src\components\Management\OperationsAssetManagement\Warehouses\InventoryLocations.js
DROP TABLE IF EXISTS `inventory_locations`;
CREATE TABLE IF NOT EXISTS `inventory_locations` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `location_id` VARCHAR(255) DEFAULT NULL,
    `warehouse_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `zone` VARCHAR(255) DEFAULT NULL,
    `aisle` INT DEFAULT NULL,
    `rack` INT DEFAULT NULL,
    `shelf` INT DEFAULT NULL,
    `bin` INT DEFAULT NULL,
    `capacity_volume` INT DEFAULT NULL,
    `capacity_weight` INT DEFAULT NULL,
    `is_occupied` VARCHAR(255) DEFAULT NULL,
    `is_refrigerated` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
