-- Source: frontend\src\components\Management\ComplianceLegal\IntellectualProperty\TrademarkRegistration.js
DROP TABLE IF EXISTS `trademark_registration`;
CREATE TABLE IF NOT EXISTS `trademark_registration` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `registration_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `trademark_name` VARCHAR(255) DEFAULT NULL,
    `registration_number` VARCHAR(255) DEFAULT NULL,
    `class_codes` VARCHAR(255) DEFAULT NULL,
    `filing_date` DATE DEFAULT NULL,
    `registration_date` DATE DEFAULT NULL,
    `owner` VARCHAR(255) DEFAULT NULL,
    `jurisdiction` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `renewal_due_date` DATE DEFAULT NULL,
    `image_url` VARCHAR(255) DEFAULT NULL,
    `attorney_name` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
