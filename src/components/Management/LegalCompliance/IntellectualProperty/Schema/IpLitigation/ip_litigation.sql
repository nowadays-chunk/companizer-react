-- Source: frontend\src\components\Management\LegalCompliance\IntellectualProperty\IpLitigation.js
DROP TABLE IF EXISTS `ip_litigation`;
CREATE TABLE IF NOT EXISTS `ip_litigation` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `litigation_id` VARCHAR(255) DEFAULT NULL,
    `ip_asset_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `case_number` VARCHAR(255) DEFAULT NULL,
    `opposing_party` VARCHAR(255) DEFAULT NULL,
    `court` VARCHAR(255) DEFAULT NULL,
    `filing_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `notes` VARCHAR(255) DEFAULT NULL,
    `legal_counsel` VARCHAR(255) DEFAULT NULL,
    `budget_spent` INT DEFAULT NULL,
    `outcome` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
