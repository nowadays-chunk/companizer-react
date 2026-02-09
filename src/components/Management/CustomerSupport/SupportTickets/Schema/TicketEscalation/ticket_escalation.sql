-- Source: frontend\src\components\Management\CustomerSupport\SupportTickets\TicketEscalation.js
DROP TABLE IF EXISTS `ticket_escalation`;
CREATE TABLE IF NOT EXISTS `ticket_escalation` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `escalation_id` VARCHAR(255) DEFAULT NULL,
    `ticket_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `escalated_by` VARCHAR(255) DEFAULT NULL,
    `escalated_to` VARCHAR(255) DEFAULT NULL,
    `escalation_date` DATETIME DEFAULT NULL,
    `reason` VARCHAR(255) DEFAULT NULL,
    `priority` VARCHAR(100) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
