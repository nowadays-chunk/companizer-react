-- Source: frontend\src\components\Management\LegalCompliance\IntellectualProperty\IpMonitoring.js
DROP TABLE IF EXISTS `ip_monitoring`;
CREATE TABLE IF NOT EXISTS `ip_monitoring` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `monitoring_id` VARCHAR(255) DEFAULT NULL,
    `ip_asset_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `alert_date` DATE DEFAULT NULL,
    `source` VARCHAR(255) DEFAULT NULL,
    `potential_infringement` VARCHAR(255) DEFAULT NULL,
    `severity` VARCHAR(100) DEFAULT NULL,
    `action_taken` VARCHAR(100) DEFAULT NULL,
    `analyst` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
