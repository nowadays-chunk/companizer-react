-- Source: frontend\src\components\Management\ProjectTaskManagement\Milestones\MilestoneReporting.js
DROP TABLE IF EXISTS `milestone_reporting`;
CREATE TABLE IF NOT EXISTS `milestone_reporting` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `report_id` VARCHAR(255) DEFAULT NULL,
    `milestone_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `report_date` DATE DEFAULT NULL,
    `progress_percentage` INT DEFAULT NULL,
    `status_indicator` VARCHAR(100) DEFAULT NULL,
    `reported_by` VARCHAR(255) DEFAULT NULL,
    `risks_identified` VARCHAR(255) DEFAULT NULL,
    `mitigation_plan` VARCHAR(255) DEFAULT NULL,
    `estimated_completion` DATE DEFAULT NULL,
    `blockers` VARCHAR(255) DEFAULT NULL,
    `budget_consumed` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
