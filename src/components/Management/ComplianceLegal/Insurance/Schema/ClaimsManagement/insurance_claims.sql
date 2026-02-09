-- Source: frontend\src\components\Management\ComplianceLegal\Insurance\ClaimsManagement.js
DROP TABLE IF EXISTS `insurance_claims`;
CREATE TABLE IF NOT EXISTS `insurance_claims` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `claim_id` VARCHAR(255) DEFAULT NULL,
    `policy_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `incident_date` DATE DEFAULT NULL,
    `claim_amount` INT DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `approved_amount` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
