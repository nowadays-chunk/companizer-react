-- Source: frontend\src\components\Management\LegalCompliance\ComplianceObligations\ComplianceDeadlines.js
DROP TABLE IF EXISTS `compliance_deadlines`;
CREATE TABLE IF NOT EXISTS `compliance_deadlines` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `deadline_id` VARCHAR(255) DEFAULT NULL,
    `obligation_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `due_date` DATE DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `assigned_to` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `priority` VARCHAR(100) DEFAULT NULL,
    `reminder_days` INT DEFAULT NULL,
    `completion_date` DATE DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
