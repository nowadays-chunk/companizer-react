-- Source: frontend\src\components\Management\manager_action_logs.js
DROP TABLE IF EXISTS `manager_action_logs`;
CREATE TABLE IF NOT EXISTS `manager_action_logs` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `log_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `action_type` VARCHAR(255) DEFAULT NULL,
    `entity_type` VARCHAR(255) DEFAULT NULL,
    `entity_id` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `unit_price` INT DEFAULT NULL,
    `details` VARCHAR(255) DEFAULT NULL,
    `ip_address` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `user_agent` VARCHAR(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
