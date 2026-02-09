-- Source: frontend\src\components\Management\CrisisRiskManagement\CrisisManagement\EmergencyCommunication.js
DROP TABLE IF EXISTS `emergency_communication`;
CREATE TABLE IF NOT EXISTS `emergency_communication` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `comm_id` VARCHAR(255) DEFAULT NULL,
    `incident_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `message_title` VARCHAR(255) DEFAULT NULL,
    `sent_date` DATE DEFAULT NULL,
    `recipient_group` VARCHAR(100) DEFAULT NULL,
    `message_body` VARCHAR(255) DEFAULT NULL,
    `delivery_method` VARCHAR(100) DEFAULT NULL,
    `success_rate` INT DEFAULT NULL,
    `sender_name` VARCHAR(255) DEFAULT NULL,
    `acknowledgement_required` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
