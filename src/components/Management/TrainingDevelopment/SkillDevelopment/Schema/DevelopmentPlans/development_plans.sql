-- Source: frontend\src\components\Management\TrainingDevelopment\SkillDevelopment\DevelopmentPlans.js
DROP TABLE IF EXISTS `development_plans`;
CREATE TABLE IF NOT EXISTS `development_plans` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `plan_id` VARCHAR(255) DEFAULT NULL,
    `employee_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `year` INT DEFAULT NULL,
    `career_goal` VARCHAR(255) DEFAULT NULL,
    `manager` VARCHAR(255) DEFAULT NULL,
    `strengths` VARCHAR(255) DEFAULT NULL,
    `areas_for_improvement` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
