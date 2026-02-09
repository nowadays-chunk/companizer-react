-- Source: frontend\src\components\Management\OperationsAssetManagement\SupplyChain\OrderFulfillment.js
DROP TABLE IF EXISTS `order_fulfillment_ops`;
CREATE TABLE IF NOT EXISTS `order_fulfillment_ops` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `fulfillment_id` VARCHAR(255) DEFAULT NULL,
    `order_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `completion_date` DATE DEFAULT NULL,
    `warehouse_id` VARCHAR(255) DEFAULT NULL,
    `shipping_method` VARCHAR(255) DEFAULT NULL,
    `tracking_number` VARCHAR(255) DEFAULT NULL,
    `packed_by` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
