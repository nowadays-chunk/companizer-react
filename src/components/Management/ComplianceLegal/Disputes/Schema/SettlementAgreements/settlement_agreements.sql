-- Source: frontend\src\components\Management\ComplianceLegal\Disputes\SettlementAgreements.js
DROP TABLE IF EXISTS `settlement_agreements`;
CREATE TABLE IF NOT EXISTS `settlement_agreements` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `settlement_id` VARCHAR(255) DEFAULT NULL,
    `dispute_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `settlement_date` DATE DEFAULT NULL,
    `amount` INT DEFAULT NULL,
    `terms` VARCHAR(255) DEFAULT NULL,
    `signed_by_plaintiff` VARCHAR(255) DEFAULT NULL,
    `signed_by_defendant` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
