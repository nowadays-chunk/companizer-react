-- Source: frontend\src\components\Management\RealEstatePropertyManagement\FacilitiesManagement\UtilityManagement.js
DROP TABLE IF EXISTS `utility_management`;
CREATE TABLE IF NOT EXISTS `utility_management` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `utility_id` VARCHAR(255) DEFAULT NULL,
    `property_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `utility_type` VARCHAR(100) DEFAULT NULL,
    `provider` VARCHAR(255) DEFAULT NULL,
    `account_number` VARCHAR(255) DEFAULT NULL,
    `billing_cycle` VARCHAR(255) DEFAULT NULL,
    `usage_metric` INT DEFAULT NULL,
    `last_bill_amount` INT DEFAULT NULL,
    `last_bill_date` DATE DEFAULT NULL,
    `ype` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
