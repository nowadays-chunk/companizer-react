-- Source: frontend\src\components\Management\ProjectTaskManagement\Projects\ProjectScope.js
DROP TABLE IF EXISTS `project_scope`;
CREATE TABLE IF NOT EXISTS `project_scope` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `scope_id` VARCHAR(255) DEFAULT NULL,
    `project_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `in_scope` VARCHAR(255) DEFAULT NULL,
    `out_of_scope` VARCHAR(255) DEFAULT NULL,
    `approved_date` DATE DEFAULT NULL,
    `version_number` VARCHAR(255) DEFAULT NULL,
    `approved_by` VARCHAR(255) DEFAULT NULL,
    `change_log` VARCHAR(255) DEFAULT NULL,
    `assumptions` VARCHAR(255) DEFAULT NULL,
    `constraints` VARCHAR(255) DEFAULT NULL,
    `document_url` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
