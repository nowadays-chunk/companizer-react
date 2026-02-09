-- Source: frontend\src\components\Management\IntellectualHumanCapital\RDProjects\ProjectMilestones.js
DROP TABLE IF EXISTS `project_milestones_ihc`;
CREATE TABLE IF NOT EXISTS `project_milestones_ihc` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `milestone_id` VARCHAR(255) DEFAULT NULL,
    `project_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `name` VARCHAR(255) DEFAULT NULL,
    `due_date` DATE DEFAULT NULL,
    `completion_percentage` INT DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `deliverables` VARCHAR(255) DEFAULT NULL,
    `owner` VARCHAR(255) DEFAULT NULL,
    `approval_date` DATE DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
