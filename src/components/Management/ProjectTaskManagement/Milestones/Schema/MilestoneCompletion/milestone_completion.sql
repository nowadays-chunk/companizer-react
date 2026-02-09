-- Source: frontend\src\components\Management\ProjectTaskManagement\Milestones\MilestoneCompletion.js
DROP TABLE IF EXISTS `milestone_completion`;
CREATE TABLE IF NOT EXISTS `milestone_completion` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `completion_id` VARCHAR(255) DEFAULT NULL,
    `milestone_id` VARCHAR(255) DEFAULT NULL,
    `project_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `completion_date` DATE DEFAULT NULL,
    `is_approved` VARCHAR(255) DEFAULT NULL,
    `approved_by` VARCHAR(255) DEFAULT NULL,
    `deliverables_url` VARCHAR(255) DEFAULT NULL,
    `quality_check_passed` VARCHAR(255) DEFAULT NULL,
    `client_signoff` VARCHAR(255) DEFAULT NULL,
    `signoff_date` DATE DEFAULT NULL,
    `remarks` VARCHAR(255) DEFAULT NULL,
    `delay_variance_days` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
