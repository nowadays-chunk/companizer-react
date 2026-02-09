-- Source: frontend\src\components\Management\CustomerSupport\SupportTickets\ResolutionTimeTracking.js
DROP TABLE IF EXISTS `resolution_time_tracking`;
CREATE TABLE IF NOT EXISTS `resolution_time_tracking` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `tracking_id` VARCHAR(255) DEFAULT NULL,
    `ticket_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `start_time` DATE DEFAULT NULL,
    `end_time` DATE DEFAULT NULL,
    `duration_minutes` INT DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `agent_id` VARCHAR(255) DEFAULT NULL,
    `sla_target_minutes` INT DEFAULT NULL,
    `stage` VARCHAR(100) DEFAULT NULL,
    `hold_duration_minutes` INT DEFAULT NULL,
    `business_hours_only` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
