-- Source: frontend\src\components\Management\GovernanceStrategy\AuditTrails\ChangeLogs.js
DROP TABLE IF EXISTS `change_logs`;
CREATE TABLE IF NOT EXISTS `change_logs` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `log_id` VARCHAR(255) DEFAULT NULL,
    `entity_type` VARCHAR(255) DEFAULT NULL,
    `entity_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `change_date` DATE DEFAULT NULL,
    `changed_by` VARCHAR(255) DEFAULT NULL,
    `change_type` VARCHAR(100) DEFAULT NULL,
    `old_value` VARCHAR(255) DEFAULT NULL,
    `new_value` VARCHAR(255) DEFAULT NULL,
    `reason` VARCHAR(255) DEFAULT NULL,
    `ip_address` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
