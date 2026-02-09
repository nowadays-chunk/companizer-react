-- Source: frontend\src\components\Management\EnvironmentalSocialGovernance\EnergyManagement\EnergyAudits.js
DROP TABLE IF EXISTS `energy_audits`;
CREATE TABLE IF NOT EXISTS `energy_audits` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `audit_id` VARCHAR(255) DEFAULT NULL,
    `facility_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `audit_date` DATE DEFAULT NULL,
    `auditor` VARCHAR(255) DEFAULT NULL,
    `efficiency_rating` VARCHAR(255) DEFAULT NULL,
    `findings` VARCHAR(255) DEFAULT NULL,
    `recommendations` VARCHAR(255) DEFAULT NULL,
    `potential_savings` INT DEFAULT NULL,
    `compliance_status` VARCHAR(255) DEFAULT NULL,
    `report_document` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
