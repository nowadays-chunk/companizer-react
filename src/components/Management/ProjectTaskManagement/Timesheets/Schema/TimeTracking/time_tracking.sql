-- Source: frontend\src\components\Management\ProjectTaskManagement\Timesheets\TimeTracking.js
DROP TABLE IF EXISTS `time_tracking`;
CREATE TABLE IF NOT EXISTS `time_tracking` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `tracking_id` VARCHAR(255) DEFAULT NULL,
    `task_id` VARCHAR(255) DEFAULT NULL,
    `employee_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `start_time` VARCHAR(255) DEFAULT NULL,
    `end_time` VARCHAR(255) DEFAULT NULL,
    `duration_minutes` INT DEFAULT NULL,
    `tags` VARCHAR(100) DEFAULT NULL,
    `date` DATE DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `is_billable` VARCHAR(255) DEFAULT NULL,
    `project_id` VARCHAR(255) DEFAULT NULL,
    `location` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
