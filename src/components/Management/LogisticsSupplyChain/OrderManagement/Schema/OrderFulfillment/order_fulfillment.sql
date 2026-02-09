-- Source: frontend\src\components\Management\LogisticsSupplyChain\OrderManagement\OrderFulfillment.js
DROP TABLE IF EXISTS `order_fulfillment`;
CREATE TABLE IF NOT EXISTS `order_fulfillment` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `fulfillment_id` VARCHAR(255) DEFAULT NULL,
    `order_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `picked_date` DATETIME DEFAULT NULL,
    `packed_date` DATETIME DEFAULT NULL,
    `shipped_date` DATETIME DEFAULT NULL,
    `warehouse_id` VARCHAR(255) DEFAULT NULL,
    `shipping_carrier` VARCHAR(255) DEFAULT NULL,
    `tracking_number` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
