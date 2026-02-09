-- Source: frontend\src\components\Management\EnvironmentalSocialGovernance\EnergyManagement\RenewableEnergyInitiatives.js
DROP TABLE IF EXISTS `renewable_energy_initiatives`;
CREATE TABLE IF NOT EXISTS `renewable_energy_initiatives` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `initiative_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `name` VARCHAR(255) DEFAULT NULL,
    `type` VARCHAR(100) DEFAULT NULL,
    `capacity_kw` INT DEFAULT NULL,
    `installation_date` DATE DEFAULT NULL,
    `location` VARCHAR(255) DEFAULT NULL,
    `installer` VARCHAR(255) DEFAULT NULL,
    `investment_cost` INT DEFAULT NULL,
    `annual_output_kwh` INT DEFAULT NULL,
    `maintenance_schedule` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
