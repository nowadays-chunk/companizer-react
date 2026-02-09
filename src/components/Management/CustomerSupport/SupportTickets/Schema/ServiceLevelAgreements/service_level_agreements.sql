-- Source: frontend\src\components\Management\CustomerSupport\SupportTickets\ServiceLevelAgreements.js
DROP TABLE IF EXISTS `service_level_agreements`;
CREATE TABLE IF NOT EXISTS `service_level_agreements` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `sla_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `sla_name` VARCHAR(255) DEFAULT NULL,
    `priority_level` VARCHAR(100) DEFAULT NULL,
    `response_time_target_min` INT DEFAULT NULL,
    `resolution_time_target_hour` INT DEFAULT NULL,
    `tags` VARCHAR(100) DEFAULT NULL,
    `business_hours_start` VARCHAR(255) DEFAULT NULL,
    `business_hours_end` VARCHAR(255) DEFAULT NULL,
    `support_timezone` VARCHAR(255) DEFAULT NULL,
    `penalty_per_breach` INT DEFAULT NULL,
    `escalation_policy` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `type` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
