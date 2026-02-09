-- Source: frontend\src\components\Management\InformationTechnology\NetworkManagement\FirewallConfigurations.js
DROP TABLE IF EXISTS `firewall_configurations`;
CREATE TABLE IF NOT EXISTS `firewall_configurations` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `config_id` VARCHAR(255) DEFAULT NULL,
    `firewall_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `rule_name` VARCHAR(255) DEFAULT NULL,
    `action` VARCHAR(100) DEFAULT NULL,
    `source_ip` VARCHAR(255) DEFAULT NULL,
    `destination_ip` VARCHAR(255) DEFAULT NULL,
    `port` INT DEFAULT NULL,
    `protocol` VARCHAR(100) DEFAULT NULL,
    `priority` INT DEFAULT NULL,
    `created_by` VARCHAR(255) DEFAULT NULL,
    `created_date` DATE DEFAULT NULL,
    `is_active` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
