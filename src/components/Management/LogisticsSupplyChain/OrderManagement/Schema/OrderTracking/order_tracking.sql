-- Source: frontend\src\components\Management\LogisticsSupplyChain\OrderManagement\OrderTracking.js
DROP TABLE IF EXISTS `order_tracking`;
CREATE TABLE IF NOT EXISTS `order_tracking` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `tracking_id` VARCHAR(255) DEFAULT NULL,
    `order_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `current_location` VARCHAR(255) DEFAULT NULL,
    `status_update` VARCHAR(255) DEFAULT NULL,
    `update_time` DATETIME DEFAULT NULL,
    `carrier` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
