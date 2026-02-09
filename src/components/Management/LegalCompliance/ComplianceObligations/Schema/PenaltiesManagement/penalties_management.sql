-- Source: frontend\src\components\Management\LegalCompliance\ComplianceObligations\PenaltiesManagement.js
DROP TABLE IF EXISTS `penalties_management`;
CREATE TABLE IF NOT EXISTS `penalties_management` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `penalty_id` VARCHAR(255) DEFAULT NULL,
    `obligation_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `amount` INT DEFAULT NULL,
    `currency` VARCHAR(255) DEFAULT NULL,
    `date_incurred` DATE DEFAULT NULL,
    `reason` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `issuing_authority` VARCHAR(255) DEFAULT NULL,
    `remediation_actions` VARCHAR(255) DEFAULT NULL,
    `ype` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
