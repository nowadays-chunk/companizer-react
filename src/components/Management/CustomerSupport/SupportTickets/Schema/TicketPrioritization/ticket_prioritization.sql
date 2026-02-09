-- Source: frontend\src\components\Management\CustomerSupport\SupportTickets\TicketPrioritization.js
DROP TABLE IF EXISTS `ticket_prioritization`;
CREATE TABLE IF NOT EXISTS `ticket_prioritization` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `rule_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `rule_name` VARCHAR(255) DEFAULT NULL,
    `criteria_field` VARCHAR(255) DEFAULT NULL,
    `criteria_value` VARCHAR(255) DEFAULT NULL,
    `resulting_priority` VARCHAR(100) DEFAULT NULL,
    `weight` INT DEFAULT NULL,
    `is_active` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `last_updated_by` VARCHAR(255) DEFAULT NULL,
    `last_updated_date` DATE DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
