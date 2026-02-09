-- Source: frontend\src\components\Management\ProjectTaskManagement\Tasks\TaskDependencies.js
DROP TABLE IF EXISTS `task_dependencies`;
CREATE TABLE IF NOT EXISTS `task_dependencies` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `dependency_id` VARCHAR(255) DEFAULT NULL,
    `predecessor_task_id` VARCHAR(255) DEFAULT NULL,
    `successor_task_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `dependency_type` VARCHAR(100) DEFAULT NULL,
    `lag_hours` INT DEFAULT NULL,
    `created_by` VARCHAR(255) DEFAULT NULL,
    `project_id` VARCHAR(255) DEFAULT NULL,
    `is_critical` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
