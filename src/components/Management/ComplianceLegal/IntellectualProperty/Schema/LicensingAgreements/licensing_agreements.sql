-- Source: frontend\src\components\Management\ComplianceLegal\IntellectualProperty\LicensingAgreements.js
DROP TABLE IF EXISTS `licensing_agreements`;
CREATE TABLE IF NOT EXISTS `licensing_agreements` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `license_id` VARCHAR(255) DEFAULT NULL,
    `ip_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `licensee` VARCHAR(255) DEFAULT NULL,
    `licensor` VARCHAR(255) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `end_date` DATE DEFAULT NULL,
    `royalty_rate` INT DEFAULT NULL,
    `territory` VARCHAR(255) DEFAULT NULL,
    `exclusivity` VARCHAR(255) DEFAULT NULL,
    `annual_minimum` INT DEFAULT NULL,
    `currency` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
