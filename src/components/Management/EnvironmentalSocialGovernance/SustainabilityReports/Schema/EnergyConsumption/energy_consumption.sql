-- Source: frontend\src\components\Management\EnvironmentalSocialGovernance\SustainabilityReports\EnergyConsumption.js
DROP TABLE IF EXISTS `energy_consumption`;
CREATE TABLE IF NOT EXISTS `energy_consumption` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `consumption_id` VARCHAR(255) DEFAULT NULL,
    `facility_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `meter_reading` INT DEFAULT NULL,
    `reading_date` DATE DEFAULT NULL,
    `utility_provider` VARCHAR(255) DEFAULT NULL,
    `energy_type` VARCHAR(100) DEFAULT NULL,
    `usage_amount` INT DEFAULT NULL,
    `unit` VARCHAR(255) DEFAULT NULL,
    `cost` INT DEFAULT NULL,
    `peak_demand` INT DEFAULT NULL,
    `is_estimated` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
