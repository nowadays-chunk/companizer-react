-- Source: frontend\src\components\Management\ProjectTaskManagement\Tasks\TaskAssignments.js
DROP TABLE IF EXISTS `task_assignments`;
CREATE TABLE IF NOT EXISTS `task_assignments` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `assignment_id` VARCHAR(255) DEFAULT NULL,
    `task_id` VARCHAR(255) DEFAULT NULL,
    `assignee_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `assigned_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `effort_estimated` INT DEFAULT NULL,
    `effort_actual` INT DEFAULT NULL,
    `tags` VARCHAR(100) DEFAULT NULL,
    `due_date` DATE DEFAULT NULL,
    `comments` VARCHAR(255) DEFAULT NULL,
    `priority` VARCHAR(100) DEFAULT NULL,
    `completed_date` DATE DEFAULT NULL,
    `type` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
