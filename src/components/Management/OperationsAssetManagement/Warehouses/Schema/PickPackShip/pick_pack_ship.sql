-- Source: frontend\src\components\Management\OperationsAssetManagement\Warehouses\PickPackShip.js
DROP TABLE IF EXISTS `pick_pack_ship`;
CREATE TABLE IF NOT EXISTS `pick_pack_ship` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `pps_id` VARCHAR(255) DEFAULT NULL,
    `order_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `stage` VARCHAR(100) DEFAULT NULL,
    `timestamp` VARCHAR(255) DEFAULT NULL,
    `operator` VARCHAR(255) DEFAULT NULL,
    `items_processed` INT DEFAULT NULL,
    `duration_minutes` INT DEFAULT NULL,
    `errors_logged` INT DEFAULT NULL,
    `package_weight` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
