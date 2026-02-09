-- Source: frontend\src\components\Management\InformationTechnology\SoftwareManagement\BugTracking.js
DROP TABLE IF EXISTS `bug_tracking`;
CREATE TABLE IF NOT EXISTS `bug_tracking` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `bug_id` VARCHAR(255) DEFAULT NULL,
    `project_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `title` VARCHAR(255) DEFAULT NULL,
    `severity` VARCHAR(100) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `tags` VARCHAR(100) DEFAULT NULL,
    `reported_by` VARCHAR(255) DEFAULT NULL,
    `assigned_to` VARCHAR(255) DEFAULT NULL,
    `created_date` DATE DEFAULT NULL,
    `reproduction_steps` VARCHAR(255) DEFAULT NULL,
    `environment` VARCHAR(255) DEFAULT NULL,
    `version_found` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
