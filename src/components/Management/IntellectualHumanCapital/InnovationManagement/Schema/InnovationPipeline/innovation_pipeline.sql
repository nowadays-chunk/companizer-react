-- Source: frontend\src\components\Management\IntellectualHumanCapital\InnovationManagement\InnovationPipeline.js
DROP TABLE IF EXISTS `innovation_pipeline`;
CREATE TABLE IF NOT EXISTS `innovation_pipeline` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `innovation_id` VARCHAR(255) DEFAULT NULL,
    `idea_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `stage` VARCHAR(100) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `target_launch_date` DATE DEFAULT NULL,
    `project_lead` VARCHAR(255) DEFAULT NULL,
    `budget_allocated` INT DEFAULT NULL,
    `roi_projection` INT DEFAULT NULL,
    `risks` VARCHAR(255) DEFAULT NULL,
    `progress_percent` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
