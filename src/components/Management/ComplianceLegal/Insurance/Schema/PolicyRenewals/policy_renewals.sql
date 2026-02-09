-- Source: frontend\src\components\Management\ComplianceLegal\Insurance\PolicyRenewals.js
DROP TABLE IF EXISTS `policy_renewals`;
CREATE TABLE IF NOT EXISTS `policy_renewals` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `renewal_id` VARCHAR(255) DEFAULT NULL,
    `policy_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `renewal_date` DATE DEFAULT NULL,
    `new_premium` INT DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `notes` VARCHAR(255) DEFAULT NULL,
    `pe` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
