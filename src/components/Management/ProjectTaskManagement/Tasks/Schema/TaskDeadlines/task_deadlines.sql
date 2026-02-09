-- Source: frontend\src\components\Management\ProjectTaskManagement\Tasks\TaskDeadlines.js
DROP TABLE IF EXISTS `task_deadlines`;
CREATE TABLE IF NOT EXISTS `task_deadlines` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `deadline_id` VARCHAR(255) DEFAULT NULL,
    `task_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `original_deadline` DATE DEFAULT NULL,
    `current_deadline` DATE DEFAULT NULL,
    `extension_count` INT DEFAULT NULL,
    `reason_for_change` VARCHAR(255) DEFAULT NULL,
    `approved_by` VARCHAR(255) DEFAULT NULL,
    `date_changed` DATE DEFAULT NULL,
    `impact_assessment` VARCHAR(255) DEFAULT NULL,
    `is_hard_deadline` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
