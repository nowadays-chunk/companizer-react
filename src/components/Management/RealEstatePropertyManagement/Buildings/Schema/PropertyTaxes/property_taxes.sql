-- Source: frontend\src\components\Management\RealEstatePropertyManagement\Buildings\PropertyTaxes.js
DROP TABLE IF EXISTS `property_taxes`;
CREATE TABLE IF NOT EXISTS `property_taxes` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `tax_id` VARCHAR(255) DEFAULT NULL,
    `property_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `year` INT DEFAULT NULL,
    `amount_due` INT DEFAULT NULL,
    `amount_paid` INT DEFAULT NULL,
    `due_date` DATE DEFAULT NULL,
    `paid_date` DATE DEFAULT NULL,
    `authority` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `receipt_url` VARCHAR(255) DEFAULT NULL,
    `assessed_value` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
