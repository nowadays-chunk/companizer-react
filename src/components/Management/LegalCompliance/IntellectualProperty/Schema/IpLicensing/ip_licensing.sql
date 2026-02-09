-- Source: frontend\src\components\Management\LegalCompliance\IntellectualProperty\IpLicensing.js
DROP TABLE IF EXISTS `ip_licensing`;
CREATE TABLE IF NOT EXISTS `ip_licensing` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `license_id` VARCHAR(255) DEFAULT NULL,
    `ip_asset_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `licensee` VARCHAR(255) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `end_date` DATE DEFAULT NULL,
    `royalty_rate` INT DEFAULT NULL,
    `territory` VARCHAR(255) DEFAULT NULL,
    `exclusivity` VARCHAR(255) DEFAULT NULL,
    `payment_terms` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
