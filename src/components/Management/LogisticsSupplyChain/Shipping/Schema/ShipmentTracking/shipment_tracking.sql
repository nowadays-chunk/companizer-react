-- Source: frontend\src\components\Management\LogisticsSupplyChain\Shipping\ShipmentTracking.js
DROP TABLE IF EXISTS `shipment_tracking`;
CREATE TABLE IF NOT EXISTS `shipment_tracking` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `tracking_id` VARCHAR(255) DEFAULT NULL,
    `freight_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `timestamp` DATETIME DEFAULT NULL,
    `location` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(255) DEFAULT NULL,
    `coordinates` VARCHAR(255) DEFAULT NULL,
    `updated_by` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
