-- Source: frontend\src\components\Management\TrainingDevelopment\SkillDevelopment\TrainingNeedsAnalysis.js
DROP TABLE IF EXISTS `training_needs_analysis`;
CREATE TABLE IF NOT EXISTS `training_needs_analysis` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `analysis_id` VARCHAR(255) DEFAULT NULL,
    `department_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `identified_need` VARCHAR(255) DEFAULT NULL,
    `priority` VARCHAR(100) DEFAULT NULL,
    `recommended_training` VARCHAR(255) DEFAULT NULL,
    `target_audience_count` INT DEFAULT NULL,
    `estimated_budget` INT DEFAULT NULL,
    `request_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
