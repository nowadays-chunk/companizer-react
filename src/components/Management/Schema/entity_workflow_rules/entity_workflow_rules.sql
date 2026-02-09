-- Source: frontend\src\components\Management\entity_workflow_rules.js
DROP TABLE IF EXISTS `entity_workflow_rules`;
CREATE TABLE IF NOT EXISTS `entity_workflow_rules` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `entity_type` VARCHAR(255) DEFAULT NULL,
    `current_step` VARCHAR(255) DEFAULT NULL,
    `action_name` VARCHAR(255) DEFAULT NULL,
    `rule_type` VARCHAR(100) DEFAULT NULL,
    `rule_value` VARCHAR(255) DEFAULT NULL,
    `error_message` VARCHAR(255) DEFAULT NULL,
    `is_active` VARCHAR(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
