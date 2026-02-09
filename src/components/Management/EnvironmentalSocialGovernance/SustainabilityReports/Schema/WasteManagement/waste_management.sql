-- Source: frontend\src\components\Management\EnvironmentalSocialGovernance\SustainabilityReports\WasteManagement.js
DROP TABLE IF EXISTS `waste_management`;
CREATE TABLE IF NOT EXISTS `waste_management` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `record_id` VARCHAR(255) DEFAULT NULL,
    `facility_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `waste_type` VARCHAR(100) DEFAULT NULL,
    `weight_kg` INT DEFAULT NULL,
    `collection_date` DATE DEFAULT NULL,
    `disposal_method` VARCHAR(100) DEFAULT NULL,
    `vendor` VARCHAR(255) DEFAULT NULL,
    `cost` INT DEFAULT NULL,
    `manifest_number` VARCHAR(255) DEFAULT NULL,
    `diversion_rate` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
