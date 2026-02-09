-- Source: frontend\src\components\Management\ComplianceLegal\Contracts\ContractRenewalReminders.js
DROP TABLE IF EXISTS `contract_renewal_reminders`;
CREATE TABLE IF NOT EXISTS `contract_renewal_reminders` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `reminder_id` VARCHAR(255) DEFAULT NULL,
    `contract_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `reminder_date` DATE DEFAULT NULL,
    `message` VARCHAR(255) DEFAULT NULL,
    `recipient_email` VARCHAR(255) DEFAULT NULL,
    `is_sent` VARCHAR(255) DEFAULT NULL,
    `days_before_expiry` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
