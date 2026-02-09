-- Source: frontend\src\components\Management\CustomerSupport\SupportTickets\TicketResolution.js
DROP TABLE IF EXISTS `ticket_resolution`;
CREATE TABLE IF NOT EXISTS `ticket_resolution` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `resolution_id` VARCHAR(255) DEFAULT NULL,
    `ticket_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `resolution_date` DATETIME DEFAULT NULL,
    `resolved_by` VARCHAR(255) DEFAULT NULL,
    `solution` VARCHAR(255) DEFAULT NULL,
    `customer_confirmed` VARCHAR(255) DEFAULT NULL,
    `time_spent_minutes` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
