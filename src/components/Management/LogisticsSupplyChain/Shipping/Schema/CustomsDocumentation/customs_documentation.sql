-- Source: frontend\src\components\Management\LogisticsSupplyChain\Shipping\CustomsDocumentation.js
DROP TABLE IF EXISTS `customs_documentation`;
CREATE TABLE IF NOT EXISTS `customs_documentation` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `doc_id` VARCHAR(255) DEFAULT NULL,
    `shipment_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `doc_type` VARCHAR(100) DEFAULT NULL,
    `declaration_date` DATE DEFAULT NULL,
    `customs_value` INT DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `reference_number` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
