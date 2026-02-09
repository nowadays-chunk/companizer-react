-- Source: frontend\src\components\Management\EnvironmentalSocialGovernance\SustainabilityReports\CarbonFootprintTracking.js
DROP TABLE IF EXISTS `carbon_footprint_tracking`;
CREATE TABLE IF NOT EXISTS `carbon_footprint_tracking` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `tracking_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `reporting_period` VARCHAR(255) DEFAULT NULL,
    `scope_1_emissions` INT DEFAULT NULL,
    `scope_2_emissions` INT DEFAULT NULL,
    `scope_3_emissions` INT DEFAULT NULL,
    `total_emissions` INT DEFAULT NULL,
    `unit` VARCHAR(255) DEFAULT NULL,
    `calculation_method` VARCHAR(255) DEFAULT NULL,
    `verified_by` VARCHAR(255) DEFAULT NULL,
    `offset_purchased` INT DEFAULT NULL,
    `net_emissions` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
