-- Source: frontend\src\components\Management\CustomerSupport\ServiceContracts\WarrantyManagement.js
DROP TABLE IF EXISTS `warranty_management`;
CREATE TABLE IF NOT EXISTS `warranty_management` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `warranty_id` VARCHAR(255) DEFAULT NULL,
    `product_id` VARCHAR(255) DEFAULT NULL,
    `customer_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `serial_number` VARCHAR(255) DEFAULT NULL,
    `purchase_date` DATE DEFAULT NULL,
    `expiry_date` DATE DEFAULT NULL,
    `warranty_type` VARCHAR(100) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
