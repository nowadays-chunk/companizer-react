-- Source: frontend\src\components\Management\CorporateCommunication\CrisisManagement\CrisisCommunicationLogs.js
DROP TABLE IF EXISTS `crisis_communication_logs`;
CREATE TABLE IF NOT EXISTS `crisis_communication_logs` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `log_id` VARCHAR(255) DEFAULT NULL,
    `incident_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `timestamp` DATETIME DEFAULT NULL,
    `message_content` VARCHAR(255) DEFAULT NULL,
    `channel` VARCHAR(100) DEFAULT NULL,
    `sender` VARCHAR(255) DEFAULT NULL,
    `recipient_group` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `sentiment_analysis` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
