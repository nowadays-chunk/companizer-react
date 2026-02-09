-- Source: frontend\src\components\Management\EnvironmentalSocialGovernance\EnergyManagement\EnergySavingsTracking.js
DROP TABLE IF EXISTS `energy_savings_tracking`;
CREATE TABLE IF NOT EXISTS `energy_savings_tracking` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `tracking_id` VARCHAR(255) DEFAULT NULL,
    `initiative_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `month` VARCHAR(255) DEFAULT NULL,
    `year` INT DEFAULT NULL,
    `kwh_saved` INT DEFAULT NULL,
    `cost_saved` INT DEFAULT NULL,
    `baseline_usage` INT DEFAULT NULL,
    `actual_usage` INT DEFAULT NULL,
    `weather_adjustment` INT DEFAULT NULL,
    `notes` VARCHAR(255) DEFAULT NULL,
    `e` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
